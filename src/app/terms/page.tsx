import type { Metadata } from 'next'
import Link from 'next/link'
import { business, getFullAddress } from '@/data/business'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: `Terms and Conditions | ${business.name}`,
  description: `Terms and Conditions for ${business.name}. Please read these Terms carefully before using our website, chat widget, SMS, or hiring our painting and remodeling services.`,
  alternates: { canonical: `${business.url}/terms` },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'May 4, 2026'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-[124px] bg-white">
        <section className="bg-gradient-to-br from-secondary via-secondary to-secondary/90 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms and Conditions</h1>
            <p className="text-gray-300">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-800 leading-relaxed">
          <p className="mb-6">Please read these Terms and Conditions carefully before using Our Service.</p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Interpretation and Definitions</h2>
          <h3 className="text-xl font-semibold text-secondary mt-6 mb-3">Interpretation</h3>
          <p className="mb-4">
            The words with capitalized initials have meanings defined under the following conditions. These definitions
            shall apply whether they appear in singular or plural.
          </p>
          <h3 className="text-xl font-semibold text-secondary mt-6 mb-3">Definitions</h3>
          <p className="mb-3">For the purposes of these Terms and Conditions:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party.</li>
            <li><strong>Country</strong> refers to: {business.address.stateFullName}, United States.</li>
            <li><strong>Company</strong> (referred to as either &ldquo;the Company,&rdquo; &ldquo;We,&rdquo; &ldquo;Us,&rdquo; or &ldquo;Our&rdquo; in this Agreement) refers to <strong>{business.legalName}</strong>, located at {getFullAddress()}, United States.</li>
            <li><strong>Device</strong> means any device that can access the Service such as a computer, cellphone, or digital tablet.</li>
            <li><strong>Service</strong> refers to the Website (ampainterinc.com), the chat widget, SMS messaging, email correspondence, and the painting, remodeling, drywall, deck staining, and general contracting services provided by the Company.</li>
            <li><strong>Terms and Conditions</strong> (also referred to as &ldquo;Terms&rdquo;) mean these Terms and Conditions that form the entire agreement between You and the Company.</li>
            <li><strong>Third-party Social Media Service</strong> means any third-party services or content linked or integrated with the Service.</li>
            <li><strong>Website</strong> refers to <em>ampainterinc.com</em> and all subdomains.</li>
            <li><strong>You</strong> means the individual accessing or using the Service, or the legal entity on behalf of which such individual is acting.</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Acknowledgment</h2>
          <p className="mb-4">
            These are the Terms and Conditions governing the use of this Service. By accessing or using the Service, You
            agree to be bound by these Terms. If You disagree with any part, You may not access the Service.
          </p>
          <p className="mb-4">
            You must be over 18 to use the Service. Your access is also subject to our{' '}
            <Link href="/privacy" className="text-primary underline">Privacy Policy</Link>.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">SMS / Text Messaging Terms</h2>
          <p className="mb-3">
            If You provide your mobile phone number to {business.legalName} and consent to receive SMS messages, You agree
            to the following:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>You may receive SMS related to your project (estimates, scheduling, updates) from <strong>{business.phone}</strong>.</li>
            <li>Message frequency varies. Typical volume is a few messages per week during an active project.</li>
            <li>Standard message and data rates from your carrier may apply.</li>
            <li>Reply <strong>STOP</strong> to opt out at any time. Reply <strong>HELP</strong> for assistance.</li>
            <li>Your mobile information will not be shared with third parties for marketing purposes.</li>
          </ul>
          <p className="mb-4">
            Full SMS terms are described in our <Link href="/privacy" className="text-primary underline">Privacy Policy</Link>{' '}
            and <Link href="/sms-terms" className="text-primary underline">SMS Terms &amp; Opt-In Methods</Link>.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Estimates and Project Work</h2>
          <p className="mb-4">
            Free estimates provided by A&amp;M Painter are non-binding until a written contract is signed by both parties.
            Final pricing, scope, and schedule are set by the signed contract for each project. Photographs and project
            descriptions on this Website represent completed work and do not constitute a guarantee that your project will
            produce identical results.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Links to Other Websites</h2>
          <p className="mb-4">
            Our Service may contain links to third-party websites. We are not responsible for the content, privacy policies,
            or practices of those websites. Please review their terms independently.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Termination</h2>
          <p className="mb-4">
            We may terminate or suspend Your access immediately without notice if You breach these Terms. Upon termination,
            Your right to use the Service ends immediately.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Limitation of Liability</h2>
          <p className="mb-4">
            Our liability is limited to the amount You paid through the Service, or $100 if no purchase was made. We are
            not liable for indirect, incidental, or consequential damages unless required by law.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">&ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; Disclaimer</h2>
          <p className="mb-4">
            Our Service is provided &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; without warranties of any kind, whether
            express or implied. This disclaimer applies to the Website and its content, not to construction or painting
            work performed under a signed contract, which is governed by the warranty terms of that contract.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Governing Law</h2>
          <p className="mb-4">
            These Terms are governed by the laws of the State of {business.address.stateFullName}, United States, without
            regard to conflict of laws principles.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Dispute Resolution</h2>
          <p className="mb-4">
            Before pursuing formal legal action, You agree to attempt to resolve any disputes informally by contacting Us
            first at the contact information below. We will work in good faith to resolve issues quickly.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">United States Legal Compliance</h2>
          <p className="mb-4">
            You warrant that You are not located in a country under a U.S. embargo or listed on any U.S. government list
            of prohibited parties.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Severability and Waiver</h2>
          <p className="mb-4">
            If any part of these Terms is held invalid, the rest remain enforceable. A failure to enforce any provision
            does not waive Our right to enforce it later.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Changes to These Terms and Conditions</h2>
          <p className="mb-4">
            We may update these Terms at any time. We will notify users of material changes at least 30 days in advance by
            posting the updated Terms on this page. Continued use of the Service after changes constitutes acceptance.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Contact Us</h2>
          <p className="mb-3">If you have any questions about these Terms and Conditions, you can contact us:</p>
          <ul className="list-none pl-0 space-y-2 mb-6">
            <li>📧 <strong>Email:</strong> <a href={`mailto:${business.email}`} className="text-primary underline">{business.email}</a></li>
            <li>📞 <strong>Phone:</strong> <a href={`tel:${business.phoneRaw}`} className="text-primary underline">{business.phone}</a></li>
            <li>📍 <strong>Address:</strong> {business.legalName}, {getFullAddress()}, United States</li>
          </ul>

          <div className="mt-10 p-6 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
            <p className="font-semibold mb-1">{business.legalName}</p>
            <p>{getFullAddress()}</p>
            <p>Local Phone: {business.phone}</p>
            <p>Email: {business.email}</p>
            <p>Website: ampainterinc.com</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
