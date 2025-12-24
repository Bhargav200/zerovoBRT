"use client"

import { useEffect, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StardustButton } from "@/components/stardust-button"
import { CalModal } from "@/components/cal-modal"
import {
  Network,
  GitBranch,
  Brain,
  LineChart,
  Puzzle,
  Shield,
  CheckCircle2,
  ArrowRight,
  Wallet,
  Plane,
  Building,
  Phone,
} from "lucide-react"

export default function AIOrchestrationPage() {
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
                <Network className="w-7 h-7 text-primary" />
              </div>
              <span className="animate-on-scroll opacity-0 text-xs tracking-widest text-primary uppercase">
                AI Orchestration
              </span>
            </div>
            <h1
              className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              Coordinate <span className="text-primary">Multiple AI Systems</span> Seamlessly
            </h1>
            <p
              className="animate-on-scroll opacity-0 text-lg text-muted-foreground max-w-3xl leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Unite diverse AI models, tools, and services into a single intelligent ecosystem that delivers unified
              business solutions greater than the sum of their parts.
            </p>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-20 px-4 bg-card/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight mb-8">
              What is AI Orchestration?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI Orchestration is the strategic coordination of multiple AI systems, models, and services to work
                  together as a unified solution. It involves managing workflows, data flow, decision routing, and
                  performance optimization across your AI infrastructure.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Modern businesses use multiple AI tools—chatbots, analytics, computer vision, NLP models. AI
                  Orchestration ensures these systems communicate effectively, share context, and deliver cohesive
                  experiences to your users and operations.
                </p>
              </div>
              <div
                className="animate-on-scroll opacity-0 glass-card rounded-2xl p-8"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-xl font-light tracking-tight mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Unified AI ecosystem",
                    "Reduced complexity & costs",
                    "Better decision accuracy",
                    "Faster deployment times",
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
                  icon: Network,
                  title: "Model Integration",
                  description: "Connect diverse AI systems through standardized APIs and data pipelines.",
                },
                {
                  step: "02",
                  icon: GitBranch,
                  title: "Workflow Automation",
                  description: "Intelligent routing directs tasks to the most appropriate AI model automatically.",
                },
                {
                  step: "03",
                  icon: LineChart,
                  title: "Performance Monitoring",
                  description: "Real-time analytics track each model's performance and optimize resource allocation.",
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
                  icon: Network,
                  title: "AI Infrastructure Audit",
                  description:
                    "We map your current AI systems, identify integration opportunities, and design the optimal orchestration architecture.",
                },
                {
                  icon: Puzzle,
                  title: "API Gateway Development",
                  description:
                    "Build centralized access layer that manages authentication, rate limiting, and routing across all AI services.",
                },
                {
                  icon: Brain,
                  title: "Intelligent Routing Logic",
                  description:
                    "Implement smart decision engines that route requests to optimal models based on context, load, and performance.",
                },
                {
                  icon: Shield,
                  title: "Governance & Compliance",
                  description:
                    "Establish security protocols, data privacy measures, and audit trails across your entire AI ecosystem.",
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
                  icon: Wallet,
                  industry: "Banking",
                  result: "40% faster decision making",
                  example:
                    "Orchestrated 15 AI models for loan processing—fraud detection, credit scoring, document verification—reducing approval time from 3 days to 90 minutes.",
                },
                {
                  icon: Plane,
                  industry: "Travel & Hospitality",
                  result: "3x customer satisfaction",
                  example:
                    "Unified chatbot, recommendation engine, and booking systems. AI orchestration provides personalized travel suggestions with 89% booking conversion rate.",
                },
                {
                  icon: Building,
                  industry: "Real Estate",
                  result: "58% more qualified leads",
                  example:
                    "Combined property valuation AI, market analysis, and lead scoring. Orchestrated system prioritizes high-value prospects automatically, increasing sales by $4.2M.",
                },
                {
                  icon: Phone,
                  industry: "Telecommunications",
                  result: "73% reduction in churn",
                  example:
                    "Integrated sentiment analysis, usage prediction, and offer optimization. Orchestration identifies at-risk customers and deploys retention strategies automatically.",
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
              Ready to Unify Your AI Systems?
            </h2>
            <p
              className="animate-on-scroll opacity-0 text-muted-foreground max-w-xl mx-auto mb-8"
              style={{ animationDelay: "0.1s" }}
            >
              Let's design an AI orchestration strategy that maximizes your technology investments. Schedule a
              consultation.
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
