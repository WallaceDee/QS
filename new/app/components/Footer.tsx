import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  services: {
    title: '服务',
    links: [
      { name: 'GEO培训教育', href: '/services' },
      { name: 'GEO智能中台', href: '/service-geo-midplatform' },
      { name: '全案营销服务', href: '/services' },
      { name: '垂直行业信源基建', href: '/services' },
    ],
  },
  resources: {
    title: '资源',
    links: [
      { name: '技术博客', href: '/technology' },
      { name: '案例研究', href: '/cases' },
      { name: '白皮书下载', href: '/resources' },
      { name: 'GEO选购指南', href: '/guide' },
    ],
  },
  company: {
    title: '公司',
    links: [
      { name: '关于我们', href: '/about' },
      { name: '新闻动态', href: '/news' },
      { name: '加入我们', href: '/contact' },
      { name: '联系我们', href: '/contact' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-brand-gray text-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center">
                <span className="text-white font-bold text-xl">Q</span>
              </div>
              <span className="font-bold text-2xl">趣搜科技</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              国内领先的GEO（生成式引擎优化）体系构建者，帮助企业构建被AI高频引用的数字信源。
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-blue" />
                <span>广州市海珠区琶洲欧派国际广场1415</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-brand-blue" />
                <span>400-xxx-xxxx</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-brand-blue" />
                <span>contact@quso.ai</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-brand-blue transition-colors duration-200 inline-flex items-center group"
                    >
                      <span className="transform transition-transform duration-200 group-hover:translate-x-1">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 趣搜科技. 保留所有权利.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-brand-blue text-sm transition-colors">
              隐私政策
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-brand-blue text-sm transition-colors">
              服务条款
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-brand-blue text-sm transition-colors">
              网站地图
            </Link>
          </div>
        </div>
      </div>

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "趣搜科技",
            "alternateName": "QUSO Technology",
            "url": "https://quso.ai",
            "description": "国内领先的GEO（生成式引擎优化）体系构建者，帮助企业构建被AI高频引用的数字信源。",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "琶洲欧派国际广场1415",
              "addressLocality": "广州市海珠区",
              "addressCountry": "CN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+86-400-xxx-xxxx",
              "contactType": "customer service",
              "email": "contact@quso.ai"
            },
            "foundingDate": "2024",
          })
        }}
      />
    </footer>
  )
}
