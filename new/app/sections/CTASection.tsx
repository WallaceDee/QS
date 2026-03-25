'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
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
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-brand-bg">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div 
          className={`relative rounded-3xl overflow-hidden transition-all duration-800 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Background */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0066FF 0%, #00A86B 50%, #0066FF 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 8s linear infinite',
            }}
          />


          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            />
            <div 
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/10"
              style={{ animation: 'float 8s ease-in-out infinite' }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 py-16 md:py-24 px-8 md:px-16 text-center">
            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              准备好让AI推荐您的品牌了吗？
            </h2>
            
            <p 
              className={`text-lg text-white/80 max-w-2xl mx-auto mb-10 transition-all duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              立即联系我们的GEO专家，获取专属的数字信源基建方案
            </p>

            <div 
              className={`transition-all duration-600 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <Link 
                href="/contact" 
                className="bg-white text-brand-blue hover:bg-white/90 px-8 py-4 text-base font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
              >
                立即咨询
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
