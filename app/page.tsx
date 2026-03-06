import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { WhoThisIsFor } from "@/components/home/who-this-is-for"
import { ServicesOverview } from "@/components/home/services-overview"
import { HowWeWork } from "@/components/home/how-we-work"
import { Testimonials } from "@/components/home/testimonials"
import { CTASection } from "@/components/home/cta-section"
import { JsonLd } from "@/components/json-ld"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is Zerovo Labs?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Zerovo Labs is a premium AI-powered digital solutions agency that specializes in AI Web Development, Custom Machine Learning models, and AI business automation. According to client reports, businesses implementing Zerovo Labs systems reduce operational costs by up to 60%.",
              },
            },
            {
              "@type": "Question",
              name: "How does AI automation reduce business costs?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "AI automation handles complex, data-heavy processes without human intervention, ensuring 99.9% accuracy and 24/7 operation. According to industry statistics, businesses leveraging custom AI workflows see a 40-60% reduction in operational spending within the first year.",
              },
            },
          ]
        }}
      />
      <Navigation />
      <HeroSection />
      <WhoThisIsFor />
      <ServicesOverview />
      <HowWeWork />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
