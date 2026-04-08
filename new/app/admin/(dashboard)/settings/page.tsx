"use client"

import { useEffect, useState } from "react"

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

  if (loading) return <p className="text-white/60">加载中...</p>
  if (error && !settings) return <p className="text-red-400">{error}</p>

  const formSettings: SettingsForm = settings ?? defaultSettings

  return (
    <div className="rounded-xl border border-white/10 bg-[oklch(0.15_0.02_250)] p-6 max-w-xl">
      <h2 className="text-lg font-medium text-white mb-1">邮件服务设置</h2>
      <p className="text-sm text-white/60 mb-6">配置 SMTP 后，联系表单提交时会向收件邮箱发送通知</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-white">SMTP 主机</label>
          <input
            type="text"
            value={formSettings.host}
            onChange={(e) => setSettings({ ...formSettings, host: e.target.value })}
            className="mt-1 w-full rounded-lg border border-white/20 bg-[oklch(0.12_0.02_250)] px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            placeholder="smtp.example.com"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-white">端口</label>
          <input
            type="number"
            value={formSettings.port}
            onChange={(e) => setSettings({ ...formSettings, port: parseInt(e.target.value, 10) || 587 })}
            className="mt-1 w-full rounded-lg border border-white/20 bg-[oklch(0.12_0.02_250)] px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
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
          <input
            type="text"
            value={formSettings.user}
            onChange={(e) => setSettings({ ...formSettings, user: e.target.value })}
            className="mt-1 w-full rounded-lg border border-white/20 bg-[oklch(0.12_0.02_250)] px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            placeholder="user@example.com"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-white">发件密码 / 授权码</label>
          <div className="relative mt-1">
            <input
              type={showPass ? "text" : "password"}
              value={formSettings.pass}
              onChange={(e) => setSettings({ ...formSettings, pass: e.target.value })}
              className="w-full rounded-lg border border-white/20 bg-[oklch(0.12_0.02_250)] px-3 py-2 pr-10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="留空表示不修改（仅首次或修改时必填）"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors text-sm"
            >
              {showPass ? "隐藏" : "显示"}
            </button>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-white">收件邮箱</label>
          <input
            type="email"
            value={formSettings.to}
            onChange={(e) => setSettings({ ...formSettings, to: e.target.value })}
            className="mt-1 w-full rounded-lg border border-white/20 bg-[oklch(0.12_0.02_250)] px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            placeholder="contact@qusou.tech"
            required
          />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        {success && <p className="text-sm text-green-400">已保存</p>}
        <button
          type="submit"
          disabled={saving}
          className="w-full rounded-lg bg-gradient-to-r from-[oklch(0.6_0.2_250)] to-[oklch(0.5_0.2_280)] py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {saving ? "保存中..." : "保存"}
        </button>
      </form>
    </div>
  )
}
