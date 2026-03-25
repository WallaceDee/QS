import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ArrowRight, CheckCircle, XCircle, AlertTriangle, Star } from 'lucide-react'
import Link from 'next/link'

const evaluationCriteria = [
  {
    category: '技术能力',
    items: [
      { name: '是否拥有核心专利技术', weight: '重要' },
      { name: '是否具备AI大模型集成能力', weight: '重要' },
      { name: '是否提供数据闭环分析', weight: '重要' },
      { name: '是否支持私有化部署', weight: '加分' },
    ],
  },
  {
    category: '行业经验',
    items: [
      { name: '服务客户数量和行业覆盖', weight: '重要' },
      { name: '团队专业背景和从业年限', weight: '重要' },
      { name: '是否有同行业成功案例', weight: '重要' },
      { name: '是否参与行业标准制定', weight: '加分' },
    ],
  },
  {
    category: '服务体系',
    items: [
      { name: '是否提供全流程服务', weight: '重要' },
      { name: '是否有专业的客户成功团队', weight: '重要' },
      { name: '是否提供培训和支持', weight: '重要' },
      { name: '响应速度和问题解决效率', weight: '重要' },
    ],
  },
]

const pitfalls = [
  {
    title: '警惕"AI黑盒"承诺',
    description: '任何承诺"保证AI排名第一"的服务商都不可信。GEO是长期建设过程，没有捷径。',
  },
  {
    title: '避免纯技术导向',
    description: 'GEO不仅是技术问题，更需要内容策略、品牌建设等多维度配合。',
  },
  {
    title: '不要忽视数据安全',
    description: '选择支持私有化部署的服务商，确保企业核心数据安全可控。',
  },
]

export default function GuidePage() {
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
                选购指南
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gray mb-6">
                2026 GEO服务商
                <span className="gradient-text block mt-2">选购指南</span>
              </h1>
              <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
                如何让AI主动推荐您的品牌？从6个维度评估GEO服务商，避开常见陷阱
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-brand-gray mb-4">为什么企业需要GEO？</h2>
                <p className="text-brand-gray-light leading-relaxed mb-8">
                  随着ChatGPT、文心一言、通义千问等AI大模型的普及，越来越多的用户通过AI获取信息和推荐。
                  GEO（生成式引擎优化）帮助企业优化在AI搜索中的展示效果，让品牌成为AI推荐的首选。
                  选择一家专业的GEO服务商，是企业AI营销成功的关键。
                </p>

                <div className="bg-brand-orange-light rounded-2xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-brand-gray mb-2">重要提醒：GEO ≠ SEO</h3>
                      <p className="text-brand-gray-light">
                        GEO不是传统SEO的简单延伸，也不是刷关键词排名。GEO关注的是如何让AI理解和信任您的品牌，
                        从而在生成回答时主动引用和推荐。这需要完全不同的技术方法和策略思维。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation Criteria */}
        <section className="py-16 bg-brand-bg">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-brand-gray mb-8 text-center">
                核心评估指标
              </h2>

              <div className="space-y-8">
                {evaluationCriteria.map((category) => (
                  <div key={category.category} className="bg-white rounded-2xl p-8">
                    <h3 className="text-xl font-semibold text-brand-gray mb-6 flex items-center gap-3">
                      <Star className="w-5 h-5 text-brand-blue" />
                      {category.category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.items.map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-brand-bg rounded-xl">
                          <span className="text-brand-gray">{item.name}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            item.weight === '重要' 
                              ? 'bg-brand-blue-light text-brand-blue' 
                              : 'bg-brand-green-light text-brand-green'
                          }`}>
                            {item.weight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pitfalls */}
        <section className="py-16 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-brand-gray mb-8 text-center">
                避坑指南
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {pitfalls.map((pitfall) => (
                  <div key={pitfall.title} className="bg-red-50 rounded-2xl p-6 border border-red-100">
                    <div className="flex items-center gap-2 mb-4">
                      <XCircle className="w-5 h-5 text-red-500" />
                      <h3 className="font-semibold text-red-700">{pitfall.title}</h3>
                    </div>
                    <p className="text-red-600/80 text-sm">{pitfall.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Quso */}
        <section className="py-16 bg-brand-bg">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-brand-gray mb-8 text-center">
                趣搜科技的独特价值
              </h2>

              <div className="bg-white rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-brand-gray mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green" />
                      技术领先
                    </h3>
                    <ul className="space-y-2 text-brand-gray-light">
                      <li>• 2项发明专利，3项软件著作权</li>
                      <li>• 自主研发的GEO智能中台</li>
                      <li>• 独家趣搜指数评估体系</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-gray mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green" />
                      经验丰富
                    </h3>
                    <ul className="space-y-2 text-brand-gray-light">
                      <li>• 服务3000+企业客户</li>
                      <li>• 6000+学员信赖的培训体系</li>
                      <li>• 覆盖10+垂直行业</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-gray mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green" />
                      服务完善
                    </h3>
                    <ul className="space-y-2 text-brand-gray-light">
                      <li>• 从培训到全案的一站式服务</li>
                      <li>• 专业的客户成功团队</li>
                      <li>• 7×24小时技术支持</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-gray mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green" />
                      效果可验证
                    </h3>
                    <ul className="space-y-2 text-brand-gray-light">
                      <li>• 透明的数据监测体系</li>
                      <li>• 可量化的ROI回报</li>
                      <li>• 丰富的成功案例</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-gray">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                准备好开始您的GEO之旅了吗？
              </h2>
              <p className="text-white/70 mb-8">
                联系我们的专家，获取免费的GEO诊断和方案建议
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-white text-brand-blue hover:bg-white/90 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2">
                  免费咨询
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/cases" className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium">
                  查看成功案例
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
