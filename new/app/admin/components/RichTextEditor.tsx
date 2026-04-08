"use client"

import { useEffect, useRef, useState } from "react"
import { Bold, Italic, Heading2, Heading3, List, ListOrdered, Link, RemoveFormatting } from "lucide-react"

type Props = {
  value: string
  onChange: (html: string) => void
  placeholder?: string
}

export function RichTextEditor({ value, onChange, placeholder }: Props) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [activeFormats, setActiveFormats] = useState<Set<string>>(new Set())

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value
    }
  }, [value])

  function updateActiveFormats() {
    const formats = new Set<string>()
    if (document.queryCommandState("bold")) formats.add("bold")
    if (document.queryCommandState("italic")) formats.add("italic")
    setActiveFormats(formats)
  }

  function execCommand(command: string, value?: string) {
    document.execCommand(command, false, value)
    editorRef.current?.focus()
    updateActiveFormats()
    onChange(editorRef.current?.innerHTML || "")
  }

  function handleLink() {
    const url = prompt("请输入链接地址：")
    if (url) {
      execCommand("createLink", url)
    }
  }

  function handleInput() {
    onChange(editorRef.current?.innerHTML || "")
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Tab") {
      e.preventDefault()
      execCommand("insertText", "    ")
    }
  }

  const tools = [
    { icon: Bold, command: "bold", title: "粗体" },
    { icon: Italic, command: "italic", title: "斜体" },
    { icon: Heading2, command: "formatBlock", value: "h2", title: "标题2" },
    { icon: Heading3, command: "formatBlock", value: "h3", title: "标题3" },
    { icon: List, command: "insertUnorderedList", title: "无序列表" },
    { icon: ListOrdered, command: "insertOrderedList", title: "有序列表" },
    { icon: Link, action: handleLink, title: "链接" },
    { icon: RemoveFormatting, command: "removeFormat", title: "清空格式" },
  ] as const

  return (
    <div className="rounded-lg border border-white/20 bg-[oklch(0.12_0.02_250)] overflow-hidden">
      <div className="flex flex-wrap gap-1 p-2 border-b border-white/10 bg-[oklch(0.1_0.02_250)]">
        {tools.map((tool) => {
          const Icon = tool.icon
          return (
            <button
              key={tool.title}
              type="button"
              title={tool.title}
              onClick={() => {
                if ("action" in tool) {
                  tool.action()
                } else if ("value" in tool) {
                  execCommand(tool.command, tool.value)
                } else {
                  execCommand(tool.command)
                }
              }}
              className={`p-1.5 rounded transition-colors ${
                "command" in tool && activeFormats.has(tool.command)
                  ? "bg-brand-blue text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={16} />
            </button>
          )
        })}
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onSelect={updateActiveFormats}
        onBlur={updateActiveFormats}
        data-placeholder={placeholder}
        className="prose prose-sm max-w-none p-4 min-h-[200px] text-white outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-white/40 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_a]:text-brand-blue [&_a]:underline"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  )
}
