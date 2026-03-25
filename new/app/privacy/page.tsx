import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Shield, Lock, Eye, Database, Mail } from 'lucide-react'

const sections = [
  {
    icon: Eye,
    title: '信息收集',
    content: `
      <p>我们可能收集以下类型的信息：</p>
      <ul class="list-disc list-inside space-y-2 mt-2">
        <li><strong>联系信息</strong>：姓名、公司名称、电子邮箱、电话号码等</li>
        <li><strong>业务信息</strong>：公司规模、行业、业务需求等</li>
        <li><strong>使用数据</strong>：网站访问记录、功能使用情况等</li>
        <li><strong>技术信息</strong>：IP地址、浏览器类型、设备信息等</li>
      </ul>
    `,
  },
  {
    icon: Database,
    title: '信息使用',
    content: `
      <p>我们使用收集的信息用于：</p>
      <ul class="list-disc list-inside space-y-2 mt-2">
        <li>提供和优化我们的GEO服务</li>
        <li>回应您的咨询和需求</li>
        <li>发送服务更新和重要通知</li>
        <li>改进网站功能和用户体验</li>
        <li>进行数据分析和市场研究</li>
      </ul>
    `,
  },
  {
    icon: Lock,
    title: '信息保护',
    content: `
      <p>我们采取以下措施保护您的信息安全：</p>
      <ul class="list-disc list-inside space-y-2 mt-2">
        <li>使用加密技术保护数据传输</li>
        <li>实施严格的访问控制</li>
        <li>定期进行安全审计</li>
        <li>对员工进行数据安全培训</li>
        <li>与第三方服务商签署保密协议</li>
      </ul>
    `,
  },
  {
    icon: Shield,
    title: '信息共享',
    content: `
      <p>我们承诺：</p>
      <ul class="list-disc list-inside space-y-2 mt-2">
        <li>不会出售您的个人信息</li>
        <li>仅在必要情况下与合作伙伴共享信息</li>
        <li>要求合作伙伴遵守同等的数据保护标准</li>
        <li>在法律要求时配合相关部门</li>
      </ul>
    `,
  },
]

export default function PrivacyPage() {
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
                隐私政策
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gray mb-6">
                隐私保护
                <span className="gradient-text block mt-2">政策声明</span>
              </h1>
              <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
                我们重视您的隐私，承诺保护您的个人信息安全
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-16">
                <p className="text-brand-gray-light leading-relaxed">
                  趣搜科技（以下简称&quot;我们&quot;）深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。
                  我们致力于维持您对我们的信任，恪守以下原则保护您的个人信息：权责一致原则、目的明确原则、
                  选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。
                  同时，我们承诺，我们将按业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。
                </p>
                <p className="text-brand-gray-light leading-relaxed">
                  本政策适用于趣搜科技提供的所有产品和服务。请在使用我们的服务前，仔细阅读并了解本隐私政策。
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <div key={section.title} className="bg-brand-bg rounded-2xl p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-xl font-bold text-brand-gray mb-4">{section.title}</h2>
                          <div 
                            className="prose prose-gray max-w-none text-brand-gray-light"
                            dangerouslySetInnerHTML={{ __html: section.content }}
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Contact */}
              <div className="mt-16 bg-brand-gray rounded-2xl p-8 text-white">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-4">联系我们</h2>
                    <p className="text-white/70 mb-4">
                      如果您对本隐私政策有任何疑问、意见或建议，请通过以下方式与我们联系：
                    </p>
                    <ul className="text-white/70 space-y-2">
                      <li>电子邮箱：contact@quso.ai</li>
                      <li>联系电话：400-xxx-xxxx</li>
                      <li>公司地址：广州市海珠区琶洲欧派国际广场1415</li>
                    </ul>
                    <p className="text-white/70 mt-4">
                      我们将在收到您的反馈后15个工作日内予以回复。
                    </p>
                  </div>
                </div>
              </div>

              {/* Update Date */}
              <div className="mt-12 text-center text-brand-gray-light">
                <p>本隐私政策最后更新日期：2026年1月1日</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
