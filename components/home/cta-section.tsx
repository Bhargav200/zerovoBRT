"use client"

import { useEffect, useRef, useState } from "react"
import { StardustButton } from "@/components/stardust-button"
import { CalModal } from "@/components/cal-modal"

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
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

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section ref={sectionRef} className="py-24 bg-card/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="animate-on-scroll opacity-0 inline-block text-xs tracking-widest text-primary uppercase mb-4">
            Let's Create Together
          </span>
          <h2
            className="animate-on-scroll opacity-0 text-3xl md:text-5xl font-light tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Clarity Before Code. Strategize Before Solutions.
          </h2>
          <p
            className="animate-on-scroll opacity-0 mt-6 text-lg text-muted-foreground max-w-xl mx-auto"
            style={{ animationDelay: "0.2s" }}
          >
            Whether you need AI automation, a custom solution, or a complete digital overhaul—we're here to help.
          </p>
          <div
            className="animate-on-scroll opacity-0 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <StardustButton onClick={() => setIsCalModalOpen(true)}>Book Free Audit</StardustButton>
            <StardustButton onClick={() => setIsCalModalOpen(true)} variant="secondary">
              Schedule a Consultation
            </StardustButton>
          </div>
        </div>
      </section>

      <CalModal isOpen={isCalModalOpen} onClose={() => setIsCalModalOpen(false)} />
    </>
  )
}
