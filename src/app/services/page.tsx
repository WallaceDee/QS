import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, GraduationCap, Database, Building2, ShoppingCart } from "lucide-react"

export const metadata: Metadata = {
  title: "GEO 核心服务 | 趣搜科技",
  description: "GEO智能中台、GEO培训教育、全案营销服务 - 构建完整的AI搜索营销闭环",
}

const services = [
  {
    icon: Database,
    title: "GEO 智能中台",
    description: "企业级 AI 营销托管中台，让品牌在 AI 时代占据有利位置",
    href: "/services/platform",
    features: ["AI 诊断雷达", "本地部署系统", "趣搜指数", "跨平台信号投喂"],
  },
  {
    icon: GraduationCap,
    title: "GEO 培训教育",
    description: "视频号销量 6000+ 的实战课，企业内训首选",
    href: "/services/training",
    features: ["线下实战训练营", "企业内训", "视频号课程", "社群无限答疑"],
  },
  {
    icon: Building2,
    title: "垂直信源基建",
    description: "打通行业头部平台，建立语料投喂通道",
    href: "/solutions/vertical",
    features: ["行业头部合作", "语料投喂通道", "AI 信任构建"],
  },
  {
    icon: ShoppingCart,
    title: "电商营销入口",
    description: "在 AI 答案中植入可跳转的购买链路",
    href: "/services/marketing",
    features: ["京东/天猫入口", "小程序打通", "搜-看-买闭环"],
  },
]

const stats = [
  { value: "6000+", label: "学员数量" },
  { value: "3000+", label: "B端企业" },
  { value: "98%", label: "客户满意度" },
  { value: "亿级", label: "数据处理能力" },
]

export default function ServicesPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">核心服务</Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              GEO 核心服务
            </h1>
            <p className="mt-4 text-xl text-white/80">
              从认知教育到技术基建，构建完整的 AI 搜索营销闭环
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-[oklch(0.15_0.03_265)] via-[oklch(0.2_0.05_265)] to-[oklch(0.15_0.03_265)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="bg-[oklch(0.15_0.02_250)] border-white/10 hover:border-[oklch(0.7_0.22_265)]/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[oklch(0.7_0.22_265)]/20 p-3">
                      <service.icon className="h-6 w-6 text-[oklch(0.7_0.22_265)]" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                      <CardDescription className="mt-1 text-white/60">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.22_265)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="gap-2 pl-0 text-white/80 hover:text-white" asChild>
                    <Link href={service.href}>
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

      <section className="py-20 bg-[oklch(0.08_0.02_250)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">需要定制方案？</h2>
          <p className="mt-4 text-white/60">联系我们的行业专家，获取针对性建议</p>
          <Button variant="gradient" className="mt-6" asChild>
            <Link href="/contact">立即咨询</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
