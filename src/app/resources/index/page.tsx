import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Activity, TrendingUp, GitCompare, Lightbulb, TrendingDown, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "AI营销指数 | 趣搜科技",
  description: "实时监控品牌在 AI 中的热度趋势与推荐排名",
}

const brands = [
  { name: "小野和子", score: 95, trend: "up", change: "+12%" },
  { name: "爱藏网", score: 88, trend: "up", change: "+8%" },
  { name: "艮业科技", score: 82, trend: "up", change: "+5%" },
  { name: "欧普康视", score: 78, trend: "down", change: "-2%" },
]

const features = [
  { title: "实时监控", description: "追踪品牌在各大 AI 平台的曝光情况", icon: Activity },
  { title: "热度趋势", description: "展示品牌词搜索量变化趋势", icon: TrendingUp },
  { title: "竞品对比", description: "与竞争对手的 AI 表现对比分析", icon: GitCompare },
  { title: "优化建议", description: "基于数据的 GEO 优化建议", icon: Lightbulb },
]

export default function IndexPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Beta</Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              AI 营销指数
            </h1>
            <p className="mt-4 text-xl text-white/80">
              实时监控品牌在 AI 中的热度趋势与推荐排名
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">功能特点</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto px-20">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
              <Card key={feature.title} className="bg-[oklch(0.15_0.02_250)] border-white/10">
                <CardHeader>
                  <Icon className="h-8 w-8 text-[oklch(0.7_0.22_265)] mb-2" />
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-white/60">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            )})}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.08_0.02_250)]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">热门品牌</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {brands.map((brand) => (
              <Card key={brand.name} className="bg-[oklch(0.15_0.02_250)] border-white/10">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[oklch(0.7_0.22_265)] mb-2">{brand.score}</div>
                    <div className="text-white font-medium mb-2">{brand.name}</div>
                    <div className="flex items-center justify-center gap-1 text-sm">
                      {brand.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                      <span className={brand.trend === "up" ? "text-green-500" : "text-red-500"}>{brand.change}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[oklch(0.15_0.03_265)] via-[oklch(0.2_0.05_265)] to-[oklch(0.15_0.03_265)]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">开启品牌监控</h2>
          <p className="mt-4 text-white/80">立即监控您的品牌在 AI 中的表现</p>
          <Button variant="gradient" className="mt-6" asChild>
            <Link href="/contact">
              立即体验
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
