"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "GEO 智能中台",
    href: "/services/platform",
    description: "AI 诊断雷达 + 本地私有化知识库，保障数据安全",
  },
  {
    title: "GEO 培训教育",
    href: "/services/training",
    description: "视频号销量 6000+ 的实战课，企业内训首选",
  },
  {
    title: "全案营销服务",
    href: "/services/marketing",
    description: "定制化解决方案，AI 负面语义压制",
  },
]

const solutions = [
  {
    title: "B2C 新零售",
    href: "/solutions/b2c",
    description: "如小野和子案例，品类词 AI 推荐率第一",
  },
  {
    title: "垂直行业",
    href: "/solutions/vertical",
    description: "如找法网、爱藏网，建立行业权威标准",
  },
  {
    title: "B2B 制造业",
    href: "/solutions/b2b",
    description: "如艮业科技，精准捕获 B 端长尾询盘",
  },
]

const resources = [
  {
    title: "GEO 实战指南",
    href: "/resources/book",
    description: "2026年出版《用AI把营销重做一遍》",
  },
  {
    title: "行业白皮书",
    href: "/resources/whitepaper",
    description: "GEO 驱动企业营销新增长白皮书",
  },
  {
    title: "AI 营销指数",
    href: "/resources/index",
    description: "实时监控品牌词在 AI 中的热度趋势",
  },
]

const about = [
  {
    title: "企业介绍",
    href: "/about/company",
    description: "发展历程与业务矩阵",
  },
  {
    title: "核心团队",
    href: "/about/team",
    description: "铁三角架构 - 战略流量 × 内容信任 × 系统技术",
  },
  {
    title: "荣誉资质",
    href: "/about/certifications",
    description: "教育部导师团队、行业协会认可",
  },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[oklch(0.08_0.02_250)]/90 backdrop-blur-md supports-[backdrop-filter]:bg-[oklch(0.08_0.02_250)]/60 shadow-lg hover:shadow-[0_4px_30px_oklch(0.7_0.22_265_/_15%)] transition-shadow duration-300">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mr-2">
          <img src="/logo.png" alt="趣搜科技" className="h-8 w-32 min-w-[120px] object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={navigationMenuTriggerStyle()}>
                    首页
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link href="/services" onClick={(e) => e.stopPropagation()} className="hover:no-underline text-inherit font-inherit">GEO 核心服务</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
                    {services.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link href="/solutions" onClick={(e) => e.stopPropagation()} className="hover:no-underline text-inherit font-inherit">行业解决方案</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {solutions.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link href="/resources" className="hover:no-underline text-inherit font-inherit [&>svg]:hidden">趣搜智库</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {resources.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link href="/about" onClick={(e) => e.stopPropagation()} className="hover:no-underline text-inherit font-inherit">关于我们</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {about.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={navigationMenuTriggerStyle()}>
                    联系我们
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="gradient" size="sm" asChild>
            <Link href="/contact">免费 AI 品牌诊断</Link>
          </Button>
          <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10" asChild>
            <Link href="/contact">预约 GEO 内训</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[oklch(0.12_0.02_250)] border-white/10 w-[300px] sm:w-[350px]">
            <div className="flex flex-col mt-10 h-[calc(100%-40px)]">
              {/* Nav Links */}
              <nav className="flex flex-col space-y-1 overflow-y-auto flex-1">
                <Link href="/" className="block text-sm text-white/70 px-4 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors">
                  首页
                </Link>
                <div className="pt-2">
                  <Link href="/services" className="block text-sm font-medium text-white px-4 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors">
                    GEO 核心服务
                  </Link>
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-sm text-white/70 px-4 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                
                <div className="pt-2">
                  <Link href="/solutions" className="block text-sm font-medium text-white px-4 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors">
                    行业解决方案
                  </Link>
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-sm text-white/70 px-4 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                
                <div className="pt-2">
                  <Link href="/resources" className="block text-sm font-medium text-white px-4 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors">
                    趣搜智库
                  </Link>
                  {resources.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-sm text-white/70 px-4 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                
                <div className="pt-2">
                  <Link href="/about" className="block text-sm font-medium text-white px-4 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors">
                    关于我们
                  </Link>
                  {about.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-sm text-white/70 px-4 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                
                <Link href="/contact" className="block text-sm text-white/70 px-4 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors mt-2">
                  联系我们
                </Link>
              </nav>
             
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
