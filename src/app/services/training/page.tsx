import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, GraduationCap, Users, Trophy, Video, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "GEO 培训教育 | 趣搜科技",
  description: "GEO 实战课程、线下训练营、企业内训 - 视频号销量 6000+",
}

const courses = [
  {
    title: "GEO 实战训练营",
    type: "线下课",
    price: "¥9,800",
    features: ["2天1夜线下实战", "1对1 诊断指导", "社群无限答疑", "课后持续辅导"],
    highlight: true,
  },
  {
    title: "GEO 企业内训",
    type: "定制课",
    price: "¥50,000起",
    features: ["按需定制课程", "上门培训服务", "高管专项辅导", "长期顾问支持"],
    highlight: false,
  },
  {
    title: "GEO 视频号课程",
    type: "线上课",
    price: "¥999",
    features: ["50+ 实战视频", "永久观看权限", "社群交流答疑", "定期更新内容"],
    highlight: false,
  },
]

const stats = [
  { value: "6000+", label: "视频号销量" },
  { value: "3000+", label: "B端企业学员" },
  { value: "50+", label: "实战课程模块" },
  { value: "98%", label: "学员满意度" },
]

export default function TrainingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">培训教育</Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              GEO 培训教育
            </h1>
            <p className="mt-4 text-xl text-white/80">
              视频号销量 6000+ 的实战课，企业内训首选
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="gradient" asChild>
                <Link href="/contact">
                  立即报名
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/resources/book">了解课程体系</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-to-r from-[oklch(0.15_0.03_265)] via-[oklch(0.2_0.05_265)] to-[oklch(0.15_0.03_265)]">
        <div className="container mx-auto px-4">
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

      {/* Courses */}
      <section className="py-20 bg-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">课程体系</h2>
            <p className="mt-4 text-white/60">从入门到进阶，全面掌握 GEO 方法论</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {courses.map((course) => (
              <Card
                key={course.title}
                className={course.highlight ? "bg-[oklch(0.15_0.02_250)] border-[oklch(0.7_0.22_265)]" : "bg-[oklch(0.15_0.02_250)] border-white/10"}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant={course.highlight ? "default" : "outline"}>
                      {course.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mt-2 text-white">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white mb-4">{course.price}</div>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-white/60">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={course.highlight ? "gradient" : "outline"} asChild>
                    <Link href="/contact">立即报名</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[oklch(0.08_0.02_250)]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">课程特色</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center bg-[oklch(0.15_0.02_250)] border-white/10">
              <CardHeader>
                <div className="mx-auto rounded-full bg-[oklch(0.7_0.22_265)]/20 p-3 w-fit">
                  <GraduationCap className="h-6 w-6 text-[oklch(0.7_0.22_265)]" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-white">实战导向</h3>
                <p className="text-sm text-white/60 mt-2">不是理论课，是可以落地的实战方法</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-[oklch(0.15_0.02_250)] border-white/10">
              <CardHeader>
                <div className="mx-auto rounded-full bg-green-500/20 p-3 w-fit">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-white">圈层资源</h3>
                <p className="text-sm text-white/60 mt-2">加入高质量企业家社群</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-[oklch(0.15_0.02_250)] border-white/10">
              <CardHeader>
                <div className="mx-auto rounded-full bg-purple-500/20 p-3 w-fit">
                  <Trophy className="h-6 w-6 text-purple-500" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-white">官方认证</h3>
                <p className="text-sm text-white/60 mt-2">获得趣搜官方认证证书</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-[oklch(0.15_0.02_250)] border-white/10">
              <CardHeader>
                <div className="mx-auto rounded-full bg-orange-500/20 p-3 w-fit">
                  <Video className="h-6 w-6 text-orange-500" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-white">持续更新</h3>
                <p className="text-sm text-white/60 mt-2">课程内容随 AI 发展更新</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[oklch(0.15_0.03_265)] via-[oklch(0.2_0.05_265)] to-[oklch(0.15_0.03_265)]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">成为 GEO 先驱者</h2>
          <p className="mt-4 text-white/80">立即加入 6000+ 企业家的学习阵营</p>
          <Button size="lg" className="mt-8 bg-white text-[oklch(0.7_0.22_265)] hover:bg-white/90" asChild>
            <Link href="/contact">立即报名</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
