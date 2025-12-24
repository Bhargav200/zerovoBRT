"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Our journey with the team was seamless from start to finish. They understood our vision clearly and translated it into a modern, high-performing, and fully responsive website. Delivering such a high-quality experience in just 12 days was truly impressive and reflects their commitment to both speed and excellence.",
    author: "Sachdev mohan gulati",
    role: "CEO, Vagrah Builders Premiere.",
  },
  {
    quote:
      "With Study Orbit, students can access everything they need for academic and career success in one place. The impact has been incredible higher engagement, better outcomes and a much smoother learning experience.",
    author: "Shreya Madhav Reddy ",
    role: "Co-Founder, StudyOrbit",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

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

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="animate-on-scroll opacity-0 inline-block text-xs tracking-widest text-primary uppercase mb-4">
            Testimonials
          </span>
          <h2
            className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Client Success Stories
          </h2>
        </div>

        <div
          className="animate-on-scroll opacity-0 relative glass-card rounded-2xl p-10 md:p-16"
          style={{ animationDelay: "0.2s" }}
        >
          <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/20" />

          <div className="relative min-h-[200px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ${
                  index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90 italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-8">
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
