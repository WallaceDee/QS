import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "核心团队 | 趣搜科技",
  description: "趣搜科技核心团队 - 铁三角架构：战略流量 × 内容信任 × 系统技术",
}

const team = [
  {
    name: "刘马松",
    role: "创始人 & CEO",
    avatar: "LS",
    description: "13年实战背景，GEO 方法论提出者，《GEO 实战指南》作者",
    expertise: "流量战略与方法论",
    achievements: [
      "《GEO 实战指南》作者",
      "连续创业者（四次流量代际变迁）",
      "曾创立简途科技（获阿里系投资）",
      "曾创立置顶传媒（营收破亿）",
    ],
    color: "bg-[oklch(0.7_0.22_265)]/20",
  },
  {
    name: "王志毅",
    role: "联合创始人 & CMO",
    avatar: "WZ",
    description: '教育部导师，解决"信任数据化"难题',
    expertise: "信任体系与合规",
    achievements: [
      "教育部首批优秀创新创业导师",
      "服务 3000+ B端企业",
      "帮专知识产权创始人",
      '科技媒体"志毅科技圈"主理人',
    ],
    color: "bg-green-500/20",
  },
  {
    name: "高业燊",
    role: "技术合伙人 & CTO",
    avatar: "GS",
    description: "前阿里/唯品会架构师，亿级数据处理经验",
    expertise: "系统架构与工程化",
    achievements: [
      "前阿里·UC 浏览器高级工程师",
      "唯品会支付平台架构师",
      "租租车/全球购骑士卡技术负责人",
      "峰值 QPS 3万+",
    ],
    color: "bg-purple-500/20",
  },
]

const capabilities = [
  { title: "流量战略", description: "四次流量代际变迁经验" },
  { title: "内容信任", description: "知识产权与合规体系" },
  { title: "系统技术", description: "亿级数据处理能力" },
]

export default function TeamPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">核心团队</Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              铁三角架构
            </h1>
            <p className="mt-4 text-xl text-white/80">
              战略流量 × 内容信任 × 系统技术
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-[oklch(0.15_0.03_265)] via-[oklch(0.2_0.05_265)] to-[oklch(0.15_0.03_265)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="text-center text-white">
                <div className="text-xl font-bold">{cap.title}</div>
                <div className="text-white/70 text-sm mt-1">{cap.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="text-center bg-[oklch(0.15_0.02_250)] border-white/10 hover:border-[oklch(0.7_0.22_265)]/50 transition-colors">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <Avatar className={`h-32 w-32 ${member.color} text-3xl`}>
                      <AvatarFallback className="bg-[oklch(0.7_0.22_265)]/20 text-[oklch(0.7_0.22_265)]">{member.avatar}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl text-white">{member.name}</CardTitle>
                  <p className="text-[oklch(0.7_0.22_265)] font-medium">{member.role}</p>
                  <Badge variant="outline" className="mt-2 border-[oklch(0.7_0.22_265)]/50 text-[oklch(0.7_0.22_265)]">{member.expertise}</Badge>
                  <p className="text-sm text-white/60 mt-4">{member.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-left space-y-2">
                    {member.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start gap-2 text-sm text-white/60">
                        <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.22_265)] mt-1.5 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.08_0.02_250)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">与优秀团队同行</h2>
          <p className="mt-4 text-white/60">立即获取专业咨询</p>
          <Button variant="gradient" className="mt-6" asChild>
            <Link href="/contact">立即咨询</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
