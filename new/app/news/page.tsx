import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const newsItems = [
  {
    title: '趣搜科技发布行业首份GEO白皮书，引领AI搜索营销新纪元',
    date: '2026年2月1日',
    category: '公司新闻',
    excerpt: '趣搜科技正式发布《GEO驱动企业营销新增长白皮书》，这是国内GEO行业首份权威研究报告...',
    link: '/news/milestone-2026',
    featured: true,
  },
  {
    title: '趣搜科技琶洲运营中心正式开业',
    date: '2025年8月15日',
    category: '公司新闻',
    excerpt: '趣搜科技位于广州琶洲欧派国际广场的全新运营中心正式投入使用，标志着公司服务能力全面升级...',
    link: '/news',
    featured: false,
  },
  {
    title: '趣搜科技荣获2024广东省代理机构发明专利授权率百强榜',
    date: '2024年12月20日',
    category: '荣誉资质',
    excerpt: '凭借在AI营销领域的技术创新，趣搜科技成功入选广东省代理机构发明专利授权率百强榜...',
    link: '/news',
    featured: false,
  },
  {
    title: 'GEO培训课程学员突破6000人',
    date: '2024年10月10日',
    category: '业务动态',
    excerpt: '趣搜科技GEO培训课程累计学员突破6000人，成为国内最受欢迎的GEO培训品牌...',
    link: '/news',
    featured: false,
  },
  {
    title: '趣搜科技与多家知名企业达成战略合作',
    date: '2024年8月5日',
    category: '合作动态',
    excerpt: '趣搜科技宣布与多家行业领军企业达成战略合作，共同推进GEO技术在垂直行业的应用...',
    link: '/news',
    featured: false,
  },
]

const categoryColors: Record<string, string> = {
  '公司新闻': 'bg-brand-blue-light text-brand-blue',
  '荣誉资质': 'bg-brand-green-light text-brand-green',
  '业务动态': 'bg-brand-orange-light text-brand-orange',
  '合作动态': 'bg-purple-100 text-purple-600',
}

export default function NewsPage() {
  const featuredNews = newsItems.find(n => n.featured)
  const regularNews = newsItems.filter(n => !n.featured)

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
                新闻动态
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gray mb-6">
                趣搜科技
                <span className="gradient-text block mt-2">最新动态</span>
              </h1>
              <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
                了解趣搜科技的最新发展、行业洞察和重要公告
              </p>
            </div>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews && (
          <section className="py-16 bg-white">
            <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
              <div className="max-w-4xl mx-auto">
                <div className="text-sm text-brand-gray-light mb-4">精选新闻</div>
                <Link 
                  href={featuredNews.link}
                  className="group block bg-brand-bg rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-video md:aspect-auto bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center">
                      <div className="text-white text-center p-8">
                        <div className="text-6xl mb-4">📰</div>
                        <div className="text-xl font-bold">{featuredNews.category}</div>
                      </div>
                    </div>
                    <div className="p-8 md:p-12">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[featuredNews.category]}`}>
                          {featuredNews.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-brand-gray-light">
                          <Calendar className="w-4 h-4" />
                          {featuredNews.date}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-brand-gray mb-4 group-hover:text-brand-blue transition-colors">
                        {featuredNews.title}
                      </h2>
                      <p className="text-brand-gray-light mb-6">
                        {featuredNews.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-brand-blue font-medium">
                        <span>阅读全文</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* News List */}
        <section className="py-16 bg-brand-bg">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-brand-gray mb-8">更多新闻</h2>
              
              <div className="space-y-6">
                {regularNews.map((news, index) => (
                  <Link
                    key={index}
                    href={news.link}
                    className="group block bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[news.category]}`}>
                        {news.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-brand-gray-light">
                        <Calendar className="w-4 h-4" />
                        {news.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-brand-gray mb-2 group-hover:text-brand-blue transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-brand-gray-light">{news.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
