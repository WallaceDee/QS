import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { MethodologySection } from "@/components/methodology-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TeamSection } from "@/components/team-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <MethodologySection />
      <ServicesGrid />
      <TestimonialsSection />
      <TeamSection />
      <CTASection />
    </div>
  )
}
