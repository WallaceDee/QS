'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, MessageCircle } from 'lucide-react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { value: '6,000+', label: 'GEO课程学员' },
    { value: '3,000+', label: '企业服务经验' },
    { value: '2', label: '发明专利' },
  ]

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, #F5F7FA 0%, #E6F2FF 50%, #E6F7F1 100%)',
      }}
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'linear-gradient(135deg, #0066FF, #00A86B)', animation: 'float 6s ease-in-out infinite' }}
        />
        <div 
          className="absolute top-1/3 -left-32 w-64 h-64 rounded-full opacity-15"
          style={{ background: 'linear-gradient(135deg, #00A86B, #0066FF)', animation: 'float 8s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full opacity-10"
          style={{ background: 'linear-gradient(135deg, #8B5CF6, #0066FF)', animation: 'float 6s ease-in-out infinite 2s' }}
        />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Label */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-sm font-medium text-brand-gray">AI驱动的GEO解决方案</span>
            </div>

            {/* Title */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-gray leading-tight mb-6 transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              企业在AI时代的
              <span className="gradient-text block mt-2">数字信源基建商</span>
            </h1>

            {/* Description */}
            <p 
              className={`text-lg text-brand-gray-light leading-relaxed mb-10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1100ms' }}
            >
              国内领先的GEO（生成式引擎优化）体系构建者，帮您构建被AI高频引用的数字信源，让品牌成为AI推荐的首选。
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-wrap gap-4 mb-12 transition-all duration-600 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '1300ms' }}
            >
              <Link href="/resources" className="btn-primary gap-2 text-base px-8 py-4">
                <BookOpen className="w-5 h-5" />
                获取GEO白皮书
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="btn-secondary gap-2 text-base px-8 py-4">
                <MessageCircle className="w-5 h-5" />
                咨询专家
              </Link>
            </div>

            {/* Stats */}
            <div 
              className={`flex flex-wrap gap-8 transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1600ms' }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="group cursor-default">
                  <div className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-brand-gray-light mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div 
            className={`relative hidden lg:block transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{ transitionDelay: '1800ms' }}
          >
            <div className="relative">
              {/* Main Visual Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl" />
                
                {/* Content Preview */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                      <span className="text-white font-bold">Q</span>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-gray">趣搜GEO智能中台</div>
                      <div className="text-sm text-brand-gray-light">企业级AI营销托管系统</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-brand-gray-light">AI诊断雷达</span>
                      <span className="text-sm font-medium text-brand-green">运行中</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 gradient-bg rounded-full animate-pulse" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-brand-gray-light">趣搜指数</span>
                      <span className="text-sm font-medium text-brand-blue">92.5</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 gradient-bg rounded-full" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-brand-blue-light rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-brand-blue">+156%</div>
                      <div className="text-xs text-brand-gray-light">曝光提升</div>
                    </div>
                    <div className="bg-brand-green-light rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-brand-green">Top 3</div>
                      <div className="text-xs text-brand-gray-light">AI排名</div>
                    </div>
                    <div className="bg-brand-orange-light rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-brand-orange">98%</div>
                      <div className="text-xs text-brand-gray-light">客户满意</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "趣搜科技",
            "url": "https://quso.ai",
            "description": "国内领先的GEO（生成式引擎优化）体系构建者，帮助企业构建被AI高频引用的数字信源。",
          })
        }}
      />
    </section>
  )
}
