import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, FileText, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: "趣搜智库 | 资源中心",
  description: "GEO实战指南、行业白皮书、AI营销指数",
}

const resources = [
  {
    icon: BookOpen,
    title: "GEO 实战指南",
    description: "《用AI把营销重做一遍：GEO实战指南》",
    badge: "新书发布",
    href: "/resources/book",
  },
  {
    icon: FileText,
    title: "行业白皮书",
    description: "GEO 驱动企业营销新增长白皮书",
    badge: "免费下载",
    href: "/resources/whitepaper",
  },
  {
    icon: BarChart,
    title: "AI 营销指数",
    description: "实时监控品牌在 AI 中的热度趋势",
    badge: "Beta",
    href: "/resources/index",
  },
]

export default function ResourcesPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">趣搜智库</Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              资源中心
            </h1>
            <p className="mt-4 text-xl text-white/80">
              免费获取 GEO 实战指南、白皮书、行业报告
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Card key={resource.title} className="bg-[oklch(0.15_0.02_250)] border-white/10 hover:border-[oklch(0.7_0.22_265)]/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="rounded-lg bg-[oklch(0.7_0.22_265)]/20 p-3">
                      <resource.icon className="h-6 w-6 text-[oklch(0.7_0.22_265)]" />
                    </div>
                    <Badge variant="secondary" className="bg-[oklch(0.7_0.22_265)]/20 text-[oklch(0.7_0.22_265)]">{resource.badge}</Badge>
                  </div>
                  <CardTitle className="mt-4 text-white">{resource.title}</CardTitle>
                  <CardDescription className="text-white/60">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="pl-0 gap-2 text-white/80 hover:text-white" asChild>
                    <Link href={resource.href}>
                      了解更多
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
