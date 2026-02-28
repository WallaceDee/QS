import { NextRequest, NextResponse } from "next/server"
import { getAdminCookie, isAdminAuthenticated } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const cookie = await getAdminCookie()
  if (!isAdminAuthenticated(cookie)) {
    return NextResponse.json({ error: "未授权" }, { status: 401 })
  }
  const row = await prisma.emailSettings.findFirst()
  if (row) {
    return NextResponse.json({
      host: row.host,
      port: row.port,
      secure: row.secure,
      user: row.user,
      pass: row.pass, // 不返回真实密码，前端留空表示不修改
      to: row.to,
    })
  }
  // 数据库没有配置时，回显环境变量
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const to = process.env.CONTACT_TO
  const secure = process.env.SMTP_SECURE
  if (host && port && user && to) {
    return NextResponse.json({
      host,
      port: parseInt(port, 10) || 587,
      secure: secure === "true",
      user,
      pass, // 环境变量的密码不返回前端
      to,
    })
  }
  return NextResponse.json(null)
}

export async function PUT(request: NextRequest) {
  const cookie = await getAdminCookie()
  if (!isAdminAuthenticated(cookie)) {
    return NextResponse.json({ error: "未授权" }, { status: 401 })
  }
  const body = await request.json().catch(() => ({}))
  const host = typeof body.host === "string" ? body.host.trim() : ""
  const port = typeof body.port === "number" ? body.port : parseInt(String(body.port), 10) || 587
  const secure = Boolean(body.secure)
  const user = typeof body.user === "string" ? body.user.trim() : ""
  const pass = typeof body.pass === "string" ? body.pass : ""
  const to = typeof body.to === "string" ? body.to.trim() : ""
  if (!host || !user || !pass || !to) {
    return NextResponse.json({ error: "请填写完整的 SMTP 与收件邮箱" }, { status: 400 })
  }
  const existing = await prisma.emailSettings.findFirst()
  const updatePass = pass !== ""
  if (existing) {
    await prisma.emailSettings.update({
      where: { id: existing.id },
      data: updatePass ? { host, port, secure, user, pass, to } : { host, port, secure, user, to },
    })
  } else {
    if (!pass) {
      return NextResponse.json({ error: "首次配置请填写发件密码" }, { status: 400 })
    }
    await prisma.emailSettings.create({
      data: { host, port, secure, user, pass, to },
    })
  }
  return NextResponse.json({ success: true })
}
