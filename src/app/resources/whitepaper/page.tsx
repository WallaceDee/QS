import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "行业白皮书 | 趣搜科技",
  description: "GEO 驱动企业营销新增长白皮书 - 免费下载",
}

const highlights = [
  "AI 搜索营销市场现状分析",
  "GEO 方法论深度解读",
  "企业转型案例研究",
  "2026 年营销趋势预测",
  "实战落地指南",
]

const chapters = [
  { title: "第一章", description: "AI 搜索时代来临" },
  { title: "第二章", description: "GEO 方法论概述" },
  { title: "第三章", description: "E-E-A-T 优化实践" },
  { title: "第四章", description: "行业案例分析" },
  { title: "第五章", description: "落地实施路径" },
]

export default function WhitepaperPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">免费下载</Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              GEO 驱动企业营销新增长
            </h1>
            <p className="mt-4 text-xl text-white/80">
              白皮书
            </p>
            <p className="mt-4 text-white/50">2026年2月发布</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-[oklch(0.7_0.22_265)]/20 to-purple-500/20 rounded-xl p-12 flex items-center justify-center mb-8">
                <FileText className="h-32 w-32 text-[oklch(0.7_0.22_265)]" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">白皮书亮点</h2>
              <ul className="space-y-3 mb-8">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[oklch(0.7_0.22_265)]" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-lg font-semibold text-white mb-4">目录</h3>
              <div className="space-y-2 mb-8">
                {chapters.map((chapter) => (
                  <div key={chapter.title} className="text-white/60 text-sm">
                    {chapter.title}：{chapter.description}
                  </div>
                ))}
              </div>
              <Button variant="gradient" asChild>
                <Link href="/contact">
                  免费下载
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[oklch(0.15_0.03_265)] via-[oklch(0.2_0.05_265)] to-[oklch(0.15_0.03_265)]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">免费下载白皮书</h2>
          <p className="mt-4 text-white/80">填写表单即可获取完整版白皮书</p>
          <Button size="lg" className="mt-8 bg-white text-[oklch(0.7_0.22_265)] hover:bg-white/90" asChild>
            <Link href="/contact">
              立即下载
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
