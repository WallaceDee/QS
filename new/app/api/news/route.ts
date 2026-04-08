import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10))
  const pageSize = Math.min(10, Math.max(1, parseInt(searchParams.get("pageSize") || "6", 10)))
  const featured = searchParams.get("featured")

  const where = featured !== null ? { featured: featured === "true" } : {}

  const [list, total] = await Promise.all([
    prisma.news.findMany({
      where,
      select: {
        id: true,
        title: true,
        slug: true,
        date: true,
        category: true,
        excerpt: true,
        coverImage: true,
        featured: true,
        createdAt: true,
      },
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
