import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ShieldCheck } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Zerovo Labs",
  description: "Our commitment to protecting your privacy and data security.",
}

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass mb-6">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Zerovo Labs, we are committed to protecting your privacy and ensuring the security
                of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard
                your data when you use our services or visit our website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Information We Collect</h2>
              <h3 className="text-xl font-light tracking-tight mb-3 mt-6">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and job title</li>
                <li>Project requirements and specifications</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-light tracking-tight mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
                <li>To provide, maintain, and improve our services</li>
                <li>To respond to your inquiries and fulfill your requests</li>
                <li>To send you technical notices, updates, and support messages</li>
                <li>To analyze usage patterns and optimize user experience</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In connection with a business transfer or merger (with prior notice)</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
                <li>Access: Request a copy of the personal data we hold about you</li>
                <li>Correction: Request correction of inaccurate or incomplete data</li>
                <li>Deletion: Request deletion of your personal data (subject to legal obligations)</li>
                <li>Objection: Object to processing of your personal data</li>
                <li>Portability: Request transfer of your data to another service provider</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience and analyze website
                traffic. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                information from children.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-tight mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
