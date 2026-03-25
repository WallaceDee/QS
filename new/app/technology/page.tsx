import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { FileText, Award, BookOpen, ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'

const resources = [
  {
    category: 'GEO方法论',
    items: [
      {
        title: 'E-E-A-T结构化重塑',
        description: '深入解析Experience、Expertise、Authoritativeness、Trustworthiness四维框架在GEO中的应用',
        link: '/technology/eeat-principle',
        type: 'article',
        date: '2026-02-10',
      },
      {
        title: '全域交叉认证体系',
        description: '构建多平台、多维度品牌信源认证体系的方法与实践',
        link: '/technology',
        type: 'article',
        date: '2026-02-05',
      },
      {
        title: 'GEO内容优化指南',
        description: '针对AI搜索的内容创作与优化最佳实践',
        link: '/technology',
        type: 'guide',
        date: '2026-01-28',
      },
    ],
  },
  {
    category: '专利与著作权',
    items: [
      {
        title: '智能营销云服务方法及平台',
        description: '基于大数据和AI大模型的智能营销发明专利',
        link: '/service-geo-midplatform',
        type: 'patent',
        date: '2026-01-15',
        badge: '专利号：2026102599975',
      },
      {
        title: '趣搜AI优化软件',
        description: '企业级GEO优化软件系统',
        link: '/service-geo-midplatform',
        type: 'copyright',
        date: '2026-01-10',
        badge: '登记号：2026R11L0293347',
      },
    ],
  },
  {
    category: '行业报告与白皮书',
    items: [
      {
        title: 'GEO驱动企业营销新增长白皮书',
        description: '2026年GEO行业首份权威白皮书，深度解析GEO发展趋势与应用实践',
        link: '/resources',
        type: 'whitepaper',
        date: '2026-02-01',
        badge: '免费下载',
      },
      {
        title: 'AI搜索营销年度报告',
        description: '2025年度AI搜索营销行业发展报告',
        link: '/resources',
        type: 'report',
        date: '2026-01-20',
        badge: '免费下载',
      },
    ],
  },
]

const typeIcons: Record<string, typeof FileText> = {
  article: BookOpen,
  guide: BookOpen,
  patent: Award,
  copyright: Award,
  whitepaper: FileText,
  report: FileText,
}

const typeLabels: Record<string, string> = {
  article: '技术文章',
  guide: '实践指南',
  patent: '发明专利',
  copyright: '软件著作权',
  whitepaper: '白皮书',
  report: '行业报告',
}

export default function TechnologyPage() {
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
                技术中心
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gray mb-6">
                GEO方法论与
                <span className="gradient-text block mt-2">权威研究</span>
              </h1>
              <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
                探索GEO核心技术、方法论与行业洞察，掌握AI搜索优化的前沿知识
              </p>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="space-y-16">
              {resources.map((category) => (
                <div key={category.category}>
                  <h2 className="text-2xl font-bold text-brand-gray mb-8 flex items-center gap-3">
                    <div className="w-1 h-8 gradient-bg rounded-full" />
                    {category.category}
                  </h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item) => {
                      const Icon = typeIcons[item.type]
                      return (
                        <Link
                          key={item.title}
                          href={item.link}
                          className="group bg-brand-bg rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Icon className="w-6 h-6 text-brand-blue" />
                            </div>
                            <span className="text-xs text-brand-gray-light">{item.date}</span>
                          </div>

                          <div className="mb-3">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand-blue-light text-brand-blue mb-3">
                              {typeLabels[item.type]}
                            </span>
                            {'badge' in item && item.badge && (
                              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand-green-light text-brand-green ml-2">
                                {item.badge}
                              </span>
                            )}
                          </div>

                          <h3 className="text-lg font-semibold text-brand-gray mb-2 group-hover:text-brand-blue transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-sm text-brand-gray-light mb-4">
                            {item.description}
                          </p>

                          <div className="flex items-center gap-2 text-brand-blue text-sm font-medium">
                            <span>查看详情</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-brand-bg">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray mb-6">
                需要专业的GEO技术支持？
              </h2>
              <p className="text-brand-gray-light mb-8">
                我们的技术团队可以为您提供定制化的GEO解决方案
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary gap-2">
                  联系技术团队
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/resources" className="btn-secondary gap-2">
                  <Download className="w-4 h-4" />
                  下载资源
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
