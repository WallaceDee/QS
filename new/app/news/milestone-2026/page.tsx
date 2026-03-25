import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react'
import Link from 'next/link'

export default function NewsDetailPage() {
  const article = {
    title: '趣搜科技发布行业首份GEO白皮书，引领AI搜索营销新纪元',
    date: '2026年2月1日',
    author: '趣搜科技',
    category: '公司新闻',
    content: `
      <p>2026年2月1日，趣搜科技正式发布《GEO驱动企业营销新增长白皮书》，这是国内GEO（生成式引擎优化）行业首份权威研究报告。白皮书系统阐述了GEO的核心理念、技术方法和应用实践，为企业AI搜索营销提供了全面的指导。</p>
      
      <h2>GEO：AI时代的营销新范式</h2>
      <p>随着ChatGPT、文心一言、通义千问等AI大模型的快速普及，用户获取信息的方式正在发生根本性变革。越来越多的用户选择通过AI对话来获取产品推荐、服务信息和专业建议。GEO（生成式引擎优化）应运而生，成为企业在AI时代赢得用户关注的关键策略。</p>
      
      <p>与传统SEO不同，GEO关注的是如何让AI理解和信任品牌，从而在生成回答时主动引用和推荐。这需要企业从内容质量、权威性、可信度等多个维度进行系统优化。</p>
      
      <h2>白皮书核心内容</h2>
      <p>《GEO驱动企业营销新增长白皮书》涵盖以下核心内容：</p>
      <ul>
        <li><strong>GEO理论基础</strong>：深入解析GEO的定义、原理和发展趋势</li>
        <li><strong>E-E-A-T框架</strong>：详细阐述Experience、Expertise、Authoritativeness、Trustworthiness四维优化方法</li>
        <li><strong>技术实现路径</strong>：介绍GEO智能中台的技术架构和功能模块</li>
        <li><strong>行业应用案例</strong>：分享多个行业的GEO成功实践</li>
        <li><strong>效果评估体系</strong>：建立GEO效果的量化评估指标</li>
      </ul>
      
      <h2>趣搜指数：GEO效果评估新标准</h2>
      <p>白皮书中首次发布了"趣搜指数"——趣搜科技独创的GEO效果评估体系。该指数从AI曝光率、引用率、排名位置、用户满意度等多个维度综合评估品牌在AI搜索中的表现，为企业提供可量化的优化目标。</p>
      
      <h2>行业影响与展望</h2>
      <p>趣搜科技创始人刘马松表示："GEO不是SEO的简单延伸，而是AI时代营销的全新范式。我们希望通过这份白皮书，帮助更多企业理解GEO的价值，掌握GEO的方法，在AI时代赢得竞争优势。"</p>
      
      <p>据悉，趣搜科技将持续投入GEO技术研发和方法论创新，计划每季度发布GEO行业报告，推动GEO行业的规范化发展。</p>
      
      <h2>白皮书下载</h2>
      <p>《GEO驱动企业营销新增长白皮书》现已开放免费下载，企业可通过趣搜科技官网或联系客服获取完整版报告。</p>
    `,
  }

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
                href="/news"
                className="inline-flex items-center gap-2 text-brand-gray-light hover:text-brand-blue transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                返回新闻列表
              </Link>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-blue-light text-brand-blue">
                  {article.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray mb-6">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-brand-gray-light">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {article.author}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-3xl mx-auto">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="text-brand-gray-light">分享这篇文章</div>
                  <button className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors">
                    <Share2 className="w-4 h-4" />
                    分享
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
