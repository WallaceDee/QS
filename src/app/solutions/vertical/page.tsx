import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Shield, BookOpen, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "垂直行业解决方案 | 趣搜科技",
  description: "垂直行业 GEO 营销解决方案 - 爱藏网、找法网等案例",
}

const cases = [
  {
    name: "爱藏网",
    industry: "收藏品/垂直平台",
    challenge: '收藏品"真伪难辨"，AI 无法建立信任',
    solution: "通过 GEO 建立权威鉴定标准信源",
    result: "解决 AI 信任问题，建立行业标杆",
    metrics: [
      { label: "信任度提升", value: "+60%" },
      { label: "AI 收录量", value: "+200%" },
      { label: "用户增长", value: "+45%" },
    ],
  },
  {
    name: "找法网",
    industry: "法律服务",
    challenge: "法律行业专业性强，AI 引用门槛高",
    solution: "建立 T1 级信源平台，优化专业内容",
    result: "成为法律 AI 首选信源",
    metrics: [
      { label: "AI 引用率", value: "第一" },
      { label: "内容覆盖率", value: "90%" },
      { label: "咨询量", value: "+120%" },
    ],
  },
]

const strategies = [
  { title: "权威标准建立", description: "制定行业标准，建立专业壁垒", icon: Shield },
  { title: "内容知识图谱", description: "结构化专业知识，便于 AI 理解", icon: BookOpen },
  { title: "多源交叉验证", description: "整合多维度信任数据", icon: CheckCircle2 },
  { title: "行业生态共建", description: "与行业协会深度合作", icon: Users },
]

export default function VerticalPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">垂直行业</Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              垂直行业解决方案
            </h1>
            <p className="mt-4 text-xl text-white/80">
              构建行业权威标准，解决 AI 信任问题
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
