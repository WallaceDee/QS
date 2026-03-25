import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ArrowRight, Award, Calendar, Target } from 'lucide-react'
import Link from 'next/link'

const milestones = [
  { year: '2012', event: '核心团队开始数字营销领域探索' },
  { year: '2017', event: '前身公司成立，专注流量战略咨询' },
  { year: '2022', event: '获得TOP Digital创新营销奖' },
  { year: '2024', event: '趣搜科技正式成立，专注GEO服务' },
  { year: '2025', event: '琶洲运营中心开业，服务升级' },
  { year: '2026', event: '发布行业首份GEO白皮书' },
]

const team = [
  {
    name: '刘马松',
    title: '创始人 & CEO',
    description: '13年流量战略背景，曾任多家知名企业营销顾问',
    avatar: '👨‍💼',
  },
  {
    name: '王志毅',
    title: '联合创始人 & CMO',
    description: '信任数据化专家，专注品牌数字化建设',
    avatar: '👨‍💻',
  },
  {
    name: '高业燊',
    title: '技术合伙人 & CTO',
    description: '前阿里/唯品会架构师，AI技术专家',
    avatar: '👨‍🔬',
  },
]

const honors = [
  { year: '2022', title: 'TOP Digital创新营销奖', source: '置顶传媒' },
  { year: '2024', title: '广东商标代理机构确权榜TOP100', source: '帮专知识产权' },
  { year: '2024', title: '广东省代理机构发明专利授权率百强榜', source: '广东省知识产权局' },
  { year: '2025', title: '广州市知识产权项目入选', source: '广州市知识产权局' },
]

export default function AboutPage() {
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
                关于我们
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gray mb-6">
                关于趣搜科技
                <span className="gradient-text block mt-2">数字信源基建的先行者</span>
              </h1>
              <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
                国内领先的GEO（生成式引擎优化）体系构建者，帮助企业构建被AI高频引用的数字信源
              </p>
            </div>
          </div>
        </section>

        {/* Company Intro */}
        <section className="py-16 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-brand-gray mb-6">企业简介</h2>
                  <p className="text-brand-gray-light leading-relaxed mb-6">
                    趣搜科技成立于2024年，是国内领先的GEO（生成式引擎优化）体系构建者。
                    公司前身自2017年开始深耕数字营销领域，积累了丰富的行业经验和技术实力。
                  </p>
                  <p className="text-brand-gray-light leading-relaxed mb-6">
                    我们致力于帮助企业在AI时代构建被高频引用的数字信源，让品牌成为AI推荐的首选。
                    通过自主研发的GEO智能中台和专业的服务团队，我们已服务超过3000家企业客户，
                    培训学员超过6000人。
                  </p>
                  <div className="flex items-center gap-2 text-brand-blue">
                    <Target className="w-5 h-5" />
                    <span className="font-medium">使命：让AI推荐每一个好品牌</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                        <span className="text-5xl font-bold">Q</span>
                      </div>
                      <div className="text-3xl font-bold">趣搜科技</div>
                      <div className="text-white/70 mt-2">QUSO Technology</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-brand-bg">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-brand-gray mb-12 text-center">发展历程</h2>
              
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2" />
                
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div 
                      key={milestone.year}
                      className={`relative flex items-center gap-8 ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="bg-white rounded-xl p-6 shadow-sm inline-block">
                          <div className="flex items-center gap-2 mb-2 md:hidden">
                            <Calendar className="w-4 h-4 text-brand-blue" />
                            <span className="font-bold text-brand-blue">{milestone.year}</span>
                          </div>
                          <span className="hidden md:inline-block font-bold text-brand-blue mb-2">
                            {milestone.year}
                          </span>
                          <p className="text-brand-gray">{milestone.event}</p>
                        </div>
                      </div>
                      
                      <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-brand-blue border-4 border-white md:-translate-x-1/2" />
                      
                      <div className="flex-1 hidden md:block" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-brand-gray mb-4 text-center">核心团队</h2>
              <p className="text-brand-gray-light text-center mb-12">铁三角组合，技术+营销+运营的完美搭配</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {team.map((member) => (
                  <div key={member.name} className="bg-brand-bg rounded-2xl p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl mx-auto mb-6">
                      {member.avatar}
                    </div>
                    <h3 className="text-xl font-bold text-brand-gray mb-1">{member.name}</h3>
                    <div className="text-brand-blue font-medium mb-4">{member.title}</div>
                    <p className="text-brand-gray-light text-sm">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Honors */}
        <section className="py-16 bg-brand-bg">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-brand-gray mb-12 text-center">资质荣誉</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {honors.map((honor, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue-light flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <div className="text-sm text-brand-blue font-medium mb-1">{honor.year}</div>
                      <div className="font-semibold text-brand-gray mb-1">{honor.title}</div>
                      <div className="text-sm text-brand-gray-light">{honor.source}</div>
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
                加入趣搜科技
              </h2>
              <p className="text-white/70 mb-8">
                与我们一起，定义AI时代的数字营销新标准
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-white text-brand-blue hover:bg-white/90 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2">
                  联系我们
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/news" className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium">
                  了解最新动态
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
