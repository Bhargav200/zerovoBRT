"use client"

import { useEffect, useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Strategize, Audit & Architect",
    description:
      "We dive deep into understanding your vision, goals, and challenges to create a comprehensive roadmap.",
    image: "/strategy-planning-architecture-blueprints-dark-fut.jpg",
  },
  {
    number: "02",
    title: "Build & Integrate",
    description:
      "We design AI workflows and conversion-focused systems tailored to your operations and no unnecessary complexity with best-in-class development practices.",
    image: "/ai-coding-development-futuristic-dark-neural-netwo.jpg",
  },
  {
    number: "03",
    title: "Deliver & Optimize",
    description: "We launch, test and optimise your project and continuously refine it based on real-world performance and measurable improvements in efficiency and scalability.",
    image: "/rocket-launch-optimization-analytics-dark-futurist.jpg",
  },
]

export function HowWeWork() {
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
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 inline-block text-xs tracking-widest text-primary uppercase mb-4">
            Our Process
          </span>
          <h2
            className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            How We Work
          </h2>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`animate-on-scroll opacity-0 flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <span className="text-6xl font-light text-primary/20">{step.number}</span>
                <h3 className="text-2xl font-light tracking-tight mt-2">{step.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
