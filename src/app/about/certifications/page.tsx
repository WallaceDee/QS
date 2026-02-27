import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "荣誉资质 | 趣搜科技",
  description: "趣搜科技荣誉资质 - 教育部导师团队、行业协会认可、企业资质",
}

const certifications = [
  {
    category: "官方认可",
    items: [
      { title: "教育部首批优秀创新创业导师", issuer: "教育部" },
      { title: "高新技术企业认定", issuer: "广东省科技厅" },
      { title: "广州市科技创新小巨人企业", issuer: "广州市科技局" },
    ],
  },
  {
    category: "行业资质",
    items: [
      { title: "ISO 9001 质量管理体系认证", issuer: "认证机构" },
      { title: "ISO 27001 信息安全管理体系", issuer: "认证机构" },
      { title: "AAA 级信用企业", issuer: "信用评级机构" },
    ],
  },
  {
    category: "知识产权",
    items: [
      { title: "软件著作权 20+ 项", issuer: "国家版权局" },
      { title: "发明专利 5+ 项", issuer: "国家知识产权局" },
      { title: "商标注册 30+ 项", issuer: "国家商标局" },
    ],
  },
]

const partners = [
  { name: "阿里系投资人", type: "投资机构" },
  { name: "铂涛集团", type: "投资机构" },
  { name: "新途资本", type: "投资机构" },
  { name: "36氪", type: "媒体合作伙伴" },
  { name: "人民网", type: "媒体合作伙伴" },
]

export default function CertificationsPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[oklch(0.08_0.02_250)] to-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">荣誉资质</Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              荣誉与资质
            </h1>
            <p className="mt-4 text-xl text-white/80">
              教育部导师团队、行业协会认可、企业资质认证
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.12_0.02_250)]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          {certifications.map((cert) => (
            <div key={cert.category} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-[oklch(0.7_0.22_265)]" />
                <h2 className="text-2xl font-bold text-white">{cert.category}</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {cert.items.map((item) => (
                  <Card key={item.title} className="bg-[oklch(0.15_0.02_250)] border-white/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Shield className="h-4 w-4" />
                        {item.issuer}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.08_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">合作伙伴</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-[oklch(0.15_0.02_250)] rounded-lg px-6 py-3 border border-white/10 flex items-center gap-3"
              >
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div>
                  <div className="font-medium text-white">{partner.name}</div>
                  <div className="text-xs text-white/60">{partner.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[oklch(0.15_0.03_265)] via-[oklch(0.2_0.05_265)] to-[oklch(0.15_0.03_265)]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">权威认证，值得信赖</h2>
          <p className="mt-4 text-white/80">立即获取专业咨询</p>
          <Button variant="gradient" className="mt-6" asChild>
            <Link href="/contact">立即咨询</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
