import { redirect } from "next/navigation"
import { getAdminCookie, isAdminAuthenticated } from "@/lib/auth"
import Link from "next/link"

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookie = await getAdminCookie()
  if (!isAdminAuthenticated(cookie)) {
    redirect("/admin/login")
  }
  return (
    <div className="min-h-screen bg-[oklch(0.15_0.02_250)]">
      <nav className="container mx-auto flex items-center gap-6 px-4 py-4 border-b border-white/10">
        <Link href="/admin/contacts" className="text-sm text-white/80 hover:text-white transition-colors">
          留言记录
        </Link>
        <Link href="/admin/cases" className="text-sm text-white/80 hover:text-white transition-colors">
          案例管理
        </Link>
        <Link href="/admin/news" className="text-sm text-white/80 hover:text-white transition-colors">
          新闻管理
        </Link>
        <Link href="/admin/settings" className="text-sm text-white/80 hover:text-white transition-colors">
          邮件设置
        </Link>
        <form action="/api/admin/logout" method="POST" className="ml-auto">
          <button type="submit" className="text-sm text-white/60 hover:text-white transition-colors">
            退出
          </button>
        </form>
      </nav>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  )
}
