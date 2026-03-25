'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

const blogPosts = [
  {
    title: '2026年GEO发展趋势：AI搜索优化的未来方向',
    date: '2026年2月15日',
    excerpt: '探索GEO技术的最新发展趋势，了解企业如何在AI时代保持竞争优势...',
    category: '行业趋势',
    link: '/technology',
    color: 'blue',
  },
  {
    title: 'E-E-A-T原则在GEO中的应用实践',
    date: '2026年2月10日',
    excerpt: '深入解析Experience、Expertise、Authoritativeness、Trustworthiness四维框架...',
    category: '技术方法',
    link: '/technology/eeat-principle',
    color: 'green',
  },
  {
    title: '案例分析：如何通过GEO提升品牌AI搜索排名',
    date: '2026年2月5日',
    excerpt: '真实案例分享，展示GEO服务如何帮助企业实现300%的搜索曝光提升...',
    category: '案例研究',
    link: '/cases',
    color: 'orange',
  },
]

const colorMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: 'bg-brand-blue-light', text: 'text-brand-blue' },
  green: { bg: 'bg-brand-green-light', text: 'text-brand-green' },
  orange: { bg: 'bg-brand-orange-light', text: 'text-brand-orange' },
}

export function BlogSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-brand-bg">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span 
              className={`section-label mb-4 block transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              博客动态
            </span>
            <h2 
              className={`section-title transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              最新洞察与<span className="gradient-text">观点</span>
            </h2>
          </div>
          <Link 
            href="/technology"
            className={`flex items-center gap-2 text-brand-blue font-medium mt-4 md:mt-0 hover:gap-3 transition-all duration-200 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            查看全部
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => {
            const colors = colorMap[post.color]
            
            return (
              <Link
                key={post.title}
                href={post.link}
                className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-3 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Image Placeholder */}
                <div className={`h-48 ${colors.bg} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">
                    {post.color === 'blue' && '📈'}
                    {post.color === 'green' && '🔍'}
                    {post.color === 'orange' && '📊'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-brand-gray-light">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-brand-gray mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-brand-gray-light mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-brand-blue text-sm font-medium">
                    <span>阅读更多</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
