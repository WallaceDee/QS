'use client'

import { useEffect, useRef, useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: '趣搜科技的GEO服务帮助我们的品牌在AI搜索中的曝光率提升了300%。他们的专业团队和先进技术让我们的数字营销效果实现了质的飞跃。',
    author: '张经理',
    title: '某知名电商品牌 市场总监',
    avatar: '👨‍💼',
  },
  {
    quote: '通过趣搜的GEO培训，我们的团队快速掌握了AI搜索优化的核心技能。现在我们的内容在多个AI平台都能获得优质展示。',
    author: '李总监',
    title: '某科技公司 运营总监',
    avatar: '👩‍💻',
  },
  {
    quote: 'GEO智能中台让我们的营销工作实现了自动化，大大提升了效率。趣搜团队的服务专业且响应迅速。',
    author: '王总',
    title: '某制造企业 CEO',
    avatar: '👨‍💼',
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
            客户评价
          </span>
          <h2 
            className={`section-title transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            听听客户<span className="gradient-text">怎么说</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className={`max-w-4xl mx-auto transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="relative bg-brand-bg rounded-3xl p-8 md:p-12">
            {/* Quote Icon */}
            <div 
              className={`absolute -top-6 left-8 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Testimonial Content */}
            <div className="pt-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentIndex 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 absolute inset-0 translate-x-8 pointer-events-none'
                  }`}
                >
                  <p className="text-lg md:text-xl text-brand-gray leading-relaxed mb-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-brand-gray">{testimonial.author}</div>
                      <div className="text-sm text-brand-gray-light">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-brand-blue w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
