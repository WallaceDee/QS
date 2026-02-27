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
    <div className="container mx-auto px-4 py-8">
      <nav className="flex gap-4 mb-8 border-b border-white/20 pb-4">
        <Link href="/admin/contacts" className="text-white/80 hover:text-white">留言记录</Link>
        <Link href="/admin/settings" className="text-white/80 hover:text-white">邮件设置</Link>
        <form action="/api/admin/logout" method="POST" className="ml-auto">
          <button type="submit" className="text-white/60 hover:text-white text-sm">退出</button>
        </form>
      </nav>
      {children}
    </div>
  )
}
