import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '趣搜科技 - GEO生成式引擎优化 | 企业数字信源基建商',
  description: '国内领先的GEO（生成式引擎优化）体系构建者，帮助企业构建被AI高频引用的数字信源。提供GEO培训、智能中台、全案营销服务。',
  keywords: 'GEO,生成式引擎优化,AI搜索营销,数字信源基建,GEO培训,AI信任资产,趣搜科技',
  authors: [{ name: '趣搜科技' }],
  openGraph: {
    title: '趣搜科技 - GEO生成式引擎优化 | 企业数字信源基建商',
    description: '国内领先的GEO（生成式引擎优化）体系构建者，帮助企业构建被AI高频引用的数字信源。',
    url: 'https://quso.ai',
    siteName: '趣搜科技',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
