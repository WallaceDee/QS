"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"

type Settings = {
  host: string
  port: number
  secure: boolean
  user: string
  pass: string
  to: string
} | null

type SettingsForm = NonNullable<Settings>

const defaultSettings: SettingsForm = {
  host: "",
  port: 587,
  secure: false,
  user: "",
  pass: "",
  to: "",
}

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Settings>(defaultSettings)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [showPass, setShowPass] = useState(false)

  useEffect(() => {
    fetch("/api/admin/settings", { credentials: "include" })
      .then((res) => {
        if (res.status === 401) {
          window.location.href = "/admin/login"
          return null
        }
        if (!res.ok) throw new Error("加载失败")
        return res.json()
      })
      .then((data) => setSettings(data ?? defaultSettings))
      .catch(() => setError("加载失败"))
      .finally(() => setLoading(false))
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!settings) return
    setError("")
    setSuccess(false)
    setSaving(true)
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(settings),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error ?? "保存失败")
        return
      }
      setSuccess(true)
    } catch {
      setError("网络错误")
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <p className="text-white/60">加载中…</p>
  if (error && !settings) return <p className="text-red-400">{error}</p>

  const formSettings: SettingsForm = settings ?? defaultSettings

  return (
    <Card className="bg-[oklch(0.15_0.02_250)] border-white/10 max-w-xl">
      <CardHeader>
        <CardTitle className="text-white">邮件服务设置</CardTitle>
        <CardDescription className="text-white/60">配置 SMTP 后，联系表单提交时会向收件邮箱发送通知</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-white">SMTP 主机</label>
            <Input
              value={formSettings.host}
              onChange={(e) => setSettings({ ...formSettings, host: e.target.value })}
              className="mt-1 bg-[oklch(0.12_0.02_250)] border-white/20 text-white"
              placeholder="smtp.example.com"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-white">端口</label>
            <Input
              type="number"
              value={formSettings.port}
              onChange={(e) => setSettings({ ...formSettings, port: parseInt(e.target.value, 10) || 587 })}
              className="mt-1 bg-[oklch(0.12_0.02_250)] border-white/20 text-white"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="secure"
              checked={formSettings.secure}
              onChange={(e) => setSettings({ ...formSettings, secure: e.target.checked })}
              className="rounded border-white/20"
            />
            <label htmlFor="secure" className="text-sm text-white">使用 SSL/TLS (secure)</label>
          </div>
          <div>
            <label className="text-sm font-medium text-white">发件账号</label>
            <Input
              value={formSettings.user}
              onChange={(e) => setSettings({ ...formSettings, user: e.target.value })}
              className="mt-1 bg-[oklch(0.12_0.02_250)] border-white/20 text-white"
              placeholder="user@example.com"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-white">发件密码 / 授权码</label>
            <div className="relative mt-1">
              <Input
                type={showPass ? "text" : "password"}
                value={formSettings.pass}
                onChange={(e) => setSettings({ ...formSettings, pass: e.target.value })}
                className="pr-10 bg-[oklch(0.12_0.02_250)] border-white/20 text-white"
                placeholder="留空表示不修改（仅首次或修改时必填）"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-white">收件邮箱</label>
            <Input
              value={formSettings.to}
              onChange={(e) => setSettings({ ...formSettings, to: e.target.value })}
              type="email"
              className="mt-1 bg-[oklch(0.12_0.02_250)] border-white/20 text-white"
              placeholder="contact@qusou.tech"
              required
            />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          {success && <p className="text-sm text-green-400">已保存</p>}
          <Button type="submit" variant="gradient" disabled={saving}>
            {saving ? "保存中…" : "保存"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
