import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const clients = [
  {
    name: "小野和子",
    industry: "B2C/新零售",
    logo: "XG",
    result: "品类词 AI 推荐率第一",
    description: '在"光腿神器"等高频品类词下，通过 AI 测评种草，实现品牌推荐率第一',
    color: "bg-pink-500/20",
  },
  {
    name: "爱藏网",
    industry: "垂直平台",
    logo: "AC",
    result: "建立权威鉴定标准",
    description: '针对收藏品"真伪难辨"痛点，通过 GEO 建立权威鉴定标准信源，解决 AI 信任问题',
    color: "bg-amber-500/20",
  },
  {
    name: "北大汇丰商学院",
    industry: "高端教育",
    logo: "BD",
    result: "优化声誉评价",
    description: "优化商学院在 AI 中的声誉评价与师资介绍，深度影响高净值人群的择校决策",
    color: "bg-blue-500/20",
  },
  {
    name: "欧普康视",
    industry: "医疗/上市",
    logo: "OP",
    result: "合规部署",
    description: "建立符合医疗广告法的严谨 AI 语料库，通过高管学习引入，实现企业级合规部署",
    color: "bg-green-500/20",
  },
  {
    name: "艮业科技",
    industry: "B2B/制造",
    logo: "GY",
    result: "精准捕获 B 端询盘",
    description: "针对精密制造行业，布局大量长尾技术参数词，精准捕获 B 端采购询盘",
    color: "bg-purple-500/20",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[oklch(0.12_0.02_250)]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            已验证的商业飞轮
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            从消费品到硬科技，从流量截取到信任重构
          </p>
        </div>

        {/* Case Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.slice(0, 6).map((client) => (
            <Card key={client.name} className="bg-[oklch(0.15_0.02_250)] border-white/10 hover:border-[oklch(0.7_0.22_265)]/50 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-12 bg-white overflow-hidden">
                      <AvatarImage src={`/cooperation/${client.name}.png`} alt={client.name} />
                      <AvatarFallback className="bg-white text-[oklch(0.7_0.22_265)]">{client.logo}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base text-white">{client.name}</CardTitle>
                      <p className="text-sm text-white/60">{client.industry}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-3 bg-[oklch(0.7_0.22_265)]/20 text-[oklch(0.7_0.22_265)]">
                  {client.result}
                </Badge>
                <p className="text-sm text-white/60">{client.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
