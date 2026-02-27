import Link from "next/link"
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, BarChart3, Shield, Server } from "lucide-react"

export const metadata: Metadata = {
  title: "GEO 智能中台 | 趣搜科技",
  description: "企业级 AI 营销托管中台 - AI 诊断雷达、本地部署系统、趣搜指数",
}

const features = [
  {
    icon: BarChart3,
    title: "AI 诊断雷达",
    description: '扫描品牌在 DeepSeek、豆包等模型中的"含金量"与"健康度"，获取实时评分',
  },
  {
    icon: Server,
    title: "本地部署系统",
    description: "协助企业搭建私有化知识库，保障核心数据安全，支持本地化部署",
  },
  {
    icon: Database,
    title: "趣搜指数",
    description: "实时监控品牌词在 AI 中的热度趋势与推荐排名，掌握品牌声量",
  },
  {
    icon: Shield,
    title: "跨平台信号投喂",
    description: "自动化将品牌信息投喂至多个 AI 平台，提升品牌可见度",
  },
]

const steps = [
  {
    title: "品牌诊断",
    description: "使用 AI 诊断雷达扫描品牌在各大 AI 平台的现状",
  },
  {
    title: "方案定制",
    description: "基于诊断结果，制定个性化的 GEO 优化方案",
  },
  {
    title: "系统部署",
    description: "部署智能中台，配置私有化知识库和数据源",
  },
  {
    title: "持续优化",
    description: "实时监控效果，持续调整优化策略",
  },
]

export default function PlatformPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">SaaS 产品</Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              GEO 智能中台
            </h1>
            <p className="mt-4 text-xl text-white/80">
              企业级 AI 营销托管中台，让品牌在 AI 时代占据有利位置
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="gradient" asChild>
                <Link href="/contact">
                  申请产品演示
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/resources/whitepaper">下载白皮书</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">核心功能</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-[oklch(0.15_0.02_250)] border-white/10">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[oklch(0.7_0.22_265)]/20 p-3">
                      <feature.icon className="h-6 w-6 text-[oklch(0.7_0.22_265)]" />
                    </div>
                    <div>
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[oklch(0.08_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">接入流程</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[oklch(0.15_0.03_265)] via-[oklch(0.2_0.05_265)] to-[oklch(0.15_0.03_265)]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">准备好升级您的营销了吗？</h2>
          <p className="mt-4 text-white/80">获取免费产品演示，了解 GEO 智能中台如何帮助您</p>
          <Button size="lg" className="mt-8 bg-white text-[oklch(0.7_0.22_265)] hover:bg-white/90" asChild>
            <Link href="/contact">立即预约演示</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
