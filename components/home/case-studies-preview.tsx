"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    title: "AI-Enhanced E-commerce Platform",
    category: "Web Development",
    image: "/ecommerce-ai-shopping-platform-dark-futuristic-int.jpg",
  },
  {
    title: "Custom AI Chat System",
    category: "Custom AI",
    image: "/ai-chatbot-support-system-dark-futuristic-conversa.jpg",
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "SaaS Development",
    image: "/b2b-analytics-dashboard-dark-futuristic-data-visua.jpg",
  },
]

export function CaseStudiesPreview() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="animate-on-scroll opacity-0 inline-block text-xs tracking-widest text-primary uppercase mb-4">
              Our Work
            </span>
            <h2
              className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight"
              style={{ animationDelay: "0.1s" }}
            >
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="animate-on-scroll opacity-0 text-sm text-primary hover:underline flex items-center gap-1"
            style={{ animationDelay: "0.2s" }}
          >
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <Link
              key={study.title}
              href="/projects"
              className="animate-on-scroll opacity-0 group relative overflow-hidden rounded-2xl"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <img
                src={study.image || "/placeholder.svg"}
                alt={study.title}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs tracking-widest text-primary uppercase">{study.category}</span>
                <h3 className="text-xl font-light tracking-tight mt-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
