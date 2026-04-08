"use client"

import { useEffect, useState } from "react"
import { RichTextEditor } from "../../components/RichTextEditor"
import { ImageUpload } from "../../components/ImageUpload"
import { ArrowLeft, Save, Plus, Trash2 } from "lucide-react"

type Case = {
  id: number
  name: string
  industry: string
  logo: string
  coverImage: string | null
  challenge: string
  solution: string
  results: string[]
  color: string
  createdAt: string
}

type CaseForm = Omit<Case, "id" | "createdAt" | "results"> & { results: string }

const COLOR_OPTIONS = ["pink", "amber", "blue", "green", "purple", "indigo"]

const colorMap: Record<string, string> = {
  pink: "bg-pink-50",
  amber: "bg-amber-50",
  blue: "bg-blue-50",
  green: "bg-green-50",
  purple: "bg-purple-50",
  indigo: "bg-indigo-50",
}

export default function AdminCasesPage() {
  const [data, setData] = useState<{ list: Case[]; total: number; totalPages: number } | null>(null)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [view, setView] = useState<"list" | "edit" | "new">("list")
  const [editingItem, setEditingItem] = useState<Case | null>(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState<CaseForm>({
    name: "",
    industry: "",
    logo: "",
    coverImage: "",
    challenge: "",
    solution: "",
    results: "",
    color: "blue",
  })

  useEffect(() => {
    setLoading(true)
    fetch(`/api/admin/cases?page=${page}`, { credentials: "include" })
      .then((res) => {
        if (res.status === 401) { window.location.href = "/admin/login"; return null }
        if (!res.ok) throw new Error("加载失败")
        return res.json()
      })
      .then((d) => { if (d) setData(d) })
      .catch(() => setError("加载失败"))
      .finally(() => setLoading(false))
  }, [page, view])

  function openEdit(item: Case) {
    setEditingItem(item)
    setForm({
      ...item,
      results: Array.isArray(item.results) ? item.results.join("\n") : item.results,
      coverImage: item.coverImage || "",
    })
    setView("edit")
    setError("")
  }

  function openNew() {
    setEditingItem(null)
    setForm({
      name: "",
      industry: "",
      logo: "",
      coverImage: "",
      challenge: "",
      solution: "",
      results: "",
      color: "blue",
    })
    setView("new")
    setError("")
  }

  function goBack() {
    setView("list")
    setEditingItem(null)
    setError("")
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setSaving(true)
    const resultsArray = form.results.split("\n").map((s) => s.trim()).filter(Boolean)
    const payload = {
      ...form,
      results: resultsArray,
    }
    try {
      const url = editingItem ? `/api/admin/cases/${editingItem.id}` : "/api/admin/cases"
      const method = editingItem ? "PUT" : "POST"
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      })
      const d = await res.json().catch(() => ({}))
      if (!res.ok) { setError(d.error || "保存失败"); return }
      goBack()
    } catch {
      setError("网络错误")
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("确定删除此案例？")) return
    await fetch(`/api/admin/cases/${id}`, { method: "DELETE", credentials: "include" })
    const refresh = await fetch(`/api/admin/cases?page=${page}`, { credentials: "include" }).then(r => r.json())
    setData(refresh)
  }

  if (loading) return <p className="text-white/60">加载中...</p>

  // ---- Edit / New View ----
  if (view === "edit" || view === "new") {
    return (
      <div>
        <div className="flex items-center gap-4 mb-6">
          <button onClick={goBack} className="text-white/60 hover:text-white transition-colors">
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-lg font-medium text-white">
            {view === "edit" ? "编辑案例" : "新增案例"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">名称</label>
              <input
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
                className="w-full rounded-lg border border-white/20 bg-[oklch(0.12_0.02_250)] px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20"
                placeholder="小野和子"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">行业</label>
              <input
                value={form.industry}
                onChange={(e) => setForm((f) => ({ ...f, industry: e.target.value }))}
                required
                className="w-full rounded-lg border border-white/20 bg-[oklch(0.12_0.02_250)] px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20"
                placeholder="美妆电商"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Logo图标</label>
              <div className="flex gap-3 items-center">
                <ImageUpload
                  value={form.logo}
                  onChange={(url) => setForm((f) => ({ ...f, logo: url }))}
                  placeholder="Logo"
                />
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${colorMap[form.color] || "bg-blue-50"}`}>
                  {form.logo ? (
                    <img src={form.logo} alt="logo" className="w-full h-full object-contain rounded" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; (e.target as HTMLImageElement).parentElement!.textContent = "?" }} />
                  ) : "?"}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">配色</label>
              <div className="flex gap-2 flex-wrap mt-1">
                {COLOR_OPTIONS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, color: c }))}
                    className={`w-8 h-8 rounded-lg ${colorMap[c]} border-2 transition-all ${form.color === c ? "border-brand-blue scale-110" : "border-transparent"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-1">封面图</label>
            <ImageUpload
              value={form.coverImage || ""}
              onChange={(url) => setForm((f) => ({ ...f, coverImage: url }))}
              placeholder="封面图"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-1">挑战</label>
            <RichTextEditor
              value={form.challenge}
              onChange={(html) => setForm((f) => ({ ...f, challenge: html }))}
              placeholder="品牌在AI搜索中曝光不足..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-1">解决方案</label>
            <RichTextEditor
              value={form.solution}
              onChange={(html) => setForm((f) => ({ ...f, solution: html }))}
              placeholder="通过GEO全案服务..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-1">核心成果（每行一条）</label>
            <textarea
              value={form.results}
              onChange={(e) => setForm((f) => ({ ...f, results: e.target.value }))}
              rows={3}
              className="w-full rounded-lg border border-white/20 bg-[oklch(0.12_0.02_250)] px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20 resize-none"
              placeholder="AI推荐率提升至行业第一&#10;品牌曝光量增长300%"
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[oklch(0.6_0.2_250)] to-[oklch(0.5_0.2_280)] px-6 py-3 text-sm font-medium text-white hover:opacity-90 disabled:opacity-50"
            >
              <Save size={16} />
              {saving ? "保存中..." : "保存"}
            </button>
            <button
              type="button"
              onClick={goBack}
              className="px-6 py-3 rounded-lg border border-white/20 text-sm text-white hover:bg-white/10"
            >
              取消
            </button>
          </div>
        </form>
      </div>
    )
  }

  // ---- List View ----
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-white">案例管理</h2>
        <button
          onClick={openNew}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[oklch(0.6_0.2_250)] to-[oklch(0.5_0.2_280)] text-sm text-white font-medium hover:opacity-90 transition-opacity"
        >
          <Plus size={16} />
          新增案例
        </button>
      </div>

      {data?.list.length === 0 ? (
        <p className="text-white/50">暂无案例</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data?.list.map((item) => (
            <div key={item.id} className="rounded-xl border border-white/10 bg-[oklch(0.15_0.02_250)] overflow-hidden">
              {item.coverImage && (
                <img src={item.coverImage} alt={item.name} className="w-full h-32 object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }} />
              )}
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${colorMap[item.color] || "bg-blue-50"}`}>
                    {item.logo ? (
                      item.logo.startsWith("/") || item.logo.startsWith("http") ? (
                        <img src={item.logo} alt="" className="w-full h-full object-contain rounded" onError={(e) => { const img = e.target as HTMLImageElement; img.style.display = "none"; if (img.parentElement) img.parentElement.textContent = "?" }} />
                      ) : (
                        item.logo
                      )
                    ) : "?"}
                  </div>
                  <div>
                    <div className="text-white font-medium">{item.name}</div>
                    <div className="text-xs text-white/60">{item.industry}</div>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => openEdit(item)}
                    className="flex-1 px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                  >
                    编辑
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1.5 text-xs bg-red-500/20 hover:bg-red-500/40 text-red-300 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <Trash2 size={12} />
                    删除
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {data && data.totalPages > 1 && (
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
          <span className="text-sm text-white/60">共 {data.total} 条</span>
          <div className="flex gap-2">
            <button onClick={() => setPage(page - 1)} disabled={page <= 1} className="px-3 py-1 text-sm bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded text-white transition-colors">上一页</button>
            <button onClick={() => setPage(page + 1)} disabled={page >= data.totalPages} className="px-3 py-1 text-sm bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded text-white transition-colors">下一页</button>
          </div>
        </div>
      )}
    </div>
  )
}
