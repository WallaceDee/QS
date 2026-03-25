'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { GraduationCap, Cpu, Target, Building2, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: GraduationCap,
    title: 'GEO培训教育',
    description: '系统化的GEO课程体系，帮助企业快速掌握AI搜索优化技能，培养内部GEO专业人才。',
    link: '/services',
    color: 'blue',
  },
  {
    icon: Cpu,
    title: 'GEO智能中台',
    description: '企业级AI营销托管系统，实现智能化内容生成与优化，让GEO工作自动化、规模化。',
    link: '/service-geo-midplatform',
    color: 'green',
  },
  {
    icon: Target,
    title: '全案营销服务',
    description: '从策略到执行的全流程GEO服务，助力品牌AI搜索排名提升，实现可量化的营销效果。',
    link: '/services',
    color: 'orange',
  },
  {
    icon: Building2,
    title: '垂直行业信源基建',
    description: '针对特定行业的深度优化方案，构建行业权威数字资产，建立AI信任度。',
    link: '/services',
    color: 'purple',
  },
]

const colorMap: Record<string, { bg: string; text: string; light: string }> = {
  blue: { bg: 'bg-brand-blue', text: 'text-brand-blue', light: 'bg-brand-blue-light' },
  green: { bg: 'bg-brand-green', text: 'text-brand-green', light: 'bg-brand-green-light' },
  orange: { bg: 'bg-brand-orange', text: 'text-brand-orange', light: 'bg-brand-orange-light' },
  purple: { bg: 'bg-purple-500', text: 'text-purple-500', light: 'bg-purple-50' },
}

export function ServicesSection() {
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`section-label mb-4 block transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            我们的服务
          </span>
          <h2 
            className={`section-title mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            AI驱动的<span className="gradient-text">GEO解决方案</span>
          </h2>
          <p 
            className={`section-description transition-all duration-600 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            从培训到全案执行，为企业提供一站式GEO服务，帮助您在AI时代赢得搜索优势
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const colors = colorMap[service.color]
            const Icon = service.icon
            
            return (
              <Link
                key={service.title}
                href={service.link}
                className={`group relative bg-white rounded-2xl border border-gray-100 p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Icon */}
                <div 
                  className={`w-14 h-14 rounded-xl ${colors.light} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1`}
                >
                  <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-brand-gray mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-gray-light text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <div className={`flex items-center gap-2 ${colors.text} font-medium text-sm`}>
                  <span>了解详情</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-2" />
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
              </Link>
            )
          })}
        </div>
      </div>

      {/* ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": service.title,
              "description": service.description,
              "url": `https://quso.ai${service.link}`
            }))
          })
        }}
      />
    </section>
  )
}
