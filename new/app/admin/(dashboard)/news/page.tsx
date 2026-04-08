"use client"

import { useEffect, useState } from "react"
import { RichTextEditor } from "../../components/RichTextEditor"
import { ImageUpload } from "../../components/ImageUpload"
import { ArrowLeft, Save, Plus, Trash2 } from "lucide-react"
import Link from "next/link"

type News = {
  id: number
  title: string
  slug: string
  date: string
  category: string
  excerpt: string
  coverImage: string | null
  content: string | null
  featured: boolean
  createdAt: string
}

type NewsForm = Omit<News, "id" | "createdAt" | "slug">

const CATEGORIES = ["公司新闻", "荣誉资质", "业务动态", "合作动态"]

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60)
}

export default function AdminNewsPage() {
  const [data, setData] = useState<{ list: News[]; total: number; totalPages: number } | null>(null)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [categoryFilter, setCategoryFilter] = useState("")
  const [view, setView] = useState<"list" | "edit" | "new">("list")
  const [editingItem, setEditingItem] = useState<News | null>(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState<NewsForm>({
    title: "",
    date: new Date().toLocaleDateString("zh-CN"),
    category: "公司新闻",
    excerpt: "",
    coverImage: "",
    content: "",
    featured: false,
  })

  useEffect(() => {
    setLoading(true)
    const url = `/api/admin/news?page=${page}${categoryFilter ? `&category=${encodeURIComponent(categoryFilter)}` : ""}`
    fetch(url, { credentials: "include" })
      .then((res) => {
        if (res.status === 401) { window.location.href = "/admin/login"; return null }
        if (!res.ok) throw new Error("加载失败")
        return res.json()
      })
      .then((d) => { if (d) setData(d) })
      .catch(() => setError("加载失败"))
      .finally(() => setLoading(false))
  }, [page, categoryFilter, view])

  function openEdit(item: News) {
    setEditingItem(item)
    setForm({
      title: item.title,
      date: item.date,
      category: item.category,
      excerpt: item.excerpt,
      coverImage: item.coverImage || "",
      content: item.content || "",
      featured: item.featured,
    })
    setView("edit")
    setError("")
  }

  function openNew() {
    setEditingItem(null)
    setForm({
      title: "",
      date: new Date().toLocaleDateString("zh-CN"),
      category: "公司新闻",
      excerpt: "",
      coverImage: "",
      content: "",
      featured: false,
    })
    setView("new")
    setError("")
  }

  function goBack() {
    setView("list")
    setEditingItem(null)
    setError("")
  }

  function handleTitleChange(value: string) {
    setForm((f) => ({ ...f, title: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setSaving(true)
    try {
      const payload = {
        ...form,
        slug: slugify(form.title),
      }
      const url = editingItem ? `/api/admin/news/${editingItem.id}` : "/api/admin/news"
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
    if (!confirm("确定删除此新闻？")) return
    await fetch(`/api/admin/news/${id}`, { method: "DELETE", credentials: "include" })
    const refresh = await fetch(`/api/admin/news?page=${page}${categoryFilter ? `&category=${encodeURIComponent(categoryFilter)}` : ""}`, { credentials: "include" }).then(r => r.json())
    setData(refresh)
  }

  const categoryColors: Record<string, string> = {
    "公司新闻": "bg-brand-blue-light text-brand-blue",
    "荣誉资质": "bg-green-100 text-green-700",
    "业务动态": "bg-orange-100 text-orange-700",
    "合作动态": "bg-purple-100 text-purple-600",
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
            {view === "edit" ? "编辑新闻" : "新增新闻"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1">标题</label>
            <input
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              required
              className="w-full rounded-lg border border-white/20 bg-[oklch(0.12_0.02_250)] px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20"
              placeholder="请输入新闻标题"
            />
            {form.title && (
              <p className="mt-1 text-xs text-white/40">URL: /news/{slugify(form.title)}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">日期</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                required
                className="w-full rounded-lg border border-white/20 bg-[oklch(0.12_0.02_250)] px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">分类</label>
              <select
                value={form.category}
                onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                className="w-full rounded-lg border border-white/20 bg-[oklch(0.12_0.02_250)] px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/20"
              >
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
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
            <label className="block text-sm font-medium text-white/80 mb-1">摘要</label>
            <textarea
              value={form.excerpt}
              onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
              required
              rows={3}
              className="w-full rounded-lg border border-white/20 bg-[oklch(0.12_0.02_250)] px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20 resize-none"
              placeholder="新闻摘要..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-1">正文内容</label>
            <RichTextEditor
              value={form.content || ""}
              onChange={(html) => setForm((f) => ({ ...f, content: html }))}
              placeholder="请输入正文内容..."
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="featured"
              checked={form.featured}
              onChange={(e) => setForm((f) => ({ ...f, featured: e.target.checked }))}
              className="rounded border-white/20"
            />
            <label htmlFor="featured" className="text-sm text-white">设为精选新闻</label>
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
        <h2 className="text-lg font-medium text-white">新闻管理</h2>
        <button
          onClick={openNew}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[oklch(0.6_0.2_250)] to-[oklch(0.5_0.2_280)] text-sm text-white font-medium hover:opacity-90 transition-opacity"
        >
          <Plus size={16} />
          新增新闻
        </button>
      </div>

      <div className="flex gap-2 flex-wrap mb-4">
        <button
          onClick={() => { setCategoryFilter(""); setPage(1) }}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${!categoryFilter ? "bg-brand-blue text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
        >
          全部
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => { setCategoryFilter(c); setPage(1) }}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${categoryFilter === c ? "bg-brand-blue text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
          >
            {c}
          </button>
        ))}
      </div>

      {data?.list.length === 0 ? (
        <p className="text-white/50">暂无新闻</p>
      ) : (
        <div className="space-y-3">
          {data?.list.map((item) => (
            <div key={item.id} className="flex items-center gap-4 rounded-xl border border-white/10 bg-[oklch(0.15_0.02_250)] p-4">
              {item.coverImage && (
                <img src={item.coverImage} alt="" className="w-16 h-12 object-cover rounded-lg flex-shrink-0" onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }} />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[item.category] || "bg-white/10 text-white/70"}`}>
                    {item.category}
                  </span>
                  {item.featured && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-[oklch(0.6_0.2_250)] to-[oklch(0.5_0.2_280)] text-white">
                      精选
                    </span>
                  )}
                </div>
                <div className="text-white font-medium truncate">{item.title}</div>
                <div className="text-sm text-white/60">{item.date} · /news/{item.slug}</div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button onClick={() => openEdit(item)} className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors">编辑</button>
                <button onClick={() => handleDelete(item.id)} className="px-3 py-1 text-xs bg-red-500/20 hover:bg-red-500/40 text-red-300 rounded-lg transition-colors flex items-center gap-1">
                  <Trash2 size={12} />
                  删除
                </button>
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
