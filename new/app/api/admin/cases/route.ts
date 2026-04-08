import { NextRequest, NextResponse } from "next/server"
import { getAdminCookie, isAdminAuthenticated } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

const PAGE_SIZE = 10

export async function GET(request: NextRequest) {
  const cookie = await getAdminCookie()
  if (!isAdminAuthenticated(cookie)) {
    return NextResponse.json({ error: "未授权" }, { status: 401 })
  }
  const searchParams = request.nextUrl.searchParams
  const page = parseInt(searchParams.get("page") || "1", 10)
  const pageSize = parseInt(searchParams.get("pageSize") || String(PAGE_SIZE), 10)

  const [list, total] = await Promise.all([
    prisma["case"].findMany({
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma["case"].count(),
  ])

  return NextResponse.json({
    list: list.map(c => ({ ...c, results: JSON.parse(c.results) })),
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
  const name = typeof body.name === "string" ? body.name.trim() : ""
  const industry = typeof body.industry === "string" ? body.industry.trim() : ""
  const logo = typeof body.logo === "string" ? body.logo.trim() : ""
  const challenge = typeof body.challenge === "string" ? body.challenge.trim() : ""
  const solution = typeof body.solution === "string" ? body.solution.trim() : ""
  const results = Array.isArray(body.results) ? body.results : []
  const color = typeof body.color === "string" ? body.color.trim() : "blue"
  const coverImage = typeof body.coverImage === "string" ? body.coverImage.trim() : null

  if (!name || !industry) {
    return NextResponse.json({ error: "名称和行业不能为空" }, { status: 400 })
  }

  const created = await prisma["case"].create({
    data: {
      name,
      industry,
      logo,
      challenge,
      solution,
      results: JSON.stringify(results),
      color,
      coverImage,
    },
  })

  return NextResponse.json({ ...created, results: JSON.parse(created.results) })
}
