import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sendContactNotification } from "@/lib/email"

const MAX_LEN = {
  name: 200,
  phone: 50,
  brand: 200,
  website: 500,
  company: 200,
  email: 200,
  message: 5000,
}

function isValidUrl(s: string): boolean {
  try {
    new URL(s)
    return true
  } catch {
    return false
  }
}

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const name = typeof body.name === "string" ? body.name.trim().slice(0, MAX_LEN.name) : undefined
    const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, MAX_LEN.phone) : ""
    const brand = typeof body.brand === "string" ? body.brand.trim().slice(0, MAX_LEN.brand) : undefined
    const website = typeof body.website === "string" ? body.website.trim().slice(0, MAX_LEN.website) : undefined
    const company = typeof body.company === "string" ? body.company.trim().slice(0, MAX_LEN.company) : undefined
    const email = typeof body.email === "string" ? body.email.trim().slice(0, MAX_LEN.email) : undefined
    const message = typeof body.message === "string" ? body.message.trim().slice(0, MAX_LEN.message) : undefined

    if (!phone) {
      return NextResponse.json({ error: "电话不能为空" }, { status: 400 })
    }
    if (email && !isValidEmail(email)) {
      return NextResponse.json({ error: "请填写有效的邮箱地址" }, { status: 400 })
    }
    if (website && !isValidUrl(website)) {
      return NextResponse.json({ error: "请填写有效的官网链接" }, { status: 400 })
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name: name || null,
        phone,
        email: email || null,
        company: company || null,
        message: message || null,
        brand: brand || company || null,
        website: website || null,
      },
    })

    const mailResult = await sendContactNotification({
      name: submission.name,
      phone: submission.phone,
      brand: submission.brand,
      website: submission.website,
      company: company ?? null,
      email: email ?? null,
      message: message ?? null,
      createdAt: submission.createdAt,
    })

    if (!mailResult.ok) {
      return NextResponse.json(
        { success: true, message: "提交已保存，但邮件发送失败：" + (mailResult.error ?? "未知错误") },
        { status: 200 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error("Contact API error:", e)
    return NextResponse.json({ error: "提交失败，请稍后重试" }, { status: 500 })
  }
}
