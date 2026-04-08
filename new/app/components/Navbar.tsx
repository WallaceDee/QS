'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { name: '首页', href: '/' },
  { 
    name: '服务', 
    href: '/services',
    children: [
      { name: 'GEO培训教育', href: '/services' },
      { name: 'GEO智能中台', href: '/service-geo-midplatform' },
      { name: '全案营销服务', href: '/services' },
      { name: '垂直行业信源基建', href: '/services' },
    ]
  },
  { name: '技术中心', href: '/technology' },
  { name: '案例', href: '/cases' },
  { name: '资源', href: '/resources' },
  { name: '关于', href: '/about' },
  { name: '新闻', href: '/news' },
  { name: '联系我们', href: '/contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className={`flex items-center gap-2 transition-transform duration-300 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}
          >
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <span className="font-bold text-xl text-brand-gray">
              趣搜科技
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-brand-gray hover:text-brand-blue transition-colors relative group"
                >
                  {link.name}
                  {link.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      activeDropdown === link.name ? 'rotate-180' : ''
                    }`} />
                  )}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-blue transform origin-left transition-transform duration-200 scale-x-0 group-hover:scale-x-100" />
                </Link>

                {/* Dropdown Menu */}
                {link.children && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top">
                    <div className="py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-brand-gray hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              立即开始
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-brand-gray"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-base font-medium rounded-lg text-brand-gray hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-brand-gray-light hover:text-brand-blue transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                href="/contact" 
                className="btn-primary mt-4 mx-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                立即开始
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
