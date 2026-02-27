import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, Star, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "GEO实战指南 | 趣搜科技",
  description: "《用AI把营销重做一遍：GEO实战指南》- 2026年出版，GEO方法论权威著作",
}

const chapters = [
  { title: "第一章", description: "AI 搜索时代的营销变革" },
  { title: "第二章", description: "GEO 方法论核心框架" },
  { title: "第三章", description: "E-E-A-T 优化策略" },
  { title: "第四章", description: "结构化数据与知识图谱" },
  { title: "第五章", description: "内容策略与创作方法" },
  { title: "第六章", description: "实战案例解析" },
]

const reviews = [
  { name: "某上市公司 CMO", content: "这本书彻底改变了我们对 AI 营销的认知，落地效果显著" },
  { name: "知名投资人", content: "GEO 方法论代表了未来营销的方向，值得所有企业学习" },
  { name: "连续创业者", content: "从 SEO 到 GEO，作者的洞察非常精准，实操性很强" },
]

export default function BookPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">新书发布</Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              用 AI 把营销重做一遍
            </h1>
            <p className="mt-4 text-xl text-white/80">
              GEO 实战指南
            </p>
            <p className="mt-4 text-white/50">2026年出版</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-[oklch(0.7_0.22_265)]/20 to-purple-500/20 rounded-xl p-8 aspect-[3/4] flex items-center justify-center">
                <BookOpen className="h-32 w-32 text-[oklch(0.7_0.22_265)]" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-white mb-6">书籍简介</h2>
              <p className="text-white/60 mb-6">
                系统性阐述 GEO 方法论与实战案例，从理论到实践，全面解析 AI 搜索时代的营销新玩法。
              </p>
              <div className="space-y-3 mb-8">
                {chapters.map((chapter) => (
                  <div key={chapter.title} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[oklch(0.7_0.22_265)]" />
                    <span className="text-white/80">{chapter.title}：{chapter.description}</span>
                  </div>
                ))}
              </div>
              <Button variant="gradient" asChild>
                <Link href="/contact">
                  获取试读章节
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.08_0.02_250)]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 text-white">专家推荐</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.name} className="bg-[oklch(0.15_0.02_250)] border-white/10">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[oklch(0.7_0.22_265)] text-[oklch(0.7_0.22_265)]" />
                    ))}
                  </div>
                  <p className="text-white/60 mb-4">"{review.content}"</p>
                  <p className="text-white font-medium">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[oklch(0.15_0.03_265)] via-[oklch(0.2_0.05_265)] to-[oklch(0.15_0.03_265)]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">获取书籍</h2>
          <p className="mt-4 text-white/80">联系客服获取更多购买方式</p>
          <Button variant="gradient" className="mt-6" asChild>
            <Link href="/contact">立即咨询</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
