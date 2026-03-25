# 趣搜科技 GEO官网 - Next.js SSR版本

这是趣搜科技官网的服务端渲染（SSR）版本，使用Next.js 14 + TypeScript + Tailwind CSS构建。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **渲染模式**: SSR (服务端渲染)

## 项目结构

```
quso-ssr/
├── app/                    # Next.js App Router
│   ├── components/         # 共享组件
│   │   ├── Navbar.tsx      # 导航栏
│   │   └── Footer.tsx      # 页脚
│   ├── sections/           # 首页区块组件
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── BlogSection.tsx
│   │   └── CTASection.tsx
│   ├── page.tsx            # 首页
│   ├── layout.tsx          # 根布局
│   ├── globals.css         # 全局样式
│   ├── services/           # 服务列表页
│   ├── service-geo-midplatform/  # GEO智能中台详情页
│   ├── technology/         # 技术中心
│   ├── technology/eeat-principle/  # E-E-A-T原则详情页
│   ├── guide/              # 选购指南
│   ├── about/              # 关于我们
│   ├── news/               # 新闻动态
│   ├── news/milestone-2026/  # 新闻详情页
│   ├── contact/            # 联系我们
│   ├── faq/                # 常见问题
│   ├── cases/              # 标杆案例
│   ├── resources/          # 资源中心
│   ├── privacy/            # 隐私政策
│   └── sitemap/            # 网站地图
├── public/                 # 静态资源
│   ├── sitemap.xml         # 网站地图
│   └── robots.txt          # 搜索引擎配置
├── next.config.js          # Next.js配置
├── tailwind.config.ts      # Tailwind配置
├── tsconfig.json           # TypeScript配置
└── package.json            # 依赖配置
```

## 页面列表

- `/` - 首页
- `/services` - 服务列表页
- `/service-geo-midplatform` - GEO智能中台详情页
- `/technology` - 技术中心
- `/technology/eeat-principle` - E-E-A-T原则详解
- `/guide` - GEO选购指南
- `/about` - 关于我们
- `/news` - 新闻动态
- `/news/milestone-2026` - 新闻详情页
- `/contact` - 联系我们
- `/faq` - 常见问题
- `/cases` - 标杆案例
- `/resources` - 资源中心
- `/privacy` - 隐私政策
- `/sitemap` - 网站地图

## 安装和运行

### 1. 安装依赖

```bash
cd quso-ssr
npm install
```

### 2. 开发模式运行

```bash
npm run dev
```

访问 http://localhost:3000

### 3. 构建生产版本

```bash
npm run build
```

### 4. 启动生产服务器

```bash
npm start
```

## SEO优化

- 每个页面都有独立的title和meta description
- 完整的sitemap.xml
- robots.txt配置
- JSON-LD结构化数据
- 语义化HTML标签

## 特性

- ✅ 服务端渲染（SSR）
- ✅ 响应式设计
- ✅ 动画效果
- ✅ SEO优化
- ✅ 结构化数据
- ✅ 完整的页面导航

## 品牌色彩

- 主色：#0066FF（科技蓝）
- 辅色：#00A86B（信任绿）
- 背景：#F5F7FA（浅灰）
- 文字：#1F2937（深灰）
