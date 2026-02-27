import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, FileText, MessageCircle, ShoppingCart } from "lucide-react"

export const metadata: Metadata = {
  title: "B2C新零售解决方案 | 趣搜科技",
  description: "B2C新零售行业 GEO 营销解决方案 - 小野和子等案例",
}

const cases = [
  {
    name: "小野和子",
    industry: "服装/新零售",
    challenge: '在"光腿神器"等高频品类词下，品牌在 AI 搜索中曝光不足',
    solution: "通过 AI 测评种草内容布局，建立品牌专业形象",
    result: "品类词 AI 推荐率第一",
    metrics: [
      { label: "AI 推荐率", value: "第一" },
      { label: "品类覆盖率", value: "95%" },
      { label: "转化提升", value: "300%" },
    ],
  },
  {
    name: "欧普康视",
    industry: "医疗/上市",
    challenge: "医疗行业合规要求高，AI 营销受限",
    solution: "建立符合医疗广告法的严谨 AI 语料库",
    result: "企业级合规部署完成",
    metrics: [
      { label: "合规覆盖率", value: "100%" },
      { label: "品牌好感度", value: "+45%" },
      { label: "询盘量", value: "+80%" },
    ],
  },
]

const strategies = [
  { title: "品类词布局", description: "抢占高频品类搜索词", icon: Search },
  { title: "测评内容建设", description: "AI 友好的深度测评内容", icon: FileText },
  { title: "口碑管理", description: "建立正面品牌声誉", icon: MessageCircle },
  { title: "电商闭环", description: "从搜索到购买的无缝衔接", icon: ShoppingCart },
]

export default function B2CPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">B2C 新零售</Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              B2C 新零售解决方案
            </h1>
            <p className="mt-4 text-xl text-white/80">
              抢占 AI 搜索流量，实现品牌增长
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">成功案例</h2>
          <div className="space-y-8">
            {cases.map((caseItem) => (
              <Card key={caseItem.name} className="overflow-hidden bg-[oklch(0.15_0.02_250)] border-white/10">
                <div className="bg-gradient-to-r from-[oklch(0.7_0.22_265)]/10 to-purple-500/10 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-lg bg-white p-2">
                      <img
                        src={`/cooperation/${caseItem.name}.png`}
                        alt={caseItem.name}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{caseItem.name}</h3>
                      <p className="text-white/60">{caseItem.industry}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    {caseItem.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-2xl font-bold text-[oklch(0.7_0.22_265)]">{metric.value}</div>
                        <div className="text-sm text-white/60">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">痛点</h4>
                      <p className="text-white/60 text-sm">{caseItem.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">解决方案</h4>
                      <p className="text-white/60 text-sm">{caseItem.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">成果</h4>
                      <Badge variant="secondary" className="bg-[oklch(0.7_0.22_265)]/20 text-[oklch(0.7_0.22_265)]">{caseItem.result}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.08_0.02_250)]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">解决方案</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-[1200px] mx-auto px-20">
            {strategies.map((strategy) => {
              const Icon = strategy.icon
              return (
              <Card key={strategy.title} className="bg-[oklch(0.15_0.02_250)] border-white/10">
                <CardHeader>
                  <Icon className="h-8 w-8 text-[oklch(0.7_0.22_265)] mb-2" />
                  <CardTitle className="text-lg text-white">{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60 text-sm">{strategy.description}</p>
                </CardContent>
              </Card>
            )})}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[oklch(0.15_0.03_265)] via-[oklch(0.2_0.05_265)] to-[oklch(0.15_0.03_265)]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">获取定制方案</h2>
          <p className="mt-4 text-white/80">联系行业专家</p>
          <Button variant="gradient" className="mt-6" asChild>
            <Link href="/contact">立即咨询</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
