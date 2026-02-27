import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "趣搜科技 | AI搜索营销技术服务商 - 用AI把企业营销重做一遍",
  description: "趣搜科技是AI搜索营销(GEO)技术服务商，为企业提供数字信源体系建设服务。包括GEO智能中台、GEO培训教育、全案营销服务等。已服务6000+学员，3000+B端企业。",
  keywords: "GEO, AI搜索营销, 数字信源, 企业营销, AI营销中台, ChatGPT营销, DeepSeek营销",
  openGraph: {
    title: "趣搜科技 | AI搜索营销技术服务商",
    description: "用AI把企业营销重做一遍 - 构建可被AI正确理解、高频引用的数字信源体系",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "广州趣搜科技有限公司",
  "alternateName": "趣搜科技",
  "url": "https://www.qusou.tech",
  "logo": "https://www.qusou.tech/logo.png",
  "description": "AI搜索营销技术服务商，GEO体系构建者",
  "foundingDate": "2017",
  "founders": [
    {
      "@type": "Person",
      "name": "刘马松",
      "jobTitle": "创始人 & CEO"
    },
    {
      "@type": "Person",
      "name": "王志毅",
      "jobTitle": "联合创始人 & CMO"
    },
    {
      "@type": "Person",
      "name": "高业燊",
      "jobTitle": "技术合伙人 & CTO"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "广州",
    "addressRegion": "广东",
    "addressCountry": "CN"
  },
  "sameAs": [
    "https://www.qusou.tech"
  ],
  "serviceType": ["GEO智能中台", "GEO培训教育", "全案营销服务"],
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 50,
    "maxValue": 200
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased min-h-screen flex flex-col bg-[oklch(0.08_0.02_250)] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
