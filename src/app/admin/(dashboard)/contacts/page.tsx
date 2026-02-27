"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Contact = {
  id: number
  name: string | null
  phone: string
  brand: string | null
  website: string | null
  createdAt: string
}

export default function AdminContactsPage() {
  const [list, setList] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("/api/admin/contacts", { credentials: "include" })
      .then((res) => {
        if (res.status === 401) {
          window.location.href = "/admin/login"
          return []
        }
        if (!res.ok) throw new Error("加载失败")
        return res.json()
      })
      .then(setList)
      .catch(() => setError("加载失败"))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className="text-white/60">加载中…</p>
  if (error) return <p className="text-red-400">{error}</p>

  return (
    <Card className="bg-[oklch(0.15_0.02_250)] border-white/10">
      <CardHeader>
        <CardTitle className="text-white">留言记录</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-white/80">
            <thead>
              <tr className="border-b border-white/20">
                <th className="py-2 pr-4">姓名</th>
                <th className="py-2 pr-4">电话</th>
                <th className="py-2 pr-4">品牌</th>
                <th className="py-2 pr-4">官网</th>
                <th className="py-2">提交时间</th>
              </tr>
            </thead>
            <tbody>
              {list.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-6 text-white/50 text-center">暂无留言</td>
                </tr>
              ) : (
                list.map((row) => (
                  <tr key={row.id} className="border-b border-white/10">
                    <td className="py-3 pr-4">{row.name ?? "—"}</td>
                    <td className="py-3 pr-4">{row.phone}</td>
                    <td className="py-3 pr-4">{row.brand ?? "—"}</td>
                    <td className="py-3 pr-4">
                      {row.website ? (
                        <a href={row.website} target="_blank" rel="noopener noreferrer" className="text-[oklch(0.7_0.22_265)] hover:underline truncate max-w-[200px] block">
                          {row.website}
                        </a>
                      ) : "—"}
                    </td>
                    <td className="py-3">{new Date(row.createdAt).toLocaleString("zh-CN")}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
