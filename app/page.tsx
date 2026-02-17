import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"
import { AnalysisForm } from "@/components/analysis-form"
import { Testimonials } from "@/components/testimonials"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <AnalysisForm />
        <Testimonials />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
