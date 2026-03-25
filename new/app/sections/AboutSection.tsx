'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const highlights = [
  '国内领先的GEO体系构建者',
  '2项发明专利，3项软件著作权',
  '服务3000+企业客户',
  '6000+学员信赖的培训机构',
]

export function AboutSection() {
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span 
              className={`section-label mb-4 block transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              关于趣搜
            </span>
            
            <h2 
              className={`section-title mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              数字信源基建的
              <span className="gradient-text block mt-2">先行者</span>
            </h2>
            
            <p 
              className={`text-brand-gray-light leading-relaxed mb-8 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              趣搜科技成立于2024年，是国内领先的GEO（生成式引擎优化）体系构建者。我们致力于帮助企业在AI时代构建被高频引用的数字信源，让品牌成为AI推荐的首选。
            </p>

            {/* Highlights */}
            <div 
              className={`space-y-4 mb-10 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <span className="text-brand-gray">{item}</span>
                </div>
              ))}
            </div>

            <div 
              className={`transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <Link href="/about" className="btn-primary gap-2">
                了解更多
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-brand-blue-light to-brand-green-light flex items-center justify-center">
                  {/* Abstract Team Illustration */}
                  <div className="relative w-full h-full p-8">
                    <div className="absolute top-8 left-8 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center" style={{ animation: 'float 6s ease-in-out infinite' }}>
                      <span className="text-3xl">👨‍💼</span>
                    </div>
                    <div className="absolute top-16 right-12 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center" style={{ animation: 'float 8s ease-in-out infinite' }}>
                      <span className="text-2xl">👩‍💻</span>
                    </div>
                    <div className="absolute bottom-20 left-16 w-18 h-18 bg-white rounded-2xl shadow-lg flex items-center justify-center" style={{ animation: 'float 6s ease-in-out infinite 1s' }}>
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div className="absolute bottom-12 right-8 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center" style={{ animation: 'float 8s ease-in-out infinite 2s' }}>
                      <span className="text-4xl">🚀</span>
                    </div>
                    
                    {/* Center Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl text-center">
                        <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-3xl font-bold">Q</span>
                        </div>
                        <div className="text-2xl font-bold text-brand-gray">趣搜科技</div>
                        <div className="text-brand-gray-light mt-2">数字信源基建商</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl" />
              
              {/* Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-lg p-6" style={{ animation: 'float 6s ease-in-out infinite' }}>
                <div className="text-3xl font-bold gradient-text">2017</div>
                <div className="text-sm text-brand-gray-light">前身成立</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
