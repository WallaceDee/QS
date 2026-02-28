import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Shield, Target, Megaphone } from "lucide-react"

export const metadata: Metadata = {
  title: "全案营销服务 | 趣搜科技",
  description: "定制化 GEO 营销解决方案 - AI 负面语义压制、品牌关键词卡位",
}

const services = [
  {
    icon: Target,
    title: "品牌定位优化",
    description: "精准定位品牌在 AI 搜索中的位置，建立品牌权威形象",
  },
  {
    icon: Shield,
    title: "负面舆情压制",
    description: 'AI 负面语义压制，防止负面信息成为 AI 的"永久记忆"',
  },
  {
    icon: TrendingUp,
    title: "关键词卡位",
    description: "确保品牌在 AI 回答中占据有利位置，提升品牌曝光",
  },
  {
    icon: Megaphone,
    title: "内容营销",
    description: "高质量内容创作，建立品牌的专业权威形象",
  },
]

const process = [
  { title: "诊断分析", description: "全面分析品牌现状" },
  { title: "策略制定", description: "制定个性化方案" },
  { title: "执行落地", description: "专业团队执行" },
  { title: "效果监测", description: "持续优化提升" },
]

export default function MarketingPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">全案服务</Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              全案营销服务
            </h1>
            <p className="mt-4 text-xl text-white/80">
              定制化解决方案，让品牌在 AI 时代脱颖而出
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="gradient" asChild>
                <Link href="/contact">
                  获取方案
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/solutions">查看案例</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">服务内容</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mx-auto max-w-[1200px]">
            {services.map((service) => (
              <Card key={service.title} className="bg-[oklch(0.15_0.02_250)] border-white/10">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[oklch(0.7_0.22_265)]/20 p-3">
                      <service.icon className="h-6 w-6 text-[oklch(0.7_0.22_265)]" />
                    </div>
                    <div>
                      <CardTitle className="text-white">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.08_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">服务流程</h2>
          </div>
          <div className="grid sm:grid-cols-4 gap-6 mx-auto max-w-[1200px]">
            {process.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-[oklch(0.7_0.22_265)] text-white flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[oklch(0.15_0.03_265)] via-[oklch(0.2_0.05_265)] to-[oklch(0.15_0.03_265)]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">定制您的专属方案</h2>
          <p className="mt-4 text-white/80">专业顾问一对一咨询</p>
          <Button variant="gradient" className="mt-6" asChild>
            <Link href="/contact">立即咨询</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
