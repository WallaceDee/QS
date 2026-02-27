import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const benefits = [
  '获得品牌在 AI 搜索引擎中的"含金量"评分',
  "获取定制化的 GEO 优化方案",
  "了解行业最佳实践案例",
  "预约专业顾问一对一咨询",
]

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[oklch(0.15_0.03_265)] via-[oklch(0.2_0.05_265)] to-[oklch(0.15_0.03_265)] border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            准备好升级您的营销了吗？
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            获取免费 AI 品牌诊断，发现增长机会
          </p>

          <ul className="mt-8 space-y-3 text-left max-w-md mx-auto">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-white/80 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                免费 AI 品牌诊断
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/services/training">预约 GEO 内训</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
