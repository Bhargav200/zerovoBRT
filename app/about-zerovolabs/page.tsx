import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Zerovo Labs | AI & Custom Software Agency",
  description: "Learn about Zerovo Labs, an AI automation and custom software development agency built to help businesses scale with cutting-edge technology.",
  openGraph: {
    title: "About Zerovo Labs",
    description: "Learn about Zerovo Labs and our mission.",
  }
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-6 py-32 md:py-40">
        <h1 className="text-4xl md:text-5xl font-light mb-8 text-primary">About Zerovo Labs</h1>
        
        <section className="space-y-12 text-lg text-muted-foreground leading-relaxed">
          
          <div>
            <h2 className="text-2xl font-medium text-foreground mb-4">What is Zerovo Labs?</h2>
            <p>
              Zerovo Labs is a premier AI automation and custom software development agency dedicated to helping businesses automate manual workflows and build intelligent, AI-powered digital products. We specialize in transforming complex business challenges into streamlined, automated ecosystems that drive growth and reduce operational friction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium text-foreground mb-4">When Founded</h2>
            <p>
              Zerovo Labs was established to address the growing gap between advanced AI capabilities and practical business implementation. We emerged as a dedicated force for digital transformation, quickly positioning ourselves at the forefront of AI-driven development.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium text-foreground mb-4">The Founder</h2>
            <p>
              Founded by a team of visionary technologists and AI specialists, Zerovo Labs represents a commitment to technical excellence and business scaling. Our leadership combines deep expertise in machine learning, software architecture, and process automation to deliver unparalleled solutions to our partners.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium text-foreground mb-4">Our Services</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>AI Workflows & Automation:</strong> Eliminating manual tasks through intelligent, robust automation pipelines.</li>
              <li><strong>Custom Software Development:</strong> Building scalable, secure, and performant web applications and SaaS platforms.</li>
              <li><strong>Enterprise AI Integration:</strong> Embedding large language models (LLMs) and custom machine learning solutions natively into existing business operations.</li>
              <li><strong>Digital Transformation Consulting:</strong> Guiding organizations through comprehensive modernization strategies.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-medium text-foreground mb-4">Our Mission</h2>
            <p>
              Our mission is to democratize advanced technology for businesses worldwide. We believe that AI automation and custom software shouldn't be a source of operational chaos, but rather the essential catalyst that allows companies to scale smarter, operate faster, and focus on human ingenuity.
            </p>
          </div>

        </section>
      </div>

      <Footer />
    </main>
  )
}
