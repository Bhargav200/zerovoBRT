"use client"

import { useEffect, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StardustButton } from "@/components/stardust-button"
import { CalModal } from "@/components/cal-modal"
import {
  Workflow,
  Database,
  Bot,
  LineChart,
  Shield,
  Code,
  CheckCircle2,
  ArrowRight,
  Factory,
  Building2,
  Stethoscope,
  ShoppingCart,
} from "lucide-react"

export default function AIAutomationPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [isCalModalOpen, setIsCalModalOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = pageRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <main ref={pageRef} className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center">
                <Workflow className="w-7 h-7 text-primary" />
              </div>
              <span className="animate-on-scroll opacity-0 text-xs tracking-widest text-primary uppercase">
                AI Automation Systems
              </span>
            </div>
            <h1
              className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              Transform Operations with <span className="text-primary">Intelligent Automation</span>
            </h1>
            <p
              className="animate-on-scroll opacity-0 text-lg text-muted-foreground max-w-3xl leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Streamline your business operations with autonomous workflows that eliminate repetitive tasks, reduce
              costs by up to 60%, and boost efficiency across your entire organization.
            </p>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-20 px-4 bg-card/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight mb-8">
              What is AI Automation?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI Automation Systems use artificial intelligence to handle complex business processes without human
                  intervention. These systems learn from patterns, make intelligent decisions, and continuously optimize
                  their performance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Unlike traditional automation, our AI-powered solutions can handle exceptions, adapt to changing
                  conditions, and improve over time—transforming your operations from reactive to proactive.
                </p>
              </div>
              <div
                className="animate-on-scroll opacity-0 glass-card rounded-2xl p-8"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-xl font-light tracking-tight mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {["60% cost reduction", "99.9% accuracy rate", "24/7 operation", "Instant scalability"].map(
                    (benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  icon: Database,
                  title: "Data Collection",
                  description: "AI systems gather and analyze data from multiple sources in real-time.",
                },
                {
                  step: "02",
                  icon: Bot,
                  title: "Intelligent Processing",
                  description: "Machine learning models make decisions based on patterns and rules.",
                },
                {
                  step: "03",
                  icon: LineChart,
                  title: "Continuous Optimization",
                  description: "Systems learn from outcomes and automatically improve performance.",
                },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="animate-on-scroll opacity-0 glass-card rounded-2xl p-8"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary/30 text-5xl font-light mb-4">{item.step}</div>
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-light tracking-tight mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Make It Work */}
        <section className="py-20 px-4 bg-card/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight mb-12">
              How We Make It Work
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: Workflow,
                  title: "Discovery & Mapping",
                  description:
                    "We analyze your current workflows to identify automation opportunities with highest ROI.",
                },
                {
                  icon: Code,
                  title: "Custom Development",
                  description:
                    "Our team builds tailored AI models trained on your specific business processes and data.",
                },
                {
                  icon: Shield,
                  title: "Seamless Integration",
                  description:
                    "We integrate automation systems with your existing tools and platforms without disruption.",
                },
                {
                  icon: LineChart,
                  title: "Monitoring & Optimization",
                  description: "Continuous performance tracking and refinement ensures maximum efficiency gains.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="animate-on-scroll opacity-0 glass-card rounded-2xl p-8 flex items-start gap-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl glass flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light tracking-tight mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results & Real-Time Examples */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight mb-12">
              Results Across Industries
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Factory,
                  industry: "Manufacturing",
                  result: "65% reduction in quality defects",
                  example:
                    "Predictive maintenance system reduced equipment downtime by 40 hours/month and prevented 12 critical failures.",
                },
                {
                  icon: Building2,
                  industry: "Finance",
                  result: "90% faster document processing",
                  example:
                    "Automated loan processing system handles 10,000+ applications daily with 99.7% accuracy, reducing approval time from 5 days to 2 hours.",
                },
                {
                  icon: Stethoscope,
                  industry: "Healthcare",
                  result: "80% reduction in admin tasks",
                  example:
                    "AI-powered patient intake system processes insurance verification, scheduling, and records in under 3 minutes vs. 45 minutes manually.",
                },
                {
                  icon: ShoppingCart,
                  industry: "E-Commerce",
                  result: "3x increase in order fulfillment",
                  example:
                    "Intelligent inventory management predicted demand spikes, optimized stock levels, and reduced warehouse costs by $2M annually.",
                },
              ].map((item, index) => (
                <div
                  key={item.industry}
                  className="animate-on-scroll opacity-0 glass-card rounded-2xl p-8"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-light tracking-tight">{item.industry}</h3>
                  </div>
                  <div className="text-2xl font-light text-primary mb-4">{item.result}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-card/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight mb-6">
              Ready to Automate Your Operations?
            </h2>
            <p
              className="animate-on-scroll opacity-0 text-muted-foreground max-w-xl mx-auto mb-8"
              style={{ animationDelay: "0.1s" }}
            >
              Let's discuss how AI automation can transform your business. Schedule a consultation with our team.
            </p>
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.2s" }}>
              <StardustButton onClick={() => setIsCalModalOpen(true)}>
                Schedule Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </StardustButton>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <CalModal isOpen={isCalModalOpen} onClose={() => setIsCalModalOpen(false)} />
    </>
  )
}
