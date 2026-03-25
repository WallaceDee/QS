import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const cases = [
  {
    name: '小野和子',
    industry: '美妆电商',
    logo: '💄',
    challenge: '品牌在AI搜索中曝光不足，用户获取成本持续上升',
    solution: '通过GEO全案服务，优化品牌数字信源，提升AI引用率',
    results: ['AI推荐率提升至行业第一', '品牌曝光量增长300%', '用户获取成本降低40%'],
    color: 'pink',
  },
  {
    name: '爱藏网',
    industry: '收藏品电商',
    logo: '🏺',
    challenge: '垂直领域专业性强，AI难以准确理解和推荐',
    solution: '构建行业知识库，建立权威数字信源体系',
    results: ['AI引用率提升250%', '专业问答覆盖率达85%', '品牌信任度显著提升'],
    color: 'amber',
  },
  {
    name: '北大汇丰商学院',
    industry: '教育培训',
    logo: '🎓',
    challenge: '教育类信息在AI搜索中竞争激烈',
    solution: 'E-E-A-T全方位优化，建立教育权威形象',
    results: ['教育类AI搜索排名Top 3', '咨询量增长180%', '品牌认知度大幅提升'],
    color: 'blue',
  },
  {
    name: '欧普康视',
    industry: '医疗健康',
    logo: '👁️',
    challenge: '医疗信息需要高度可信度，AI审核严格',
    solution: '专业资质认证+权威内容建设',
    results: ['医疗AI搜索推荐率第一', '专业内容引用率90%+', '患者咨询量增长200%'],
    color: 'green',
  },
  {
    name: '找法网',
    industry: '法律服务',
    logo: '⚖️',
    challenge: '法律信息专业性强，用户需求精准',
    solution: '法律知识图谱构建+专家背书',
    results: ['法律AI问答引用率85%', '精准咨询量增长150%', '行业影响力显著提升'],
    color: 'purple',
  },
  {
    name: '艮业科技',
    industry: '企业服务',
    logo: '🔧',
    challenge: 'B2B企业在AI搜索中难以获得曝光',
    solution: '垂直行业信源基建+案例库建设',
    results: ['B2B AI搜索曝光率提升280%', '销售线索增长220%', '品牌专业形象确立'],
    color: 'indigo',
  },
]

const colorMap: Record<string, { bg: string }> = {
  pink: { bg: 'bg-pink-50' },
  amber: { bg: 'bg-amber-50' },
  blue: { bg: 'bg-brand-blue-light' },
  green: { bg: 'bg-brand-green-light' },
  purple: { bg: 'bg-purple-50' },
  indigo: { bg: 'bg-indigo-50' },
}

export default function CasesPage() {
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
                标杆案例
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gray mb-6">
                他们选择了
                <span className="gradient-text block mt-2">趣搜科技</span>
              </h1>
              <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
                覆盖电商、教育、医疗、法律等多个行业，助力企业赢得AI搜索优势
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">3000+</div>
                  <div className="text-brand-gray-light">服务企业</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                  <div className="text-brand-gray-light">覆盖行业</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">95%</div>
                  <div className="text-brand-gray-light">客户满意度</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-24 bg-brand-bg">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cases.map((caseItem) => {
                  const colors = colorMap[caseItem.color]
                  return (
                    <div
                      key={caseItem.name}
                      className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      {/* Header */}
                      <div className={`${colors.bg} p-6`}>
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-3xl shadow-sm">
                            {caseItem.logo}
                          </div>
                          <div>
                            <div className="font-bold text-brand-gray">{caseItem.name}</div>
                            <div className="text-sm text-brand-gray-light">{caseItem.industry}</div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="mb-4">
                          <div className="text-xs font-medium text-brand-gray-light uppercase tracking-wider mb-2">
                            挑战
                          </div>
                          <p className="text-sm text-brand-gray">{caseItem.challenge}</p>
                        </div>

                        <div className="mb-6">
                          <div className="text-xs font-medium text-brand-gray-light uppercase tracking-wider mb-2">
                            解决方案
                          </div>
                          <p className="text-sm text-brand-gray">{caseItem.solution}</p>
                        </div>

                        <div className="bg-brand-bg rounded-xl p-4">
                          <div className="text-xs font-medium text-brand-blue uppercase tracking-wider mb-3">
                            核心成果
                          </div>
                          <ul className="space-y-2">
                            {caseItem.results.map((result, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <TrendingUp className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                                <span className="text-brand-gray">{result}</span>
                              </li>
                            ))}
                          </ul>
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
                成为我们的下一个成功案例
              </h2>
              <p className="text-white/70 mb-8">
                联系我们的GEO专家，获取专属的行业解决方案
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-white text-brand-blue hover:bg-white/90 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2">
                  免费咨询
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/guide" className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium">
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
