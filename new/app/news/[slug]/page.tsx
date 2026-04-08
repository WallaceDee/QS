import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'

const categoryColors: Record<string, string> = {
  '公司新闻': 'bg-brand-blue-light text-brand-blue',
  '荣誉资质': 'bg-green-100 text-green-700',
  '业务动态': 'bg-orange-100 text-orange-700',
  '合作动态': 'bg-purple-100 text-purple-600',
}

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const article = await prisma.news.findUnique({
    where: { slug: params.slug },
  })

  if (!article) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
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

              {article.coverImage && (
                <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category] || 'bg-white/10 text-white/70'}`}>
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
                  趣搜科技
                </span>
              </div>
            </div>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-3xl mx-auto">
              {article.content ? (
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              ) : (
                <p className="text-brand-gray-light">{article.excerpt}</p>
              )}

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
