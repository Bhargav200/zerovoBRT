"use client"

import { useEffect, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StardustButton } from "@/components/stardust-button"
import { CalModal } from "@/components/cal-modal"
import {
  Sparkles,
  Brain,
  Code,
  Zap,
  LineChart,
  Database,
  CheckCircle2,
  ArrowRight,
  Package,
  TrendingUp,
  Camera,
  MessageCircle,
} from "lucide-react"

export default function CustomAIPage() {
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
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <span className="animate-on-scroll opacity-0 text-xs tracking-widest text-primary uppercase">
                Custom AI Solutions
              </span>
            </div>
            <h1
              className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              Build <span className="text-primary">Bespoke AI Systems</span> for Your Business
            </h1>
            <p
              className="animate-on-scroll opacity-0 text-lg text-muted-foreground max-w-3xl leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Solve unique business challenges with custom artificial intelligence tailored precisely to your data,
              processes, and strategic goals.
            </p>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-20 px-4 bg-card/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight mb-8">
              What are Custom AI Solutions?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Custom AI solutions are machine learning models and intelligent systems designed specifically for your
                  business. Unlike off-the-shelf tools, these are trained on your data and optimized for your unique
                  requirements.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From computer vision to natural language processing, predictive analytics to recommendation engines—we
                  build AI that gives you competitive advantages and solves problems no generic solution can address.
                </p>
              </div>
              <div
                className="animate-on-scroll opacity-0 glass-card rounded-2xl p-8"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-xl font-light tracking-tight mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Tailored to your exact needs",
                    "Proprietary competitive advantage",
                    "Trained on your data",
                    "Full ownership & control",
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
                  icon: Database,
                  title: "Data Collection & Preparation",
                  description: "We gather, clean, and structure your data for optimal model training.",
                },
                {
                  step: "02",
                  icon: Brain,
                  title: "Model Development & Training",
                  description: "Custom algorithms are designed, trained, and validated on your specific use case.",
                },
                {
                  step: "03",
                  icon: Zap,
                  title: "Deployment & Integration",
                  description: "AI models are deployed into your systems with monitoring and continuous improvement.",
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
                  icon: Brain,
                  title: "Problem Definition & Research",
                  description:
                    "We deeply understand your challenge, explore AI approaches, and design the optimal solution architecture.",
                },
                {
                  icon: Code,
                  title: "Custom Model Development",
                  description:
                    "Our ML engineers build and train models using state-of-the-art algorithms tailored to your requirements.",
                },
                {
                  icon: Zap,
                  title: "Testing & Validation",
                  description:
                    "Rigorous testing ensures models perform accurately, reliably, and meet your business objectives.",
                },
                {
                  icon: LineChart,
                  title: "Ongoing Optimization",
                  description:
                    "We monitor performance, retrain models with new data, and continuously improve accuracy over time.",
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
                  icon: Package,
                  industry: "Logistics",
                  result: "35% cost reduction",
                  example:
                    "Custom route optimization AI reduced fuel costs by $1.8M annually, improved delivery times by 28%, and increased customer satisfaction to 94%.",
                },
                {
                  icon: TrendingUp,
                  industry: "Finance",
                  result: "94% fraud detection accuracy",
                  example:
                    "Custom ML model identifies fraudulent transactions in real-time with 0.3% false positive rate, preventing $12M in losses annually.",
                },
                {
                  icon: Camera,
                  industry: "Manufacturing",
                  result: "99.2% defect detection",
                  example:
                    "Computer vision system inspects 800 products/minute, catching defects human inspectors miss, reducing recalls by 87% and saving $3.5M.",
                },
                {
                  icon: MessageCircle,
                  industry: "Legal Services",
                  result: "10x faster document review",
                  example:
                    "Custom NLP model analyzes contracts in minutes vs. hours, extracting key terms with 97% accuracy and reducing lawyer billable hours by 60%.",
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
              Ready to Build Custom AI for Your Business?
            </h2>
            <p
              className="animate-on-scroll opacity-0 text-muted-foreground max-w-xl mx-auto mb-8"
              style={{ animationDelay: "0.1s" }}
            >
              Let's discuss your unique challenges and design an AI solution that delivers results. Schedule a
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
