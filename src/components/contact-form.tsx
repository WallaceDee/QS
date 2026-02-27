"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSuccess(false)
    const form = e.currentTarget
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim()
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim()
    const brand = (form.elements.namedItem("brand") as HTMLInputElement).value.trim()
    const website = (form.elements.namedItem("website") as HTMLInputElement).value.trim()

    if (!phone) {
      setError("请填写电话")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name || undefined, phone, brand: brand || undefined, website: website || undefined }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error ?? "提交失败，请稍后重试")
        return
      }
      setSuccess(true)
      form.reset()
      if (data.message) setError(data.message)
    } catch {
      setError("网络错误，请稍后重试")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="bg-[oklch(0.15_0.02_250)] border-white/10">
      <CardHeader>
        <CardTitle className="text-white">在线留言</CardTitle>
        <CardDescription className="text-white/60">填写以下表单，我们的顾问将尽快与您联系</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-white">姓名</label>
            <Input name="name" placeholder="您的姓名" className="mt-1 bg-[oklch(0.12_0.02_250)] border-white/20 text-white placeholder:text-white/40" />
          </div>
          <div>
            <label className="text-sm font-medium text-white">电话 <span className="text-red-400">*</span></label>
            <Input name="phone" type="tel" placeholder="您的电话" required className="mt-1 bg-[oklch(0.12_0.02_250)] border-white/20 text-white placeholder:text-white/40" />
          </div>
          <div>
            <label className="text-sm font-medium text-white">您想优化的品牌</label>
            <Input name="brand" placeholder="您想优化的品牌" className="mt-1 bg-[oklch(0.12_0.02_250)] border-white/20 text-white placeholder:text-white/40" />
          </div>
          <div>
            <label className="text-sm font-medium text-white">品牌官网</label>
            <Input name="website" type="url" placeholder="品牌官网链接" className="mt-1 bg-[oklch(0.12_0.02_250)] border-white/20 text-white placeholder:text-white/40" />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          {success && <p className="text-sm text-green-400">我们已收到您的留言，将尽快与您联系。</p>}
          <Button type="submit" variant="gradient" className="w-full" disabled={loading}>
            {loading ? "提交中…" : "提交"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
