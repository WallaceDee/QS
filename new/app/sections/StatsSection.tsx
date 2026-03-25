'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 6000, suffix: '+', label: 'GEO课程学员' },
  { value: 3000, suffix: '+', label: '企业服务经验' },
  { value: 2, suffix: '', label: '发明专利' },
  { value: 13, suffix: '+', label: '行业认可' },
]

function AnimatedNumber({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, isVisible])

  return (
    <span>
      {displayValue.toLocaleString()}{suffix}
    </span>
  )
}

export function StatsSection() {
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
    <section 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0066FF 0%, #0052CC 50%, #00A86B 100%)',
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-1/2 -right-1/4 w-full h-full rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }}
        />
        <div 
          className="absolute -bottom-1/2 -left-1/4 w-full h-full rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }}
        />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center transition-all duration-600 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative inline-block">
                <div 
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2"
                >
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 blur-2xl bg-white/20 rounded-full -z-10" />
              </div>
              <div className="text-white/80 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
