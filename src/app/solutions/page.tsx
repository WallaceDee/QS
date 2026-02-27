import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Store, Building2, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "行业解决方案 | 趣搜科技",
  description: "B2C新零售、B2B制造业、垂直行业解决方案",
}

const solutions = [
  {
    type: "B2C 新零售",
    href: "/solutions/b2c",
    icon: Store,
    description: "如小野和子案例",
    result: "品类词 AI 推荐率第一",
    clients: ["小野和子", "欧普康视"],
  },
  {
    type: "垂直行业",
    href: "/solutions/vertical",
    icon: Users,
    description: "如找法网、爱藏网",
    result: "建立权威鉴定标准",
    clients: ["爱藏网", "找法网"],
  },
  {
    type: "B2B 制造业",
    href: "/solutions/b2b",
    icon: Building2,
    description: "如艮业科技",
    result: "精准捕获 B 端询盘",
    clients: ["艮业科技"],
  },
]

export default function SolutionsPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">行业解决方案</Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              行业解决方案
            </h1>
            <p className="mt-4 text-xl text-white/80">
              针对不同行业特性，提供定制化 GEO 营销方案
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <Card key={solution.type} className="bg-[oklch(0.15_0.02_250)] border-white/10 hover:border-[oklch(0.7_0.22_265)]/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-[oklch(0.7_0.22_265)]/20 p-3">
                      <solution.icon className="h-6 w-6 text-[oklch(0.7_0.22_265)]" />
                    </div>
                    <div>
                      <CardTitle className="text-white">{solution.type}</CardTitle>
                      <p className="text-sm text-white/60">{solution.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-4 bg-[oklch(0.7_0.22_265)]/20 text-[oklch(0.7_0.22_265)]">
                    {solution.result}
                  </Badge>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-white">代表客户</p>
                    <div className="flex flex-wrap gap-2">
                      {solution.clients.map((client) => (
                        <Badge key={client} variant="outline" className="border-white/20 text-white/60">
                          {client}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" className="mt-4 pl-0 gap-2 text-white/80 hover:text-white" asChild>
                    <Link href={solution.href}>
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
