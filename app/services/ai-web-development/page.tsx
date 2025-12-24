"use client"

import { useEffect, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StardustButton } from "@/components/stardust-button"
import { CalModal } from "@/components/cal-modal"
import {
  Globe,
  Zap,
  Brain,
  Layers,
  Database,
  LineChart,
  CheckCircle2,
  ArrowRight,
  ShoppingBag,
  GraduationCap,
  Heart,
  Newspaper,
} from "lucide-react"

export default function AIWebDevelopmentPage() {
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
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <span className="animate-on-scroll opacity-0 text-xs tracking-widest text-primary uppercase">
                AI-Powered Web Development
              </span>
            </div>
            <h1
              className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              Build <span className="text-primary">Intelligent Web Experiences</span> That Adapt
            </h1>
            <p
              className="animate-on-scroll opacity-0 text-lg text-muted-foreground max-w-3xl leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Create websites and applications that learn from user behavior, personalize experiences in real-time, and
              continuously optimize for maximum engagement and conversions.
            </p>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-20 px-4 bg-card/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight mb-8">
              What is AI-Powered Web Development?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI-powered web development integrates machine learning and artificial intelligence directly into your
                  website or application, creating experiences that adapt to each user's preferences, behavior, and
                  needs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  These intelligent systems analyze user interactions in real-time, predict intent, and dynamically
                  adjust content, layout, and functionality to maximize engagement and achieve your business goals.
                </p>
              </div>
              <div
                className="animate-on-scroll opacity-0 glass-card rounded-2xl p-8"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-xl font-light tracking-tight mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "45% higher engagement rates",
                    "2.5x conversion improvement",
                    "Personalized user journeys",
                    "Real-time optimization",
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
                  icon: Brain,
                  title: "User Behavior Analysis",
                  description: "AI tracks interactions, preferences, and patterns across your platform.",
                },
                {
                  step: "02",
                  icon: Zap,
                  title: "Real-Time Personalization",
                  description: "Content, layout, and features adapt instantly to each user's profile.",
                },
                {
                  step: "03",
                  icon: LineChart,
                  title: "Continuous Learning",
                  description: "Systems improve through A/B testing and outcome analysis automatically.",
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
                  icon: Database,
                  title: "Data Architecture Design",
                  description:
                    "We build robust data pipelines that capture user behavior while maintaining privacy and compliance.",
                },
                {
                  icon: Brain,
                  title: "AI Model Integration",
                  description:
                    "Custom machine learning models are trained on your data and seamlessly integrated into your application.",
                },
                {
                  icon: Layers,
                  title: "Scalable Infrastructure",
                  description:
                    "We deploy cloud-native architectures that handle millions of personalized experiences efficiently.",
                },
                {
                  icon: LineChart,
                  title: "Performance Monitoring",
                  description:
                    "Real-time dashboards track AI performance, user satisfaction, and business metrics continuously.",
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
                  icon: ShoppingBag,
                  industry: "E-Commerce",
                  result: "156% increase in conversions",
                  example:
                    "AI-powered product recommendations and dynamic pricing increased average order value by 43% and customer lifetime value by 2.3x.",
                },
                {
                  icon: GraduationCap,
                  industry: "Education",
                  result: "3x course completion rate",
                  example:
                    "Adaptive learning platform personalizes content difficulty and pacing, resulting in 67% higher student satisfaction and 40% better test scores.",
                },
                {
                  icon: Heart,
                  industry: "Healthcare",
                  result: "85% patient engagement increase",
                  example:
                    "Personalized health portal provides tailored content and reminders, reducing missed appointments by 52% and improving treatment adherence.",
                },
                {
                  icon: Newspaper,
                  industry: "Media & Publishing",
                  result: "4.2x time on site",
                  example:
                    "AI content recommendation engine increased pageviews by 180%, ad revenue by 95%, and reduced bounce rate from 68% to 23%.",
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
              Ready to Build Intelligent Web Experiences?
            </h2>
            <p
              className="animate-on-scroll opacity-0 text-muted-foreground max-w-xl mx-auto mb-8"
              style={{ animationDelay: "0.1s" }}
            >
              Let's create a website that learns and adapts. Schedule a consultation with our team.
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
