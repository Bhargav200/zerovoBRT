"use client"

import { useEffect, useRef } from "react"
import { TrendingUp, RefreshCw, AlertCircle } from "lucide-react"

export function WhoThisIsFor() {
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

  const audiences = [
    {
      icon: TrendingUp,
      title: "Scaling Businesses",
      description: "Companies ready to grow but held back by manual operations and time-consuming follow-ups.",
    },
    {
      icon: RefreshCw,
      title: "Rebranding Companies",
      description: "Organizations upgrading their digital presence or modernizing their websites for the future.",
    },
    {
      icon: AlertCircle,
      title: "Teams Losing Leads",
      description:
        "Businesses losing opportunities due to poor systems, slow response times, or inefficient processes.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block text-xs tracking-widest text-primary uppercase mb-4">Who We Help</span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Who This Is <span className="text-primary">For</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {audiences.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="animate-on-scroll opacity-0 p-8 rounded-lg glass border border-border/50 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        <div
          className="animate-on-scroll opacity-0 text-center text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="leading-relaxed">
            If this sounds like you, <span className="text-primary font-medium">you're in the right place</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
