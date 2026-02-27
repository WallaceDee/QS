import nodemailer from "nodemailer"
import { prisma } from "./prisma"

export type EmailConfig = {
  host: string
  port: number
  secure: boolean
  user: string
  pass: string
  to: string
}

export async function getEmailConfig(): Promise<EmailConfig | null> {
  const row = await prisma.emailSettings.findFirst()
  if (row) {
    return {
      host: row.host,
      port: row.port,
      secure: row.secure,
      user: row.user,
      pass: row.pass,
      to: row.to,
    }
  }
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const to = process.env.CONTACT_TO
  if (host && port && user != null && pass != null && to) {
    return {
      host,
      port: parseInt(port, 10) || 587,
      secure: process.env.SMTP_SECURE === "true",
      user,
      pass,
      to,
    }
  }
  return null
}

export async function sendContactNotification(params: {
  name: string | null
  phone: string
  brand: string | null
  website: string | null
  createdAt: Date
}): Promise<{ ok: boolean; error?: string }> {
  const config = await getEmailConfig()
  if (!config) {
    return { ok: false, error: "邮件未配置" }
  }
  try {
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: { user: config.user, pass: config.pass },
    })
    const dateStr = params.createdAt.toLocaleString("zh-CN")
    const body = [
      `姓名：${params.name ?? "未填"}`,
      `电话：${params.phone}`,
      `品牌：${params.brand ?? "未填"}`,
      `官网：${params.website ?? "未填"}`,
      `提交时间：${dateStr}`,
    ].join("\n")
    await transporter.sendMail({
      from: config.user,
      to: config.to,
      subject: "趣搜官网 - 新留言",
      text: body,
    })
    return { ok: true }
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e)
    return { ok: false, error: message }
  }
}
