'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, FileText, Rocket, BarChart3 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: '需求诊断',
    description: '深入了解您的业务目标和现状，制定个性化的GEO策略',
    color: 'blue',
  },
  {
    number: '02',
    icon: FileText,
    title: '方案设计',
    description: '基于诊断结果，设计完整的GEO实施方案和技术架构',
    color: 'green',
  },
  {
    number: '03',
    icon: Rocket,
    title: '执行落地',
    description: '专业团队全程执行，确保每个环节高质量完成',
    color: 'orange',
  },
  {
    number: '04',
    icon: BarChart3,
    title: '效果追踪',
    description: '持续监测和优化，用数据验证GEO投资回报率',
    color: 'purple',
  },
]

const colorMap: Record<string, { bg: string; text: string; light: string }> = {
  blue: { bg: 'bg-brand-blue', text: 'text-brand-blue', light: 'bg-brand-blue-light' },
  green: { bg: 'bg-brand-green', text: 'text-brand-green', light: 'bg-brand-green-light' },
  orange: { bg: 'bg-brand-orange', text: 'text-brand-orange', light: 'bg-brand-orange-light' },
  purple: { bg: 'bg-purple-500', text: 'text-purple-500', light: 'bg-purple-50' },
}

export function ProcessSection() {
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
            服务流程
          </span>
          <h2 
            className={`section-title transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            四步开启您的<span className="gradient-text">GEO之旅</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const colors = colorMap[step.color]
              const Icon = step.icon
              
              return (
                <div
                  key={step.number}
                  className={`relative transition-all duration-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${500 + index * 200}ms` }}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div 
                      className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    {/* Step number tag */}
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors.light} ${colors.text} mb-2`}>
                      步骤 {step.number}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-brand-gray mb-2">
                      {step.title}
                    </h3>
                    <p className="text-brand-gray-light text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="sm:hidden absolute -bottom-4 left-1/2 w-0.5 h-8 bg-gray-200 transform -translate-x-1/2" />
                  )}
                </div>
              )
            })}
          </div>

          {/* Connection Line - Desktop only, below icons */}
          <div className="hidden lg:block relative mt-8">
            <div className="absolute left-[12%] right-[12%] h-0.5 bg-gray-200">
              <div 
                className={`h-full gradient-bg transition-all duration-1500 ${
                  isVisible ? 'w-full' : 'w-0'
                }`}
                style={{ transitionDelay: '500ms' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
