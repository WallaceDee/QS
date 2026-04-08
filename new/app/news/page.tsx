"use client"

import { useEffect, useState } from "react"
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const categoryColors: Record<string, string> = {
  '公司新闻': 'bg-brand-blue-light text-brand-blue',
  '荣誉资质': 'bg-green-100 text-green-700',
  '业务动态': 'bg-orange-100 text-orange-700',
  '合作动态': 'bg-purple-100 text-purple-600',
}

type NewsItem = {
  id: number
  title: string
  slug: string
  date: string
  category: string
  excerpt: string
  coverImage: string | null
  featured: boolean
  createdAt: string
}

export default function NewsPage() {
  const [newsData, setNewsData] = useState<{ list: NewsItem[]; total: number; page: number; totalPages: number } | null>(null)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/news?page=${page}`)
      .then((res) => res.json())
      .then((d) => setNewsData(d))
      .finally(() => setLoading(false))
  }, [page])

  const featuredNews = newsData?.list.find(n => n.featured) ?? null
  const regularNews = newsData?.list.filter(n => !n.featured) ?? []

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
                  href={`/news/${featuredNews.slug}`}
                  className="group block bg-brand-bg rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-video md:aspect-auto relative overflow-hidden">
                      {featuredNews.coverImage ? (
                        <img
                          src={featuredNews.coverImage}
                          alt={featuredNews.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center">
                          <div className="text-white text-center p-8">
                            <div className="text-6xl mb-4">📰</div>
                            <div className="text-xl font-bold">{featuredNews.category}</div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[featuredNews.category] || 'bg-white/10 text-white/70'}`}>
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

              {loading ? (
                <div className="text-center py-12 text-brand-gray-light">加载中...</div>
              ) : (
                <>
                  <div className="space-y-6">
                    {regularNews.map((news) => (
                      <Link
                        key={news.id}
                        href={`/news/${news.slug}`}
                        className="group flex items-stretch bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 h-36"
                      >
                        <div className="w-40 flex-shrink-0 overflow-hidden h-full">
                          {news.coverImage ? (
                            <img
                              src={news.coverImage}
                              alt={news.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-brand-blue/10 to-brand-green/10 flex items-center justify-center">
                              <div className="text-3xl">📰</div>
                            </div>
                          )}
                        </div>
                        <div className="p-6 flex flex-col justify-center flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[news.category] || 'bg-white/10 text-white/70'}`}>
                              {news.category}
                            </span>
                            <span className="flex items-center gap-1 text-sm text-brand-gray-light">
                              <Calendar className="w-4 h-4" />
                              {news.date}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-brand-gray mb-1 group-hover:text-brand-blue transition-colors">
                            {news.title}
                          </h3>
                          <p className="text-sm text-brand-gray-light line-clamp-1">{news.excerpt}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Pagination */}
                  {newsData && newsData.totalPages > 1 && (
                    <div className="flex items-center justify-center gap-3 mt-10">
                      <button
                        onClick={() => setPage(page - 1)}
                        disabled={page <= 1}
                        className="px-5 py-2 rounded-xl border border-brand-blue/20 text-brand-blue font-medium hover:bg-brand-blue/5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      >
                        上一页
                      </button>
                      <span className="text-sm text-brand-gray-light">
                        第 {page} / {newsData.totalPages} 页，共 {newsData.total} 条
                      </span>
                      <button
                        onClick={() => setPage(page + 1)}
                        disabled={page >= newsData.totalPages}
                        className="px-5 py-2 rounded-xl border border-brand-blue/20 text-brand-blue font-medium hover:bg-brand-blue/5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      >
                        下一页
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
