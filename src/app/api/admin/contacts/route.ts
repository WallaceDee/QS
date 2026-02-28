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

  const where = {}
  const [list, total] = await Promise.all([
    prisma.contactSubmission.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.contactSubmission.count({ where }),
  ])
  return NextResponse.json({
    list,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  })
}
