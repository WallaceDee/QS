import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { GraduationCap, Cpu, Target, Building2, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: GraduationCap,
    title: 'GEO培训教育',
    description: '系统化的GEO课程体系，帮助企业快速掌握AI搜索优化技能，培养内部GEO专业人才。',
    features: ['GEO基础理论课程', '实战案例解析', 'AI工具使用培训', '认证考试体系'],
    link: '/services',
    color: 'blue',
    cta: '了解课程详情',
  },
  {
    icon: Cpu,
    title: 'GEO智能中台',
    description: '企业级AI营销托管系统，实现智能化内容生成与优化，让GEO工作自动化、规模化。',
    features: ['AI诊断雷达', '本地知识库部署', '趣搜指数监控', '多模态内容生成'],
    link: '/service-geo-midplatform',
    color: 'green',
    cta: '查看产品详情',
  },
  {
    icon: Target,
    title: '全案营销服务',
    description: '从策略到执行的全流程GEO服务，助力品牌AI搜索排名提升，实现可量化的营销效果。',
    features: ['GEO策略规划', '内容优化执行', '数据监测分析', '效果持续优化'],
    link: '/services',
    color: 'orange',
    cta: '咨询服务方案',
  },
  {
    icon: Building2,
    title: '垂直行业信源基建',
    description: '针对特定行业的深度优化方案，构建行业权威数字资产，建立AI信任度。',
    features: ['行业信源分析', '权威内容建设', 'E-E-A-T优化', '长期价值沉淀'],
    link: '/services',
    color: 'purple',
    cta: '了解行业方案',
  },
]

const colorMap: Record<string, { bg: string; text: string; light: string; gradient: string }> = {
  blue: { bg: 'bg-brand-blue', text: 'text-brand-blue', light: 'bg-brand-blue-light', gradient: 'from-brand-blue to-brand-blue-dark' },
  green: { bg: 'bg-brand-green', text: 'text-brand-green', light: 'bg-brand-green-light', gradient: 'from-brand-green to-emerald-600' },
  orange: { bg: 'bg-brand-orange', text: 'text-brand-orange', light: 'bg-brand-orange-light', gradient: 'from-brand-orange to-orange-600' },
  purple: { bg: 'bg-purple-500', text: 'text-purple-500', light: 'bg-purple-50', gradient: 'from-purple-500 to-purple-700' },
}

export default function ServicesPage() {
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
                我们的服务
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gray mb-6">
                GEO解决方案
                <span className="gradient-text block mt-2">让AI读懂您的企业</span>
              </h1>
              <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
                从培训到全案执行，为企业提供一站式GEO服务，帮助您在AI时代赢得搜索优势
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="space-y-16">
              {services.map((service, index) => {
                const colors = colorMap[service.color]
                const Icon = service.icon
                const isReversed = index % 2 === 1

                return (
                  <div key={service.title} className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className={isReversed ? 'lg:order-2' : ''}>
                      <div className={`w-16 h-16 rounded-2xl ${colors.light} flex items-center justify-center mb-6`}>
                        <Icon className={`w-8 h-8 ${colors.text}`} />
                      </div>

                      <h2 className="text-3xl font-bold text-brand-gray mb-4">
                        {service.title}
                      </h2>

                      <p className="text-brand-gray-light leading-relaxed mb-8">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0`} />
                            <span className="text-brand-gray">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link href={service.link} className={`${colors.bg} text-white hover:opacity-90 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2`}>
                        {service.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Visual */}
                    <div className={isReversed ? 'lg:order-1' : ''}>
                      <div className={`relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${colors.gradient} p-8 flex items-center justify-center`}>
                        <div className="absolute inset-0 bg-white/10" />
                        <div className="relative text-center">
                          <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                            <Icon className="w-12 h-12 text-white" />
                          </div>
                          <div className="text-white text-2xl font-bold">{service.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-brand-bg">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray mb-6">
                不确定哪种服务适合您？
              </h2>
              <p className="text-brand-gray-light mb-8">
                联系我们的GEO专家，获取免费的业务诊断和方案建议
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary gap-2">
                  免费咨询
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/guide" className="btn-secondary">
                  查看选购指南
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
