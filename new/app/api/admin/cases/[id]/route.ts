import { NextRequest, NextResponse } from "next/server"
import { getAdminCookie, isAdminAuthenticated } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const cookie = await getAdminCookie()
  if (!isAdminAuthenticated(cookie)) {
    return NextResponse.json({ error: "未授权" }, { status: 401 })
  }
  const id = parseInt(params.id, 10)
  if (isNaN(id)) return NextResponse.json({ error: "无效ID" }, { status: 400 })

  const row = await prisma["case"].findUnique({ where: { id } })
  if (!row) return NextResponse.json({ error: "案例不存在" }, { status: 404 })

  return NextResponse.json({ ...row, results: JSON.parse(row.results) })
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const cookie = await getAdminCookie()
  if (!isAdminAuthenticated(cookie)) {
    return NextResponse.json({ error: "未授权" }, { status: 401 })
  }
  const id = parseInt(params.id, 10)
  if (isNaN(id)) return NextResponse.json({ error: "无效ID" }, { status: 400 })

  const body = await request.json().catch(() => ({}))
  const data: Record<string, unknown> = {}
  if (typeof body.name === "string") data.name = body.name.trim()
  if (typeof body.industry === "string") data.industry = body.industry.trim()
  if (typeof body.logo === "string") data.logo = body.logo.trim()
  if (typeof body.challenge === "string") data.challenge = body.challenge.trim()
  if (typeof body.solution === "string") data.solution = body.solution.trim()
  if (Array.isArray(body.results)) data.results = JSON.stringify(body.results)
  if (typeof body.color === "string") data.color = body.color.trim()
  if (typeof body.coverImage === "string") data.coverImage = body.coverImage.trim() || null

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updated = await (prisma["case"] as any).update({ where: { id }, data })
  return NextResponse.json({ ...updated, results: JSON.parse(updated.results) })
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const cookie = await getAdminCookie()
  if (!isAdminAuthenticated(cookie)) {
    return NextResponse.json({ error: "未授权" }, { status: 401 })
  }
  const id = parseInt(params.id, 10)
  if (isNaN(id)) return NextResponse.json({ error: "无效ID" }, { status: 400 })

  await prisma["case"].delete({ where: { id } })
  return NextResponse.json({ success: true })
}
