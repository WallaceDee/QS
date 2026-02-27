import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"

const oldMethods = [
  "关键词堆砌",
  "外链买卖",
  "内容农场",
  "点击作弊",
  "单一渠道依赖",
]

const newMethods = [
  "结构化答案管理",
  "E-E-A-T 优化",
  "多源交叉验证",
  "知识图谱构建",
  "全域信源布局",
]

export function MethodologySection() {
  return (
    <section className="py-20 bg-[oklch(0.08_0.02_250)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            为什么传统 SEO 已失效？
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            AI 搜索引擎改变了游戏规则，需要全新的优化策略
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Old Method */}
          <Card className="border-red-500/30 bg-red-500/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-400">
                <XCircle className="h-5 w-5" />
                旧时代：关键词排名
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {oldMethods.map((method) => (
                  <li key={method} className="flex items-center gap-2 text-white/60">
                    <XCircle className="h-4 w-4 text-red-400" />
                    {method}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* New Method */}
          <Card className="border-green-500/30 bg-green-500/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <CheckCircle2 className="h-5 w-5" />
                AI 时代：结构化答案管理
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {newMethods.map((method) => (
                  <li key={method} className="flex items-center gap-2 text-white/60">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    {method}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* E-E-A-T Explanation */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-center text-white mb-8">
            E-E-A-T 结构化重塑模型
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="text-center bg-[oklch(0.15_0.02_250)] border-white/10">
              <CardHeader>
                <CardTitle className="text-[oklch(0.7_0.22_265)]">Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/60">聚合真实 UGC 体验，模拟人类真实体验信号</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-[oklch(0.15_0.02_250)] border-white/10">
              <CardHeader>
                <CardTitle className="text-green-500">Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/60">知识图谱化文档，转化为 AI 可理解的结构化数据</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-[oklch(0.15_0.02_250)] border-white/10">
              <CardHeader>
                <CardTitle className="text-purple-500">Trustworthiness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/60">消除逻辑矛盾，建立唯一事实版本</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-[oklch(0.15_0.02_250)] border-white/10">
              <CardHeader>
                <CardTitle className="text-orange-500">Authoritativeness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/60">植入 IP 与国标身份，提升 AI 引用权重</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
