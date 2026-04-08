import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { LogoDisplay } from './components/LogoDisplay'

const colorMap: Record<string, { bg: string }> = {
  pink: { bg: 'bg-pink-50' },
  amber: { bg: 'bg-amber-50' },
  blue: { bg: 'bg-brand-blue-light' },
  green: { bg: 'bg-brand-green-light' },
  purple: { bg: 'bg-purple-50' },
  indigo: { bg: 'bg-indigo-50' },
}

export const dynamic = "force-dynamic"

export default async function CasesPage() {
  const cases = await prisma["case"].findMany({ orderBy: { createdAt: 'desc' } })
  const parsedCases = cases.map(c => ({ ...c, results: JSON.parse(c.results) as string[] }))

  return (
    <>
      <Navbar />
      <main className="pt-20">
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

        <section className="py-24 bg-brand-bg">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {parsedCases.map((caseItem) => {
                  const colors = colorMap[caseItem.color] || { bg: 'bg-blue-50' }
                  return (
                    <div
                      key={caseItem.id}
                      className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      {caseItem.coverImage ? (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={caseItem.coverImage}
                            alt={caseItem.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className={`${colors.bg} p-6`}>
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-3xl shadow-sm">
                              {caseItem.logo || '?'}
                            </div>
                            <div>
                              <div className="font-bold text-brand-gray">{caseItem.name}</div>
                              <div className="text-sm text-brand-gray-light">{caseItem.industry}</div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="p-6">
                        {caseItem.coverImage && (
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${colors.bg}`}>
                              <LogoDisplay logo={caseItem.logo} />
                            </div>
                            <div>
                              <div className="font-bold text-brand-gray">{caseItem.name}</div>
                              <div className="text-sm text-brand-gray-light">{caseItem.industry}</div>
                            </div>
                          </div>
                        )}

                        <div className="mb-4">
                          <div className="text-xs font-medium text-brand-gray-light uppercase tracking-wider mb-2">挑战</div>
                          <p className="text-sm text-brand-gray" dangerouslySetInnerHTML={{ __html: caseItem.challenge }} />
                        </div>

                        <div className="mb-6">
                          <div className="text-xs font-medium text-brand-gray-light uppercase tracking-wider mb-2">解决方案</div>
                          <p className="text-sm text-brand-gray" dangerouslySetInnerHTML={{ __html: caseItem.solution }} />
                        </div>

                        <div className="bg-brand-bg rounded-xl p-4">
                          <div className="text-xs font-medium text-brand-blue uppercase tracking-wider mb-3">核心成果</div>
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

        <section className="py-16 bg-brand-gray">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">成为我们的下一个成功案例</h2>
              <p className="text-white/70 mb-8">联系我们的GEO专家，获取专属的行业解决方案</p>
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
