import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Award, Building2, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "关于我们 | 趣搜科技",
  description: "趣搜科技 - AI搜索营销技术服务商，GEO体系构建者",
}

const sections = [
  {
    icon: Building2,
    title: "企业介绍",
    description: "了解趣搜科技的发展历程与使命",
    href: "/about/company",
  },
  {
    icon: Users,
    title: "核心团队",
    description: "铁三角架构 - 战略流量 × 内容信任 × 系统技术",
    href: "/about/team",
  },
  {
    icon: Award,
    title: "荣誉资质",
    description: "教育部导师团队、行业协会认可",
    href: "/about/certifications",
  },
]

const timeline = [
  { year: "2012", event: "创始人刘马松大学期间创立学生旅游网站" },
  { year: "2014-2016", event: "创立简途科技，获得阿里系投资" },
  { year: "2017", event: "成立创思文化传媒（趣搜前身）" },
  { year: "2018-2022", event: "创立置顶传媒，营收破亿" },
  { year: "2024", event: "启动 GEO 技术内测" },
  { year: "2025.8", event: "琶洲运营中心开业" },
  { year: "2026.2", event: "推出 GEO 智能中台" },
]

const stats = [
  { value: "2017", label: "成立年份" },
  { value: "6000+", label: "学员数量" },
  { value: "3000+", label: "服务企业" },
  { value: "亿级", label: "数据处理" },
]

export default function AboutPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">关于我们</Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              趣搜科技
            </h1>
            <p className="mt-4 text-xl text-white/80">
              AI 搜索营销技术服务商 / GEO 体系构建者
            </p>
            <p className="mt-6 text-white/60">
              用 AI 把企业营销重做一遍。在算法黑盒时代，为企业构建可被 AI 正确理解、高频引用的"数字信源体系"。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-[oklch(0.15_0.03_265)] via-[oklch(0.2_0.05_265)] to-[oklch(0.15_0.03_265)]">
        <div className="container mx-auto px-4 max-w-[1200px]">
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
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Card key={section.title} className="bg-[oklch(0.15_0.02_250)] border-white/10 hover:border-[oklch(0.7_0.22_265)]/50 transition-colors">
                <CardHeader>
                  <div className="rounded-lg bg-[oklch(0.7_0.22_265)]/20 p-3 w-fit">
                    <section.icon className="h-6 w-6 text-[oklch(0.7_0.22_265)]" />
                  </div>
                  <CardTitle className="mt-4 text-white">{section.title}</CardTitle>
                  <CardDescription className="text-white/60">{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="gap-2 pl-0 text-white/80 hover:text-white" asChild>
                    <Link href={section.href}>
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
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="h-6 w-6 text-[oklch(0.7_0.22_265)]" />
              <h2 className="text-2xl font-bold text-white">发展历程</h2>
            </div>
            <div className="space-y-0">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-6 pb-8 border-l-2 border-[oklch(0.7_0.22_265)]/30 pl-6 last:pb-0 relative">
                  <div className="absolute -left-2 top-0 bg-[oklch(0.7_0.22_265)] text-white rounded-full w-4 h-4" />
                  <div className="pt-0.5">
                    <div className="font-semibold text-white">{item.year}</div>
                    <div className="text-white/60 text-sm mt-1">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[oklch(0.15_0.03_265)] via-[oklch(0.2_0.05_265)] to-[oklch(0.15_0.03_265)]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">加入 GEO 行列</h2>
          <p className="mt-4 text-white/80">立即获取免费 AI 品牌诊断</p>
          <Button variant="gradient" className="mt-6" asChild>
            <Link href="/contact">立即咨询</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
