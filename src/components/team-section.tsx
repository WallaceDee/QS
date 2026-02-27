import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const team = [
  {
    name: "刘马松",
    role: "创始人 & CEO",
    avatar: "LS",
    description: "13年实战背景，GEO 方法论提出者",
    achievements: ["《GEO 实战指南》作者", "连续创业者", "四次流量代际变迁"],
    color: "bg-[oklch(0.7_0.22_265)]/20",
  },
  {
    name: "王志毅",
    role: "联合创始人 & CMO",
    avatar: "WZ",
    description: '教育部导师，解决"信任数据化"',
    achievements: ["教育部首批优秀创新创业导师", "服务 3000+ B端企业", "帮专知识产权创始人"],
    color: "bg-green-500/20",
  },
  {
    name: "高业燊",
    role: "技术合伙人 & CTO",
    avatar: "GS",
    description: "前阿里/唯品会架构师，亿级数据处理经验",
    achievements: ["前阿里·UC 浏览器高级工程师", "唯品会支付平台架构师", "峰值 QPS 3万+"],
    color: "bg-purple-500/20",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-[oklch(0.08_0.02_250)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            核心团队
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            铁三角架构：战略流量 × 内容信任 × 系统技术
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <Card key={member.name} className="text-center bg-[oklch(0.15_0.02_250)] border-white/10 hover:border-[oklch(0.7_0.22_265)]/50 transition-colors">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <Avatar className={`h-24 w-24 ${member.color} text-2xl`}>
                    <AvatarFallback className="bg-[oklch(0.7_0.22_265)]/20 text-[oklch(0.7_0.22_265)]">{member.avatar}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-xl text-white">{member.name}</CardTitle>
                <p className="text-[oklch(0.7_0.22_265)] font-medium">{member.role}</p>
                <p className="text-sm text-white/60 mt-2">{member.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.achievements.map((achievement) => (
                    <Badge key={achievement} variant="outline" className="text-xs border-white/20 text-white/60">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
