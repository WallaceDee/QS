import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "联系我们 | 趣搜科技",
  description: "联系趣搜科技 - 免费AI品牌诊断、预约GEO内训",
}

const contactInfo = [
  { icon: Phone, label: "电话", value: "400-888-8888" },
  { icon: Mail, label: "邮箱", value: "contact@qusou.tech" },
  { icon: MapPin, label: "地址", value: "广州市海珠区琶洲运营中心" },
]

export default function ContactPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              联系我们
            </h1>
            <p className="mt-4 text-xl text-white/80">
              免费 AI 品牌诊断，预约 GEO 内训
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-[oklch(0.15_0.02_250)] border-white/10">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-start gap-4">
                        <div className="rounded-lg bg-[oklch(0.7_0.22_265)]/20 p-3">
                          <info.icon className="h-6 w-6 text-[oklch(0.7_0.22_265)]" />
                        </div>
                        <div>
                          <div className="font-medium text-white">{info.label}</div>
                          <div className="text-white/60 text-sm">{info.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[oklch(0.7_0.22_265)]/20 to-[oklch(0.6_0.2_180)]/20 border-[oklch(0.7_0.22_265)]/30">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-white mb-2">工作时间</h3>
                  <p className="text-white/60 text-sm">周一至周五 9:00-18:00</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
