import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { ArrowLeft, ArrowRight, Download, User, GraduationCap, Award, Shield } from 'lucide-react'
import Link from 'next/link'

const dimensions = [
  {
    icon: User,
    title: 'Experience（经验）',
    description: '内容创作者对主题的实际经验和 firsthand 知识',
    implementation: [
      '展示创作者的实际项目经验',
      '提供案例研究和成功故事',
      '包含真实的用户反馈和评价',
      '记录问题解决过程和结果',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Expertise（专业）',
    description: '创作者在特定领域的专业知识和技能水平',
    implementation: [
      '展示专业资质和认证',
      '提供详细的技术解析',
      '引用权威研究和数据',
      '定期更新专业知识库',
    ],
  },
  {
    icon: Award,
    title: 'Authoritativeness（权威）',
    description: '创作者或网站在特定领域的声誉和影响力',
    implementation: [
      '建立行业合作伙伴关系',
      '获取权威媒体引用和报道',
      '参与行业活动和演讲',
      '获得行业奖项和认可',
    ],
  },
  {
    icon: Shield,
    title: 'Trustworthiness（可信）',
    description: '内容的准确性、透明度和可靠性',
    implementation: [
      '确保信息准确无误',
      '提供数据来源和引用',
      '保持内容更新和维护',
      '建立透明的联系渠道',
    ],
  },
]

export default function EEATPrinciplePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="py-16 md:py-24 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #F5F7FA 0%, #E6F2FF 100%)' }}
        >
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto">
              <Link 
                href="/technology"
                className="inline-flex items-center gap-2 text-brand-gray-light hover:text-brand-blue transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                返回技术中心
              </Link>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-blue-light text-brand-blue">
                  GEO方法论
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-green-light text-brand-green">
                  权威报告
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray mb-6">
                E-E-A-T结构化重塑
                <span className="gradient-text block mt-2 text-2xl md:text-3xl">企业信源的AI信任基石</span>
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-brand-gray-light">
                <span>发布日期：2026年2月10日</span>
                <span>版本：v1.0</span>
                <span>作者：趣搜科技研究团队</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-16">
                <p className="text-xl text-brand-gray-light leading-relaxed">
                  E-E-A-T（Experience, Expertise, Authoritativeness, Trustworthiness）是Google提出的内容质量评估框架，
                  在GEO（生成式引擎优化）时代，这一框架变得尤为重要。AI模型在生成回答时，会优先引用具备高E-E-A-T特征的信源。
                  本文将深入解析E-E-A-T四维框架，并提供趣搜科技的落地实施方案。
                </p>
              </div>

              {/* Dimensions */}
              <div className="space-y-12 mb-16">
                {dimensions.map((dim) => {
                  const Icon = dim.icon
                  return (
                    <div key={dim.title} className="bg-brand-bg rounded-2xl p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-brand-gray mb-3">{dim.title}</h2>
                          <p className="text-brand-gray-light mb-6">{dim.description}</p>
                          
                          <h3 className="text-sm font-semibold text-brand-gray uppercase tracking-wider mb-4">
                            趣搜落地方式
                          </h3>
                          <ul className="space-y-3">
                            {dim.implementation.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                                <span className="text-brand-gray">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Implementation Framework */}
              <div className="bg-gradient-to-br from-brand-blue to-brand-green rounded-2xl p-8 text-white mb-16">
                <h2 className="text-2xl font-bold mb-6">趣搜E-E-A-T实施框架</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">内容层面</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>• 建立内容创作者档案系统</li>
                      <li>• 标注内容来源和引用</li>
                      <li>• 定期更新和审核内容</li>
                      <li>• 添加结构化数据标记</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">技术层面</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>• 部署Schema.org结构化数据</li>
                      <li>• 建立作者和机构实体图谱</li>
                      <li>• 优化知识面板展示</li>
                      <li>• 构建内部链接网络</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-2xl font-bold text-brand-gray mb-4">总结</h2>
                <p className="text-brand-gray-light leading-relaxed">
                  E-E-A-T不是一蹴而就的，而是需要长期建设和维护的系统工程。趣搜科技通过GEO智能中台，
                  帮助企业系统性地提升E-E-A-T评分，构建被AI高频引用的数字信源。如需了解更多实施方案，
                  欢迎联系我们的专业团队。
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-100">
                <Link href="/contact" className="btn-primary gap-2">
                  咨询实施方案
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="btn-secondary gap-2">
                  <Download className="w-4 h-4" />
                  下载PDF版本
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
