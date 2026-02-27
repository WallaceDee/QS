import Link from "next/link"
import { Button } from "@/components/ui/button"

const footerLinks = {
  services: [
    { label: "GEO 智能中台", href: "/services/platform" },
    { label: "GEO 培训教育", href: "/services/training" },
    { label: "全案营销服务", href: "/services/marketing" },
  ],
  solutions: [
    { label: "B2C 新零售", href: "/solutions/b2c" },
    { label: "垂直行业", href: "/solutions/vertical" },
    { label: "B2B 制造业", href: "/solutions/b2b" },
  ],
  resources: [
    { label: "GEO 实战指南", href: "/resources/book" },
    { label: "行业白皮书", href: "/resources/whitepaper" },
    { label: "AI 营销指数", href: "/resources/index" },
  ],
  company: [
    { label: "企业介绍", href: "/about/company" },
    { label: "核心团队", href: "/about/team" },
    { label: "荣誉资质", href: "/about/certifications" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.05_0.02_250)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">趣搜科技</span>
              <span className="text-sm text-white/60">Qusou Technology</span>
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-xs">
              AI 搜索营销技术服务商 / GEO 体系构建者
            </p>
            <p className="mt-2 text-sm text-white/50">
              用 AI 把企业营销重做一遍
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">核心服务</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[oklch(0.7_0.22_265)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-4">行业方案</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[oklch(0.7_0.22_265)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">趣搜智库</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[oklch(0.7_0.22_265)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">关于我们</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[oklch(0.7_0.22_265)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 hover:text-[oklch(0.7_0.22_265)] transition-colors"
                >
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-white">准备好升级您的营销了吗？</h4>
              <p className="text-sm text-white/60">获取免费 AI 品牌诊断，发现增长机会</p>
            </div>
            <div className="flex gap-3">
              <Button variant="gradient" asChild>
                <Link href="/contact">免费 AI 品牌诊断</Link>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/contact">预约 GEO 内训</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; 2026 广州趣搜科技有限公司</p>
          {/* <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[oklch(0.7_0.22_265)] transition-colors">隐私政策</Link>
            <Link href="#" className="hover:text-[oklch(0.7_0.22_265)] transition-colors">服务条款</Link>
            <Link href="#" className="hover:text-[oklch(0.7_0.22_265)] transition-colors">网站地图</Link>
          </div> */}
          <p>粤 ICP 备 XXXXX 号</p>
        </div>
      </div>
    </footer>
  )
}
