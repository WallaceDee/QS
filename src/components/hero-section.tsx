import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[oklch(0.08_0.02_250)] via-[oklch(0.12_0.02_250)] to-[oklch(0.08_0.02_250)] py-20 md:py-32">
      {/* Background Pattern - 科技感网格 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(oklch(0.7_0.22_265)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        {/* 渐变光晕 */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[oklch(0.7_0.22_265)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[oklch(0.6_0.2_180)]/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Badges */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1">
              <span className="rounded-full bg-green-500/20 border border-green-500/30 px-2 py-0.5 text-green-400 text-xs font-medium">教育部</span>
              优秀导师团队
            </span>
            <span className="text-white/30">|</span>
            <span>已服务 <strong className="text-white">6000+</strong> 学员</span>
            <span className="text-white/30">|</span>
            <span>管理 <strong className="text-white">亿级</strong> 数据架构</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            用 AI 把企业营销
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[oklch(0.7_0.22_265)] to-[oklch(0.6_0.2_180)]">重做一遍</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg text-white/80 md:text-xl max-w-2xl mx-auto">
            AI 搜索营销技术服务商 / GEO 体系构建者
          </p>

          {/* Value Proposition */}
          <p className="mt-4 text-base text-white/60 max-w-xl mx-auto">
            在算法黑盒时代，为企业构建可被 AI 正确理解、高频引用的"数字信源体系"
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="gradient" className="gap-2" asChild>
              <Link href="/services/platform">
                查看 GEO 解决方案
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 border-white/20 text-white hover:bg-white/10" asChild>
              <Link href="#">
                <PlayCircle className="h-4 w-4" />
                观看实战案例
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">6000+</div>
              <div className="text-sm text-white/50">学员数量</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">3000+</div>
              <div className="text-sm text-white/50">B端企业</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">亿级</div>
              <div className="text-sm text-white/50">数据处理</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
