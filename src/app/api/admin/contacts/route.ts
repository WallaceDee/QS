import { NextResponse } from "next/server"
import { getAdminCookie, isAdminAuthenticated } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const cookie = await getAdminCookie()
  if (!isAdminAuthenticated(cookie)) {
    return NextResponse.json({ error: "未授权" }, { status: 401 })
  }
  const list = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(list)
}
