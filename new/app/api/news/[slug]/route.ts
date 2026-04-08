import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const row = await prisma.news.findUnique({ where: { slug: params.slug } })
  if (!row) return NextResponse.json({ error: "新闻不存在" }, { status: 404 })
  return NextResponse.json(row)
}
