"use client"

import { useEffect, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StardustButton } from "@/components/stardust-button"
import { CalModal } from "@/components/cal-modal"
import {
  LayoutDashboard,
  Layers,
  Database,
  Zap,
  Shield,
  LineChart,
  Code,
  CheckCircle2,
  ArrowRight,
  Users,
  Calendar,
  MessageSquare,
  CreditCard,
} from "lucide-react"

export default function SaaSDevelopmentPage() {
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
                <LayoutDashboard className="w-7 h-7 text-primary" />
              </div>
              <span className="animate-on-scroll opacity-0 text-xs tracking-widest text-primary uppercase">
                SaaS Product Development
              </span>
            </div>
            <h1
              className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              Build <span className="text-primary">Scalable SaaS Platforms</span> for Growth
            </h1>
            <p
              className="animate-on-scroll opacity-0 text-lg text-muted-foreground max-w-3xl leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Launch robust, cloud-native software-as-a-service platforms designed for reliability, security, and
              seamless growth from 10 to 10 million users.
            </p>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-20 px-4 bg-card/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight mb-8">
              What is SaaS Product Development?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  SaaS product development is the end-to-end process of creating cloud-based software applications that
                  customers access through subscription models. These platforms must be secure, scalable, and deliver
                  consistent performance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We build complete SaaS ecosystems including multi-tenant architecture, subscription management, user
                  authentication, analytics, and integrations—everything you need to launch and grow a successful
                  software business.
                </p>
              </div>
              <div
                className="animate-on-scroll opacity-0 glass-card rounded-2xl p-8"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-xl font-light tracking-tight mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "99.99% uptime guarantee",
                    "Scales automatically",
                    "Built-in security & compliance",
                    "Faster time-to-market",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
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
                  icon: Layers,
                  title: "Microservices Architecture",
                  description: "Independent services that scale and deploy separately for maximum flexibility.",
                },
                {
                  step: "02",
                  icon: Database,
                  title: "Multi-Tenant Database",
                  description: "Secure data isolation with shared infrastructure for cost efficiency.",
                },
                {
                  step: "03",
                  icon: Zap,
                  title: "Auto-Scaling Infrastructure",
                  description: "Resources automatically adjust based on demand and usage patterns.",
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
                  icon: Layers,
                  title: "Architecture & Planning",
                  description:
                    "We design scalable system architecture with clear service boundaries, data models, and integration points.",
                },
                {
                  icon: Code,
                  title: "Full-Stack Development",
                  description:
                    "Our team builds frontend, backend, APIs, and databases using modern frameworks and best practices.",
                },
                {
                  icon: Shield,
                  title: "Security Implementation",
                  description:
                    "Enterprise-grade security including encryption, authentication, authorization, and compliance measures.",
                },
                {
                  icon: LineChart,
                  title: "Launch & Growth Support",
                  description:
                    "We provide deployment, monitoring, maintenance, and optimization as your user base grows.",
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
                  icon: Users,
                  industry: "Team Collaboration",
                  result: "50K active users in 6 months",
                  example:
                    "Project management SaaS reached profitability within 8 months, processing 2M tasks/month with 99.97% uptime and $2.4M ARR.",
                },
                {
                  icon: Calendar,
                  industry: "Scheduling Software",
                  result: "1M+ bookings processed",
                  example:
                    "AI-powered scheduling platform handles 45K daily appointments across 850 businesses with automated reminders reducing no-shows by 68%.",
                },
                {
                  icon: MessageSquare,
                  industry: "Customer Support",
                  result: "82% automation rate",
                  example:
                    "AI support platform resolves 180K tickets/month automatically, reducing response time from 4 hours to 2 minutes and saving $450K/year.",
                },
                {
                  icon: CreditCard,
                  industry: "Financial Services",
                  result: "$15M transactions monthly",
                  example:
                    "Payment processing SaaS handles 250K transactions daily with 99.99% uptime, PCI compliance, and fraud detection blocking $2M in fraudulent charges.",
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
              Ready to Build Your SaaS Platform?
            </h2>
            <p
              className="animate-on-scroll opacity-0 text-muted-foreground max-w-xl mx-auto mb-8"
              style={{ animationDelay: "0.1s" }}
            >
              Let's turn your software idea into a scalable business. Schedule a consultation with our team.
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
