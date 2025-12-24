"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What are your pricing models?",
    answer:
      "We offer flexible pricing based on project scope—fixed-price for defined projects, retainer models for ongoing partnerships, and milestone-based payments for larger initiatives. Contact us for a custom quote.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary based on complexity. A simple AI integration might take 2-4 weeks, while a full SaaS platform could take 3-6 months. We provide detailed timelines during our discovery phase.",
  },
  {
    question: "Can you integrate AI into our existing systems?",
    answer:
      "Absolutely. We specialize in seamlessly integrating AI capabilities into existing infrastructure, whether it's adding intelligent automation to your CRM or enhancing your e-commerce platform with personalized recommendations.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with cutting-edge AI/ML frameworks including TensorFlow, PyTorch, and OpenAI. For web development, we use modern stacks like Next.js, React, and Node.js, along with cloud platforms like AWS, GCP, and Vercel.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive post-launch support packages including monitoring, updates, performance optimization, and continuous improvement based on user feedback and analytics.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="animate-on-scroll opacity-0 inline-block text-xs tracking-widest text-primary uppercase mb-4">
            FAQ
          </span>
          <h2
            className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 glass-card rounded-xl overflow-hidden"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-light text-foreground">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-primary transition-transform flex-shrink-0 ml-4",
                    openIndex === index && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0",
                )}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
