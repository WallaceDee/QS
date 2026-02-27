import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building2, Search, FileText, Users, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "B2B制造业解决方案 | 趣搜科技",
  description: "B2B制造业 GEO 营销解决方案 - 艮业科技等案例",
}

const cases = [
  {
    name: "艮业科技",
    industry: "精密制造",
    challenge: "B 端采购决策链长，长尾关键词覆盖不足",
    solution: "布局大量长尾技术参数词，建立专业形象",
    result: "精准捕获 B 端长尾询盘",
    metrics: [
      { label: "询盘量", value: "+180%" },
      { label: "长尾词覆盖", value: "+300%" },
      { label: "转化率", value: "+60%" },
    ],
  },
  {
    name: "未来智 AI",
    industry: "AI 同行",
    challenge: "AI 公司技术强，营销落地能力弱",
    solution: "突出技术实力，建立行业影响力",
    result: "获得同行认可",
    metrics: [
      { label: "品牌曝光", value: "+200%" },
      { label: "合作咨询", value: "+80%" },
      { label: "行业排名", value: "TOP10" },
    ],
  },
]

const strategies = [
  { title: "长尾词布局", description: "精准捕获 B 端采购需求", icon: Search },
  { title: "技术内容建设", description: "专业参数与技术文档优化", icon: FileText },
  { title: "决策者触达", description: "针对采购决策链的内容策略", icon: Users },
  { title: "案例背书", description: "成功案例增强信任", icon: Shield },
]

export default function B2BPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">B2B 制造业</Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              B2B 制造业解决方案
            </h1>
            <p className="mt-4 text-xl text-white/80">
              精准捕获 B 端长尾询盘，提升销售转化
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
                    <div className="rounded-full bg-white p-2 overflow-hidden w-16 h-16 flex items-center justify-center">
                      {caseItem.name === "未来智 AI" ? (
                        <Building2 className="h-8 w-8 text-[oklch(0.7_0.22_265)]" />
                      ) : (
                        <img 
                          src={`/cooperation/${caseItem.name}.png`} 
                          alt={caseItem.name}
                          className="w-12 h-12 object-contain"
                        />
                      )}
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
          <Button size="lg" className="mt-8 bg-white text-[oklch(0.7_0.22_265)] hover:bg-white/90" asChild>
            <Link href="/contact">
              立即咨询
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
