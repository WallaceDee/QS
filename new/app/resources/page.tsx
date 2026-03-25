import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Download, FileText, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const resources = [
  {
    title: 'GEO驱动企业营销新增长白皮书',
    description: '2026年GEO行业首份权威白皮书，深度解析GEO发展趋势、技术方法和应用实践',
    type: 'whitepaper',
    size: '15.8 MB',
    pages: '68页',
    icon: FileText,
    color: 'blue',
  },
  {
    title: '趣搜科技GEO实战指南',
    description: '系统化的GEO操作手册，涵盖从入门到精通的完整知识体系',
    type: 'guide',
    size: '8.5 MB',
    pages: '120页',
    icon: BookOpen,
    color: 'green',
  },
  {
    title: 'AI搜索营销年度报告',
    description: '2025年度AI搜索营销行业发展报告，洞察行业趋势和最佳实践',
    type: 'report',
    size: '12.3 MB',
    pages: '45页',
    icon: FileText,
    color: 'orange',
  },
]

const typeLabels: Record<string, string> = {
  whitepaper: '白皮书',
  guide: '实战指南',
  report: '行业报告',
}

const colorMap: Record<string, { bg: string; text: string; light: string }> = {
  blue: { bg: 'bg-brand-blue', text: 'text-brand-blue', light: 'bg-brand-blue-light' },
  green: { bg: 'bg-brand-green', text: 'text-brand-green', light: 'bg-brand-green-light' },
  orange: { bg: 'bg-brand-orange', text: 'text-brand-orange', light: 'bg-brand-orange-light' },
}

export default function ResourcesPage() {
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
                资源中心
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gray mb-6">
                免费下载
                <span className="gradient-text block mt-2">GEO专业资源</span>
              </h1>
              <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
                白皮书、实战指南、行业报告，助力您深入了解GEO
              </p>
            </div>
          </div>
        </section>

        {/* Resources List */}
        <section className="py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {resources.map((resource) => {
                  const colors = colorMap[resource.color]
                  const Icon = resource.icon
                  
                  return (
                    <div
                      key={resource.title}
                      className="bg-brand-bg rounded-3xl p-8 md:p-10 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-8">
                        {/* Icon */}
                        <div className={`w-20 h-20 rounded-2xl ${colors.light} flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-10 h-10 ${colors.text}`} />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.light} ${colors.text}`}>
                              {typeLabels[resource.type]}
                            </span>
                            <span className="text-sm text-brand-gray-light">{resource.pages}</span>
                            <span className="text-sm text-brand-gray-light">{resource.size}</span>
                          </div>

                          <h2 className="text-xl md:text-2xl font-bold text-brand-gray mb-3">
                            {resource.title}
                          </h2>

                          <p className="text-brand-gray-light">
                            {resource.description}
                          </p>
                        </div>

                        {/* Action */}
                        <div className="flex-shrink-0">
                          <button className={`${colors.bg} text-white hover:opacity-90 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2`}>
                            <Download className="w-4 h-4" />
                            免费下载
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-gray">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                需要更多专业支持？
              </h2>
              <p className="text-white/70 mb-8">
                我们的GEO专家可以为您提供定制化的解决方案
              </p>
              <Link href="/contact" className="bg-white text-brand-blue hover:bg-white/90 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2">
                联系专家
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
