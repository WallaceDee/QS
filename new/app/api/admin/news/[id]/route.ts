import { NextRequest, NextResponse } from "next/server"
import { getAdminCookie, isAdminAuthenticated } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60)
}

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

  const row = await prisma.news.findUnique({ where: { id } })
  if (!row) return NextResponse.json({ error: "新闻不存在" }, { status: 404 })

  return NextResponse.json(row)
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
  if (typeof body.title === "string") data.title = body.title.trim()
  if (typeof body.date === "string") data.date = body.date.trim()
  if (typeof body.category === "string") data.category = body.category.trim()
  if (typeof body.excerpt === "string") data.excerpt = body.excerpt.trim()
  if (typeof body.content === "string") data.content = body.content
  if (typeof body.coverImage === "string") data.coverImage = body.coverImage.trim() || null
  if (typeof body.featured === "boolean") data.featured = body.featured

  if (body.title) {
    const newSlug = slugify(body.title)
    const existing = await prisma.news.findFirst({
      where: { slug: newSlug, NOT: { id } },
    })
    if (!existing) data.slug = newSlug
  }

  const updated = await prisma.news.update({ where: { id }, data: data as Parameters<typeof prisma.news.update>[0]["data"] })
  return NextResponse.json(updated)
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

  await prisma.news.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
