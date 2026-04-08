import { NextRequest, NextResponse } from "next/server"
import { getAdminCookie, isAdminAuthenticated } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

const PAGE_SIZE = 10

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60)
}

export async function GET(request: NextRequest) {
  const cookie = await getAdminCookie()
  if (!isAdminAuthenticated(cookie)) {
    return NextResponse.json({ error: "未授权" }, { status: 401 })
  }
  const searchParams = request.nextUrl.searchParams
  const page = parseInt(searchParams.get("page") || "1", 10)
  const pageSize = parseInt(searchParams.get("pageSize") || String(PAGE_SIZE), 10)
  const category = searchParams.get("category") || ""

  const where = category ? { category } : {}
  const [list, total] = await Promise.all([
    prisma.news.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.news.count({ where }),
  ])

  return NextResponse.json({
    list,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  })
}

export async function POST(request: NextRequest) {
  const cookie = await getAdminCookie()
  if (!isAdminAuthenticated(cookie)) {
    return NextResponse.json({ error: "未授权" }, { status: 401 })
  }
  const body = await request.json().catch(() => ({}))
  const title = typeof body.title === "string" ? body.title.trim() : ""
  const date = typeof body.date === "string" ? body.date.trim() : ""
  const category = typeof body.category === "string" ? body.category.trim() : ""
  const excerpt = typeof body.excerpt === "string" ? body.excerpt.trim() : ""
  const content = typeof body.content === "string" ? body.content : ""
  const coverImage = typeof body.coverImage === "string" ? body.coverImage.trim() : null
  const featured = Boolean(body.featured)

  if (!title || !date || !category) {
    return NextResponse.json({ error: "标题、日期、分类不能为空" }, { status: 400 })
  }

  const baseSlug = slugify(title)
  let slug = baseSlug
  let counter = 1
  while (await prisma.news.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${counter++}`
  }

  const created = await prisma.news.create({
    data: { title, slug, date, category, excerpt, content, coverImage, featured },
  })
  return NextResponse.json(created)
}
