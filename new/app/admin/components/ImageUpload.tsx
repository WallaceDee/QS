"use client"

import { useRef, useState } from "react"
import { Upload, X, ImageIcon } from "lucide-react"

type Props = {
  value: string
  onChange: (url: string) => void
  placeholder?: string
}

export function ImageUpload({ value, onChange, placeholder }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState("")

  async function handleFile(file: File) {
    if (!file.type.startsWith("image/")) {
      setError("请选择图片文件")
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("图片大小不能超过 5MB")
      return
    }

    setUploading(true)
    setError("")

    const formData = new FormData()
    formData.append("file", file)

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        credentials: "include",
        body: formData,
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || "上传失败")
        return
      }
      onChange(data.url)
    } catch {
      setError("上传失败，请重试")
    } finally {
      setUploading(false)
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
    e.target.value = ""
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }

  function handleClear() {
    onChange("")
  }

  return (
    <div className="space-y-2">
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/gif,image/webp"
        onChange={handleChange}
        className="hidden"
      />

      {value ? (
        <div className="relative inline-block">
          <img
            src={value}
            alt=""
            className="w-32 h-32 object-cover rounded-lg border border-white/20"
            onError={(e) => {
              setError("图片加载失败")
              ;(e.target as HTMLImageElement).style.display = "none"
            }}
          />
          <div className="absolute -top-2 -right-2 flex gap-1">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              title="更换图片"
            >
              <Upload size={12} />
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="w-6 h-6 rounded-full bg-red-500/60 hover:bg-red-500/80 flex items-center justify-center text-white transition-colors"
              title="移除图片"
            >
              <X size={12} />
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className={`w-32 h-32 rounded-lg border-2 border-dashed border-white/20 flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors ${
            uploading ? "opacity-50 cursor-not-allowed" : "hover:border-white/40 hover:bg-white/5"
          }`}
        >
          {uploading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span className="text-xs text-white/50">上传中...</span>
            </>
          ) : (
            <>
              <ImageIcon size={20} className="text-white/40" />
              <span className="text-xs text-white/50 text-center px-2">{placeholder || "点击上传"}</span>
            </>
          )}
        </div>
      )}

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}
