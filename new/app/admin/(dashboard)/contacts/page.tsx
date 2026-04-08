"use client"

import { useEffect, useState } from "react"

type Contact = {
  id: number
  name: string | null
  phone: string
  email: string | null
  company: string | null
  message: string | null
  brand: string | null
  website: string | null
  createdAt: string
}

type PaginatedResponse = {
  list: Contact[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export default function AdminContactsPage() {
  const [data, setData] = useState<PaginatedResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [page, setPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/admin/contacts?page=${page}`, { credentials: "include" })
      .then((res) => {
        if (res.status === 401) {
          window.location.href = "/admin/login"
          return null
        }
        if (!res.ok) throw new Error("加载失败")
        return res.json()
      })
      .then((data) => {
        if (data) setData(data)
      })
      .catch(() => setError("加载失败"))
      .finally(() => setLoading(false))
  }, [page])

  if (loading) return <p className="text-white/60">加载中...</p>
  if (error) return <p className="text-red-400">{error}</p>
  if (!data) return null

  const { list, total, totalPages } = data

  return (
    <div className="rounded-xl border border-white/10 bg-[oklch(0.15_0.02_250)] p-6">
      <h2 className="text-lg font-medium text-white mb-4">留言记录</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-white/80">
          <thead>
            <tr className="border-b border-white/20">
              <th className="pb-3 pr-4">邮箱</th>
              <th className="pb-3 pr-4">公司</th>
              <th className="pb-3 pr-4">需求</th>
              <th className="pb-3 pr-4">姓名</th>
              <th className="pb-3 pr-4">电话</th>
              <th className="pb-3">提交时间</th>
            </tr>
          </thead>
          <tbody>
            {list.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-white/50 text-center">暂无留言</td>
              </tr>
            ) : (
              list.map((row) => (
                <tr key={row.id} className="border-b border-white/10">
                  <td className="py-3 pr-4">{row.email ?? "—"}</td>
                  <td className="py-3 pr-4">{row.company ?? "—"}</td>
                  <td className="py-3 pr-4">
                    {row.message ? (
                      <span className="line-clamp-2" title={row.message}>{row.message}</span>
                    ) : "—"}
                  </td>
                  <td className="py-3 pr-4">{row.name ?? "—"}</td>
                  <td className="py-3 pr-4">{row.phone}</td>
                  <td className="py-3">{new Date(row.createdAt).toLocaleString("zh-CN")}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
          <span className="text-sm text-white/60">
            共 {total} 条，第 {page}/{totalPages} 页
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page <= 1}
              className="px-3 py-1 text-sm bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded transition-colors text-white"
            >
              上一页
            </button>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page >= totalPages}
              className="px-3 py-1 text-sm bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded transition-colors text-white"
            >
              下一页
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
