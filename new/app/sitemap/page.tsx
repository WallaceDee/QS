import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Home, Briefcase, Cpu, BookOpen, FolderOpen, Newspaper, HelpCircle, Shield } from 'lucide-react'
import Link from 'next/link'

const sitemapData = [
  {
    category: '主要页面',
    icon: Home,
    links: [
      { name: '首页', href: '/' },
      { name: '关于我们', href: '/about' },
      { name: '联系我们', href: '/contact' },
    ],
  },
  {
    category: '服务',
    icon: Briefcase,
    links: [
      { name: '服务列表', href: '/services' },
      { name: 'GEO智能中台', href: '/service-geo-midplatform' },
    ],
  },
  {
    category: '技术',
    icon: Cpu,
    links: [
      { name: '技术中心', href: '/technology' },
      { name: 'E-E-A-T原则', href: '/technology/eeat-principle' },
    ],
  },
  {
    category: '资源',
    icon: BookOpen,
    links: [
      { name: '资源中心', href: '/resources' },
      { name: 'GEO选购指南', href: '/guide' },
    ],
  },
  {
    category: '案例',
    icon: FolderOpen,
    links: [
      { name: '标杆案例', href: '/cases' },
    ],
  },
  {
    category: '新闻',
    icon: Newspaper,
    links: [
      { name: '新闻动态', href: '/news' },
      { name: '白皮书发布', href: '/news/milestone-2026' },
    ],
  },
  {
    category: '支持',
    icon: HelpCircle,
    links: [
      { name: '常见问题', href: '/faq' },
    ],
  },
  {
    category: '法律',
    icon: Shield,
    links: [
      { name: '隐私政策', href: '/privacy' },
    ],
  },
]

export default function SitemapPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="py-20 md:py-28 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #F5F7FA 0%, #E6F2FF 100%)' }}
        >
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block text-sm font-medium text-brand-blue tracking-wider uppercase mb-4">
                网站地图
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gray mb-6">
                趣搜科技
                <span className="gradient-text block mt-2">网站地图</span>
              </h1>
              <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
                快速找到您需要的内容
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sitemapData.map((section) => {
                  const Icon = section.icon
                  return (
                    <div key={section.category} className="bg-brand-bg rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-lg font-bold text-brand-gray">{section.category}</h2>
                      </div>
                      <ul className="space-y-3">
                        {section.links.map((link) => (
                          <li key={link.name}>
                            <Link 
                              href={link.href}
                              className="text-brand-gray-light hover:text-brand-blue transition-colors"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
