"use client"

import { useEffect, useRef } from "react"

export function MissionStatement() {
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
    <section ref={sectionRef} className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-on-scroll opacity-0 glass-card rounded-2xl p-10 md:p-16">
          <span className="inline-block text-xs tracking-widest text-primary uppercase mb-6">Our Mission</span>
          <h2 className="text-2xl md:text-4xl font-light tracking-tight leading-relaxed text-balance">
            We believe in building technology that doesn't just solve today's problems—
            <span className="text-primary"> it anticipates tomorrow's opportunities</span>.
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            At Zerovo Labs, innovation meets reliability. We're committed to delivering future-ready solutions that
            empower businesses to thrive in an ever-evolving digital landscape.
          </p>
        </div>
      </div>
    </section>
  )
}
