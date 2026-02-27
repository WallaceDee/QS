import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "关于我们 | 趣搜科技",
  description: "趣搜科技 - AI搜索营销技术服务商，GEO体系构建者",
}

const team = [
  {
    name: "刘马松",
    role: "创始人 & CEO",
    avatar: "LS",
    description: "13年实战背景，GEO 方法论提出者，《GEO 实战指南》作者",
    achievements: ["连续创业者", "四次流量代际变迁"],
  },
  {
    name: "王志毅",
    role: "联合创始人 & CMO",
    avatar: "WZ",
    description: '教育部导师，解决"信任数据化"难题',
    achievements: ["服务 3000+ B端企业", "帮专知识产权创始人"],
  },
  {
    name: "高业燊",
    role: "技术合伙人 & CTO",
    avatar: "GS",
    description: "前阿里/唯品会架构师，亿级数据处理经验",
    achievements: ["前阿里高级工程师", "峰值 QPS 3万+"],
  },
]

const timeline = [
  { year: "2017", event: "成立创思文化传媒（趣搜前身）" },
  { year: "2024", event: "启动 GEO 技术内测" },
  { year: "2025.8", event: "琶洲运营中心开业" },
  { year: "2026.2", event: "推出 GEO 智能中台" },
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

      <section className="py-20 bg-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">发展历程</h2>
          <div className="max-w-2xl mx-auto">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-4 pb-8 border-l-2 border-[oklch(0.7_0.22_265)]/30 pl-6 last:pb-0">
                <div className="-left-2 relative bg-[oklch(0.7_0.22_265)] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {item.year.slice(-2)}
                </div>
                <div>
                  <div className="font-semibold text-white">{item.year}</div>
                  <div className="text-white/60">{item.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.08_0.02_250)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">核心团队</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="text-center bg-[oklch(0.15_0.02_250)] border-white/10">
                <CardHeader>
                  <Avatar className="mx-auto h-24 w-24 bg-[oklch(0.7_0.22_265)]/20 text-2xl">
                    <AvatarFallback className="bg-[oklch(0.7_0.22_265)]/20 text-[oklch(0.7_0.22_265)]">{member.avatar}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mt-4 text-white">{member.name}</CardTitle>
                  <p className="text-[oklch(0.7_0.22_265)] font-medium">{member.role}</p>
                  <p className="text-sm text-white/60 mt-2">{member.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.achievements.map((a) => (
                      <Badge key={a} variant="outline" className="border-white/20 text-white/60">{a}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
