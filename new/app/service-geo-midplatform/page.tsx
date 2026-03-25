import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { CheckCircle, X, Shield, Zap, BarChart3, Database, FileText, ArrowRight, Award, BookOpen } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Zap,
    title: 'AI诊断雷达',
    description: '实时监测品牌在AI搜索中的表现，快速发现问题和机会点',
  },
  {
    icon: Database,
    title: '本地知识库部署',
    description: '构建企业专属的知识库系统，提升AI对品牌的理解和引用率',
  },
  {
    icon: BarChart3,
    title: '趣搜指数监控',
    description: '独家GEO效果评估指标，量化品牌在AI搜索中的影响力',
  },
  {
    icon: FileText,
    title: '多模态内容生成',
    description: 'AI驱动的文本、图片、视频内容生成与优化',
  },
]

const comparisonData = [
  { feature: 'AI诊断雷达', quso: true, competitor1: true, competitor2: false },
  { feature: '本地知识库部署', quso: true, competitor1: false, competitor2: false },
  { feature: '趣搜指数监控', quso: true, competitor1: false, competitor2: false },
  { feature: '多模态内容生成', quso: true, competitor1: true, competitor2: true },
  { feature: 'E-E-A-T优化', quso: true, competitor1: false, competitor2: false },
  { feature: '私有化部署', quso: true, competitor1: false, competitor2: false },
  { feature: '7×24技术支持', quso: true, competitor1: false, competitor2: true },
]

const faqs = [
  {
    question: 'GEO智能中台需要部署多长时间？',
    answer: '标准部署周期为2-4周，具体时间取决于企业数据量和定制需求。我们提供专业的部署服务，确保系统平稳上线。',
  },
  {
    question: '是否需要代码开发？',
    answer: '不需要。GEO智能中台采用SaaS模式，开箱即用。对于有特殊需求的企业，我们也提供API接口和定制化开发服务。',
  },
  {
    question: '如何验证GEO效果？',
    answer: '系统内置趣搜指数监控功能，可实时追踪品牌在主流AI平台的曝光率、引用率和排名变化，数据透明可验证。',
  },
  {
    question: '是否支持多品牌管理？',
    answer: '支持。中台支持多品牌、多账号管理，适合集团企业和代理机构使用。',
  },
]

export default function ServiceGeoMidplatformPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="py-20 md:py-28 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #F5F7FA 0%, #E6F7F1 100%)' }}
        >
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block text-sm font-medium text-brand-green tracking-wider uppercase mb-4">
                核心产品
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gray mb-6">
                GEO智能中台
                <span className="gradient-text block mt-2 text-3xl md:text-4xl">企业级AI营销托管系统</span>
              </h1>
              <p className="text-lg text-brand-gray-light max-w-2xl mx-auto mb-8">
                集成AI诊断、内容生成、效果监控于一体的智能化GEO平台，让企业的AI搜索优化工作自动化、规模化
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary gap-2">
                  申请演示
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/resources" className="btn-secondary gap-2">
                  <BookOpen className="w-4 h-4" />
                  下载白皮书
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence Chain */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue-light flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <div className="font-semibold text-brand-gray mb-1">发明专利</div>
                  <div className="text-sm text-brand-gray-light">
                    基于大数据和AI大模型的智能营销云服务方法及平台
                  </div>
                  <div className="text-xs text-brand-blue mt-2">专利号：2026102599975</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green-light flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <div className="font-semibold text-brand-gray mb-1">软件著作权</div>
                  <div className="text-sm text-brand-gray-light">
                    趣搜AI优化软件
                  </div>
                  <div className="text-xs text-brand-green mt-2">登记号：2026R11L0293347</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange-light flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <div className="font-semibold text-brand-gray mb-1">数据安全</div>
                  <div className="text-sm text-brand-gray-light">
                    支持私有化部署，企业数据完全自主可控
                  </div>
                  <div className="text-xs text-brand-orange mt-2">ISO 27001认证中</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label mb-4 block">核心功能</span>
              <h2 className="section-title">
                一站式<span className="gradient-text">GEO解决方案</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="flex gap-6 p-8 rounded-2xl bg-brand-bg hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-brand-gray mb-2">{feature.title}</h3>
                      <p className="text-brand-gray-light">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-24 bg-brand-bg">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label mb-4 block">产品对比</span>
              <h2 className="section-title">
                为什么选择<span className="gradient-text">趣搜GEO智能中台</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-brand-gray text-white">
                    <th className="px-6 py-4 text-left font-semibold">功能特性</th>
                    <th className="px-6 py-4 text-center font-semibold bg-brand-blue">趣搜GEO中台</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-300">竞品A</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-300">竞品B</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={row.feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 text-brand-gray font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center bg-brand-blue-light">
                        <CheckCircle className="w-5 h-5 text-brand-blue mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.competitor1 ? (
                          <CheckCircle className="w-5 h-5 text-brand-green mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.competitor2 ? (
                          <CheckCircle className="w-5 h-5 text-brand-green mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="section-label mb-4 block">常见问题</span>
                <h2 className="section-title">
                  关于GEO智能中台的<span className="gradient-text">常见疑问</span>
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-brand-bg rounded-2xl p-6">
                    <h3 className="font-semibold text-brand-gray mb-3">{faq.question}</h3>
                    <p className="text-brand-gray-light">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-brand-gray">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                开启您的GEO智能化之旅
              </h2>
              <p className="text-white/70 mb-8">
                立即申请产品演示，了解GEO智能中台如何助力您的企业
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-white text-brand-blue hover:bg-white/90 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2">
                  申请演示
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/technology" className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium">
                  了解技术原理
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
