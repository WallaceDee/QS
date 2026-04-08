'use client'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: MapPin,
    title: '公司地址',
    content: '广州市海珠区琶洲欧派国际广场1415',
  },
  {
    icon: Phone,
    title: '联系电话',
    content: '400-xxx-xxxx',
  },
  {
    icon: Mail,
    title: '电子邮箱',
    content: 'contact@quso.ai',
  },
  {
    icon: Clock,
    title: '工作时间',
    content: '周一至周五 9:00-18:00',
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get('name') as string,
      phone: (formData.get('phone') as string) || '',
      email: formData.get('email') as string,
      company: formData.get('company') as string || undefined,
      brand: formData.get('brand') as string || undefined,
      website: formData.get('website') as string || undefined,
      message: formData.get('message') as string,
    }

    if (!payload.phone) {
      setError('请填写联系电话')
      setIsSubmitting(false)
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setError(data.error || '提交失败，请稍后重试')
        setIsSubmitting(false)
        return
      }

      if (data.message) {
        setError(data.message)
      }
      setSubmitted(true)
    } catch {
      setError('网络错误，请检查网络连接后重试')
    } finally {
      setIsSubmitting(false)
    }
  }

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
                联系我们
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gray mb-6">
                与GEO专家
                <span className="gradient-text block mt-2">取得联系</span>
              </h1>
              <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
                无论您有任何GEO相关问题，我们的专业团队都将竭诚为您服务
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold text-brand-gray mb-6">在线咨询</h2>
                  <p className="text-brand-gray-light mb-8">
                    填写以下表单，我们的GEO专家将在24小时内与您联系
                  </p>

                  {submitted ? (
                    <div className="bg-brand-green-light rounded-2xl p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-brand-green flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-brand-gray mb-2">提交成功</h3>
                      <p className="text-brand-gray-light">我们会尽快与您联系</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium text-brand-gray">姓名 *</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="请输入您的姓名"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="block text-sm font-medium text-brand-gray">公司名称</label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            placeholder="请输入公司名称"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-brand-gray">电子邮箱 *</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="请输入邮箱地址"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="block text-sm font-medium text-brand-gray">联系电话 *</label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="请输入联系电话"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="brand" className="block text-sm font-medium text-brand-gray">品牌名称</label>
                          <input
                            id="brand"
                            name="brand"
                            type="text"
                            placeholder="请输入品牌名称"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="website" className="block text-sm font-medium text-brand-gray">官网地址</label>
                          <input
                            id="website"
                            name="website"
                            type="url"
                            placeholder="https://"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-brand-gray">需求描述 *</label>
                        <textarea
                          id="message"
                          name="message"
                          placeholder="请简要描述您的需求或问题"
                          rows={5}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                        />
                      </div>

                      {error && (
                        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="btn-primary w-full gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            提交中...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            提交咨询
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>

                {/* Contact Info */}
                <div>
                  <h2 className="text-2xl font-bold text-brand-gray mb-6">联系方式</h2>
                  <p className="text-brand-gray-light mb-8">
                    您也可以通过以下方式直接联系我们
                  </p>

                  <div className="space-y-6">
                    {contactInfo.map((item) => {
                      const Icon = item.icon
                      return (
                        <div key={item.title} className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-brand-blue-light flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-brand-blue" />
                          </div>
                          <div>
                            <div className="font-semibold text-brand-gray mb-1">{item.title}</div>
                            <div className="text-brand-gray-light">{item.content}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* WeChat QR Code Placeholder */}
                  <div className="mt-10 p-6 bg-brand-bg rounded-2xl">
                    <div className="text-center">
                      <div className="text-brand-gray font-medium mb-4">关注官方公众号</div>
                      <div className="w-32 h-32 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl">📱</span>
                      </div>
                      <div className="text-sm text-brand-gray-light">微信公众号：趣搜科技</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
