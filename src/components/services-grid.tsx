import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Database, Building2, ShoppingCart } from "lucide-react"

const services = [
  {
    icon: GraduationCap,
    title: "GEO 培训教育",
    description: "视频号销量 6000+ 的实战课，企业内训首选",
    href: "/services/training",
    features: ["线下实战训练营", "企业内训", "视频号课程"],
  },
  {
    icon: Database,
    title: "GEO 智能中台",
    description: "AI 诊断雷达 + 本地私有化知识库，保障数据安全",
    href: "/services/platform",
    features: ["AI 诊断雷达", "本地部署系统", "趣搜指数"],
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

export function ServicesGrid() {
  return (
    <section className="py-20 bg-[oklch(0.12_0.02_250)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            核心业务矩阵
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            从认知教育到技术基建，构建完整的 GEO 营销闭环
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6  mx-auto max-w-[1200px]">
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
  )
}
