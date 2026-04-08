import { PrismaClient } from "@prisma/client"
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"

const url = process.env.DATABASE_URL ?? "file:./dev.db"
const adapter = new PrismaBetterSqlite3({ url })
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log("Seeding database...")

  // Clear existing data
  await prisma["case"].deleteMany()
  await prisma.news.deleteMany()

  // Cases
  const cases = [
    {
      name: "小野和子",
      industry: "美妆电商",
      logo: "💄",
      challenge: "品牌在AI搜索中曝光不足，用户获取成本持续上升",
      solution: "通过GEO全案服务，优化品牌数字信源，提升AI引用率",
      results: JSON.stringify(["AI推荐率提升至行业第一", "品牌曝光量增长300%", "用户获取成本降低40%"]),
      color: "pink",
      coverImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    },
    {
      name: "爱藏网",
      industry: "收藏品电商",
      logo: "🏺",
      challenge: "垂直领域专业性强，AI难以准确理解和推荐",
      solution: "构建行业知识库，建立权威数字信源体系",
      results: JSON.stringify(["AI引用率提升250%", "专业问答覆盖率达85%", "品牌信任度显著提升"]),
      color: "amber",
      coverImage: "https://images.unsplash.com/photo-1567427017947-545c5f8d05ad?w=800&q=80",
    },
    {
      name: "北大汇丰商学院",
      industry: "教育培训",
      logo: "🎓",
      challenge: "教育类信息在AI搜索中竞争激烈",
      solution: "E-E-A-T全方位优化，建立教育权威形象",
      results: JSON.stringify(["教育类AI搜索排名Top 3", "咨询量增长180%", "品牌认知度大幅提升"]),
      color: "blue",
      coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    },
    {
      name: "欧普康视",
      industry: "医疗健康",
      logo: "👁️",
      challenge: "医疗信息需要高度可信度，AI审核严格",
      solution: "专业资质认证+权威内容建设",
      results: JSON.stringify(["医疗AI搜索推荐率第一", "专业内容引用率90%+", "患者咨询量增长200%"]),
      color: "green",
      coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
    {
      name: "找法网",
      industry: "法律服务",
      logo: "⚖️",
      challenge: "法律信息专业性强，用户需求精准",
      solution: "法律知识图谱构建+专家背书",
      results: JSON.stringify(["法律AI问答引用率85%", "精准咨询量增长150%", "行业影响力显著提升"]),
      color: "purple",
      coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
    },
    {
      name: "艮业科技",
      industry: "企业服务",
      logo: "🔧",
      challenge: "B2B企业在AI搜索中难以获得曝光",
      solution: "垂直行业信源基建+案例库建设",
      results: JSON.stringify(["B2B AI搜索曝光率提升280%", "销售线索增长220%", "品牌专业形象确立"]),
      color: "indigo",
      coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
  ]

  await prisma["case"].createMany({ data: cases })
  console.log(`Seeded ${cases.length} cases`)

  // News with rich text content
  const newsItems = [
    {
      title: "趣搜科技发布行业首份GEO白皮书，引领AI搜索营销新纪元",
      slug: "geo-whitepaper-2026",
      date: "2026年2月1日",
      category: "公司新闻",
      excerpt: "趣搜科技正式发布《GEO驱动企业营销新增长白皮书》，这是国内GEO行业首份权威研究报告...",
      coverImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
      featured: true,
      content: `<p>2026年2月1日，趣搜科技正式发布《GEO驱动企业营销新增长白皮书》，这是国内GEO（生成式引擎优化）行业首份权威研究报告。白皮书系统阐述了GEO的核心理念、技术方法和应用实践，为企业AI搜索营销提供了全面的指导。</p>

<h2>GEO：AI时代的营销新范式</h2>
<p>随着ChatGPT、文心一言、通义千问等AI大模型的快速普及，用户获取信息的方式正在发生根本性变革。越来越多的用户选择通过AI对话来获取产品推荐、服务信息和专业建议。GEO（生成式引擎优化）应运而生，成为企业在AI时代赢得用户关注的关键策略。</p>
<p>与传统SEO不同，GEO关注的是如何让AI理解和信任品牌，从而在生成回答时主动引用和推荐。这需要企业从内容质量、权威性、可信度等多个维度进行系统优化。</p>

<h2>白皮书核心内容</h2>
<p>《GEO驱动企业营销新增长白皮书》涵盖以下核心内容：</p>
<ul>
  <li><strong>GEO理论基础</strong>：深入解析GEO的定义、原理和发展趋势</li>
  <li><strong>E-E-A-T框架</strong>：详细阐述Experience、Expertise、Authoritativeness、Trustworthiness四维优化方法</li>
  <li><strong>技术实现路径</strong>：介绍GEO智能中台的技术架构和功能模块</li>
  <li><strong>行业应用案例</strong>：分享多个行业的GEO成功实践</li>
  <li><strong>效果评估体系</strong>：建立GEO效果的量化评估指标</li>
</ul>

<h2>趣搜指数：GEO效果评估新标准</h2>
<p>白皮书中首次发布了"趣搜指数"——趣搜科技独创的GEO效果评估体系。该指数从AI曝光率、引用率、排名位置、用户满意度等多个维度综合评估品牌在AI搜索中的表现，为企业提供可量化的优化目标。</p>

<h2>行业影响与展望</h2>
<p>趣搜科技创始人刘马松表示："GEO不是SEO的简单延伸，而是AI时代营销的全新范式。我们希望通过这份白皮书，帮助更多企业理解GEO的价值，掌握GEO的方法，在AI时代赢得竞争优势。"</p>
<p>据悉，趣搜科技将持续投入GEO技术研发和方法论创新，计划每季度发布GEO行业报告，推动GEO行业的规范化发展。</p>

<h2>白皮书下载</h2>
<p>《GEO驱动企业营销新增长白皮书》现已开放免费下载，企业可通过趣搜科技官网或联系客服获取完整版报告。</p>`,
    },
    {
      title: "趣搜科技琶洲运营中心正式开业",
      slug: "pazhou-office-opening",
      date: "2025年8月15日",
      category: "公司新闻",
      excerpt: "趣搜科技位于广州琶洲欧派国际广场的全新运营中心正式投入使用，标志着公司服务能力全面升级...",
      coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      featured: false,
      content: `<p>2025年8月15日，趣搜科技位于广州琶洲欧派国际广场的全新运营中心正式投入使用，标志着公司服务能力全面升级。</p>

<h2>全新升级的服务能力</h2>
<p>琶洲运营中心总面积超过2000平方米，设有客户服务中心、GEO研究院、培训基地等多个功能区域。新中心采用智能化办公系统，将为客户提供更加专业、高效的服务体验。</p>

<h2>战略布局重要一步</h2>
<p>琶洲作为广州人工智能与数字经济试验区的核心区域，汇聚了众多科技企业和创新资源。趣搜科技选择在此设立运营中心，将更好地融入区域创新生态，与上下游企业开展深度合作，共同推动GEO技术的研发与应用。</p>

<h2>展望未来</h2>
<p>趣搜科技CEO表示："琶洲运营中心的开业是公司发展历程中的重要里程碑。我们将以此为起点，持续深耕GEO领域，为更多企业提供优质的生成式引擎优化服务。"</p>`,
    },
    {
      title: "趣搜科技荣获2024广东省代理机构发明专利授权率百强榜",
      slug: "patent-award-2024",
      date: "2024年12月20日",
      category: "荣誉资质",
      excerpt: "凭借在AI营销领域的技术创新，趣搜科技成功入选广东省代理机构发明专利授权率百强榜...",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      featured: false,
      content: `<p>2024年12月20日，广东省知识产权局公布了2024年度代理机构发明专利授权率排行榜，趣搜科技凭借在AI营销领域的技术创新，成功入选百强榜单。</p>

<h2>技术创新驱动发展</h2>
<p>作为国内领先的GEO服务提供商，趣搜科技始终将技术研发作为核心战略。公司拥有一支由多位海归博士牵头的技术团队，在自然语言处理、知识图谱构建、AI内容生成等领域取得了一系列突破性成果。</p>

<h2>专利成果</h2>
<p>截至目前，趣搜科技已累计申请发明专利超过50项，授权率达到行业领先水平。这些专利涵盖了GEO优化的核心算法、智能中台关键技术以及AI内容生成等多个方面。</p>

<h2>行业认可</h2>
<p>此次入选百强榜，是对趣搜科技技术创新能力和专利质量的高度认可。公司将继续加大研发投入，推动更多原创性技术成果落地，为GEO行业的发展贡献力量。</p>`,
    },
    {
      title: "GEO培训课程学员突破6000人",
      slug: "geo-training-6000",
      date: "2024年10月10日",
      category: "业务动态",
      excerpt: "趣搜科技GEO培训课程累计学员突破6000人，成为国内最受欢迎的GEO培训品牌...",
      coverImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
      featured: false,
      content: `<p>2024年10月10日，趣搜科技宣布其GEO培训课程累计学员已突破6000人，成为国内最受欢迎的GEO培训品牌。</p>

<h2>课程体系</h2>
<p>趣搜科技GEO培训课程涵盖从入门到精通的全方位体系，包括：</p>
<ul>
  <li><strong>GEO入门课</strong>：为零基础学员打造，快速掌握GEO基本概念和应用场景</li>
  <li><strong>GEO实战课</strong>：深度讲解GEO实操技能，配合真实案例演练</li>
  <li><strong>GEO高级课</strong>：面向企业高管，探讨GEO战略规划与数字化营销整合</li>
  <li><strong>GEO认证课</strong>：通过认证考试可获得官方GEO从业者资格认证</li>
</ul>

<h2>学员构成</h2>
<p>学员来自互联网、营销、咨询、法律、医疗、教育等多个行业，其中包括众多知名企业的市场负责人和营销总监。</p>

<h2>持续优化</h2>
<p>趣搜科技培训团队根据AI技术发展动态，持续更新课程内容，确保学员学到的都是最前沿的GEO知识和技能。</p>`,
    },
    {
      title: "趣搜科技与多家知名企业达成战略合作",
      slug: "strategic-partnership-2024",
      date: "2024年8月5日",
      category: "合作动态",
      excerpt: "趣搜科技宣布与多家行业领军企业达成战略合作，共同推进GEO技术在垂直行业的应用...",
      coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      featured: false,
      content: `<p>2024年8月5日，趣搜科技宣布与多家行业领军企业达成战略合作，共同推进GEO技术在垂直行业的深度应用。</p>

<h2>合作伙伴</h2>
<p>本次战略合作涵盖电商、教育、法律、医疗等多个行业的头部企业，包括：</p>
<ul>
  <li>国内知名电商平台——共同探索电商领域的GEO营销解决方案</li>
  <li>顶尖商学院——联合开发商业GEO培训课程</li>
  <li>知名律师事务所——打造法律服务行业的数字信源建设标准</li>
  <li>大型医疗集团——推进医疗健康领域的AI搜索优化实践</li>
</ul>

<h2>合作内容</h2>
<p>各方将在技术研发、案例共建、人才培养、品牌联动等多个维度展开深度合作，共同推进行业GEO标准的制定与落地。</p>

<h2>共赢发展</h2>
<p>趣搜科技将充分发挥自身在GEO领域的技术积累和服务经验，与合作伙伴共同探索更多创新应用场景，为企业创造更大的商业价值。</p>`,
    },
  ]

  await prisma.news.createMany({ data: newsItems })
  console.log(`Seeded ${newsItems.length} news items`)

  console.log("Done!")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
