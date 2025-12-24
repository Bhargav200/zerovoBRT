import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileText } from "lucide-react"

export const metadata = {
  title: "Terms of Service | Vagrah AI Agency",
  description: "Terms and conditions for using our AI-powered services.",
}

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing or using Zerovo Labs' services, you agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Services Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Zerovo Labs provides AI-powered digital solutions, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
                <li>AI Automation Systems development and implementation</li>
                <li>AI-Powered Web Development services</li>
                <li>SaaS Product Development and deployment</li>
                <li>Custom AI Solutions tailored to business needs</li>
                <li>AI Orchestration and integration services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">When using our services, you agree to:</p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services in compliance with all applicable laws and regulations</li>
                <li>Not interfere with or disrupt our services or systems</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Intellectual Property Rights</h2>
              <h3 className="text-xl font-light tracking-tight mb-3 mt-6">Our Intellectual Property</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content, features, and functionality of our services, including but not limited to text, graphics,
                logos, and software, are owned by Zerovo Labs and protected by intellectual property laws.
              </p>

              <h3 className="text-xl font-light tracking-tight mb-3 mt-6">Client Intellectual Property</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Upon full payment for custom development services, you retain ownership of the final deliverables as
                specified in your service agreement. We retain the right to use general methodologies, techniques, and
                knowledge gained during the project.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payment terms are established in individual service agreements. Generally:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
                <li>Project-based services require upfront deposits as specified in proposals</li>
                <li>Monthly retainers are billed in advance on the agreed-upon date</li>
                <li>Invoices are payable within 15 days of issuance unless otherwise agreed</li>
                <li>Late payments may incur interest charges and service suspension</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Service Modifications and Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time. We will
                provide reasonable notice for significant changes affecting active projects.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Either party may terminate services according to the terms specified in individual service agreements.
                Termination does not relieve you of payment obligations for services already rendered.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Warranties and Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While we strive to provide high-quality services, we provide them "as is" without warranties of any
                kind, express or implied. We do not guarantee:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
                <li>Uninterrupted or error-free service operation</li>
                <li>Specific results or outcomes from AI implementations</li>
                <li>Compatibility with all third-party systems</li>
                <li>That our services will meet all your business requirements</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the maximum extent permitted by law, Zerovo Labs shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including lost profits, revenue, data, or business
                opportunities arising from your use of our services.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our total liability for any claims arising from our services shall not exceed the amount paid by you to
                us in the 12 months preceding the claim.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Both parties agree to maintain confidentiality of proprietary information shared during the course of
                service delivery. This obligation survives termination of services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Any disputes arising from these terms or our services shall be resolved through:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
                <li>Good faith negotiation between parties</li>
                <li>Mediation if negotiation fails</li>
                <li>Binding arbitration if mediation is unsuccessful</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update these Terms of Service from time to time. Continued use of our services after changes
                constitutes acceptance of the updated terms. Material changes will be communicated to active clients.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
