'use client'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ChevronDown, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const faqs = [
  {
    category: 'GEO基础',
    questions: [
      {
        question: '什么是GEO？',
        answer: 'GEO（Generative Engine Optimization，生成式引擎优化）是一种优化策略，旨在帮助企业在AI大模型（如ChatGPT、文心一言等）的搜索结果中获得更好的展示效果。与传统SEO不同，GEO关注的是如何让AI理解和信任品牌，从而在生成回答时主动引用和推荐。',
      },
      {
        question: 'GEO与SEO有什么区别？',
        answer: 'SEO主要优化传统搜索引擎（如百度、Google）的关键词排名，而GEO优化的是AI大模型的理解和推荐。SEO关注网页排名，GEO关注AI对品牌的认知和引用。两者相辅相成，但技术方法和优化重点不同。',
      },
      {
        question: '为什么企业需要GEO？',
        answer: '随着AI大模型的普及，越来越多用户通过AI获取信息和推荐。如果企业不进行GEO优化，可能会在AI时代失去大量潜在客户。GEO帮助企业建立AI信任度，让品牌成为AI推荐的首选。',
      },
    ],
  },
  {
    category: '服务相关',
    questions: [
      {
        question: 'GEO培训适合哪些企业？',
        answer: 'GEO培训适合所有希望在AI时代提升品牌影响力的企业，特别是：有线上营销需求的企业、希望建立行业权威地位的企业、需要培养内部GEO人才的企业、以及想要了解AI搜索趋势的营销从业者。',
      },
      {
        question: 'GEO智能中台如何部署？',
        answer: 'GEO智能中台采用SaaS模式，开箱即用，标准部署周期为2-4周。我们提供专业的部署服务，包括系统配置、数据对接、培训指导等。对于有特殊需求的企业，我们也支持私有化部署。',
      },
      {
        question: '如何验证GEO效果？',
        answer: '趣搜科技提供独家的趣搜指数评估体系，可以从AI曝光率、引用率、排名位置等多个维度量化GEO效果。系统内置的数据监测功能可以实时追踪品牌在主流AI平台的表现。',
      },
    ],
  },
  {
    category: '合作咨询',
    questions: [
      {
        question: '趣搜科技的客户案例有哪些？',
        answer: '趣搜科技已服务超过3000家企业客户，涵盖电商、教育、医疗、法律等多个行业。典型案例包括小野和子、爱藏网、北大汇丰商学院、欧普康视等知名品牌。详细案例可在官网案例页面查看。',
      },
      {
        question: 'GEO服务的费用是多少？',
        answer: '趣搜科技提供灵活的服务方案，从培训课程到全案服务，费用根据企业需求和规模而定。我们提供免费的业务诊断和方案建议，欢迎联系我们的顾问获取详细报价。',
      },
      {
        question: '如何开始与趣搜科技合作？',
        answer: '您可以通过以下方式开始合作：1）填写官网咨询表单；2）拨打客服热线400-xxx-xxxx；3）发送邮件至contact@quso.ai。我们的专业顾问将在24小时内与您联系，了解需求并提供解决方案。',
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="font-medium text-brand-gray group-hover:text-brand-blue transition-colors pr-8">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-brand-gray-light flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-brand-gray-light leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="py-20 md:py-28 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #F5F7FA 0%, #E6F2FF 100%)' }}
        >
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block text-sm font-medium text-brand-blue tracking-wider uppercase mb-4">
                常见问题
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gray mb-6">
                GEO常见问题
                <span className="gradient-text block mt-2">解答</span>
              </h1>
              <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
                快速了解GEO相关问题的答案，如有其他疑问欢迎联系我们
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {faqs.map((category) => (
                  <div key={category.category}>
                    <h2 className="text-xl font-bold text-brand-gray mb-6 flex items-center gap-3">
                      <div className="w-1 h-6 gradient-bg rounded-full" />
                      {category.category}
                    </h2>
                    <div className="bg-brand-bg rounded-2xl p-6">
                      {category.questions.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-gray">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                还有其他问题？
              </h2>
              <p className="text-white/70 mb-8">
                我们的专业团队将为您提供详细解答
              </p>
              <Link href="/contact" className="bg-white text-brand-blue hover:bg-white/90 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                联系客服
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
