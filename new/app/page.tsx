import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HeroSection } from './sections/HeroSection'
import { ServicesSection } from './sections/ServicesSection'
import { AboutSection } from './sections/AboutSection'
import { StatsSection } from './sections/StatsSection'
import { ProcessSection } from './sections/ProcessSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { BlogSection } from './sections/BlogSection'
import { CTASection } from './sections/CTASection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <StatsSection />
        <ProcessSection />
        <TestimonialsSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
