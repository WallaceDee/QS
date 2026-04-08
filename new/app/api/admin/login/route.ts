import { NextRequest, NextResponse } from "next/server"
import { verifyAdminPassword, setAdminCookie } from "@/lib/auth"

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}))
  const password = typeof body.password === "string" ? body.password : ""
  if (!verifyAdminPassword(password)) {
    return NextResponse.json({ error: "密码错误" }, { status: 401 })
  }
  await setAdminCookie()
  return NextResponse.json({ success: true })
}
