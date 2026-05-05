import type { Metadata } from 'next'
import Link from 'next/link'
import { business, getFullAddress } from '@/data/business'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: `SMS Terms & Opt-In Methods | ${business.name}`,
  description: `SMS Terms & Opt-In Methods for ${business.name}. A2P 10DLC compliance, opt-in/opt-out, message frequency, and how we handle your mobile number.`,
  alternates: { canonical: `${business.url}/sms-terms` },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'May 4, 2026'

export default function SmsTermsPage() {
  return (
    <>
      <Header />
      <main className="pt-[124px] bg-white">
        <section className="bg-gradient-to-br from-secondary via-secondary to-secondary/90 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">SMS Terms &amp; Opt-In Methods</h1>
            <p className="text-gray-300">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-800 leading-relaxed">
          <div className="p-6 bg-primary/5 border-l-4 border-primary rounded mb-8">
            <p className="font-semibold mb-2">
              {business.legalName} does <strong>NOT</strong> sell, rent, share, or transfer your mobile phone number, SMS
              opt-in consent, or any phone-related data to third parties or affiliates for marketing or promotional
              purposes.
            </p>
            <p>Your mobile information stays with A&amp;M Painter. Period.</p>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">1. Who is sending the messages</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Brand:</strong> {business.legalName}</li>
            <li><strong>DBA:</strong> A&amp;M Painter</li>
            <li><strong>Sending phone number:</strong> {business.phone}</li>
            <li><strong>Office address:</strong> {getFullAddress()}</li>
            <li><strong>Customer service email:</strong> {business.email}</li>
            <li><strong>Website:</strong> ampainterinc.com</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">2. How customers opt in to receive SMS</h2>
          <p className="mb-4">
            A&amp;M Painter collects SMS opt-in consent through <strong>three (3) methods</strong>, each listed in detail
            below. Every method requires explicit, active consent — we never auto-enroll a customer based on a phone call
            alone or a purchase.
          </p>

          <h3 className="text-xl font-semibold text-secondary mt-6 mb-3">Method A: Website Chat Widget</h3>
          <p className="mb-3">Verifiable URL: <a href={business.url} className="text-primary underline">{business.url}</a></p>
          <p className="mb-4">
            The chat widget is embedded on every page of ampainterinc.com. When a visitor clicks the widget and starts a
            conversation, the customer is providing express consent to receive SMS replies from A&amp;M Painter at the
            phone number they enter. The first SMS sent automatically includes the TCPA disclosure (frequency, rates,
            STOP/HELP, privacy link).
          </p>
          <blockquote className="p-4 bg-gray-50 border-l-4 border-gray-300 italic mb-4">
            &ldquo;A&amp;M Painter: Hi {'{first_name}'}, thanks for reaching out! Reply STOP to opt out, HELP for help.
            Msg frequency varies, msg &amp; data rates may apply. {business.url}/privacy&rdquo;
          </blockquote>

          <h3 className="text-xl font-semibold text-secondary mt-6 mb-3">Method B: Website Lead Form (Free Estimate Request)</h3>
          <p className="mb-3">Verifiable URL: <a href={`${business.url}/#contact`} className="text-primary underline">{business.url}/#contact</a></p>
          <p className="mb-4">
            Our online estimate-request form on the Contact section collects name, email, and project details. The form
            does NOT collect phone numbers as a default consent mechanism — phone collection happens only via the chat
            widget (method A) or verbal opt-in (method C). This isolation ensures one opt-in source per page on the public
            website.
          </p>
          <blockquote className="p-4 bg-gray-50 border-l-4 border-gray-300 italic mb-4">
            &ldquo;By submitting this form, you agree to our Terms &amp; Conditions and Privacy Policy.&rdquo;
          </blockquote>

          <h3 className="text-xl font-semibold text-secondary mt-6 mb-3">Method C: Verbal Opt-In via Phone</h3>
          <p className="mb-4">
            When a customer calls {business.phone} to discuss a project, our team verbally asks: &ldquo;Would you like
            text-message updates about your estimate and project status from A&amp;M Painter? Reply STOP at any time to
            opt out.&rdquo; If the customer says yes, we record the verbal consent (timestamp + agent name) and add their
            number to the SMS list. The first follow-up SMS includes the TCPA disclosure.
          </p>
          <blockquote className="p-4 bg-gray-50 border-l-4 border-gray-300 italic mb-4">
            Verbal disclosure read by A&amp;M Painter team: &ldquo;A&amp;M Painter would like to send you text-message
            updates about your estimate and project. Message frequency varies. Standard message and data rates may apply.
            Reply STOP at any time to opt out, or HELP for help. Do you consent?&rdquo;
          </blockquote>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">3. What kind of messages we send</h2>
          <p className="mb-3">SMS messages from A&amp;M Painter fall into these categories only:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Estimate confirmation</strong> — confirm walkthrough date and time</li>
            <li><strong>Project scheduling</strong> — crew arrival times, schedule changes</li>
            <li><strong>Service updates</strong> — status of an active project</li>
            <li><strong>Lead-response</strong> — replies to inbound questions sent by the customer</li>
            <li><strong>Occasional service reminders</strong> — seasonal availability (only if customer opted in to marketing)</li>
          </ul>
          <p className="mb-4">
            We do NOT send promotional/marketing SMS without explicit second-step opt-in (separate from the project-related
            opt-in).
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">4. Message frequency</h2>
          <p className="mb-3">Frequency varies based on your project stage. A typical customer receives:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>3–6 messages per week during an active project</li>
            <li>1–2 messages during an open lead/estimate phase</li>
            <li>0 messages once the project is complete (unless you opted in to seasonal updates)</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">5. Cost</h2>
          <p className="mb-4">
            A&amp;M Painter does not charge to send or receive SMS. However, <strong>standard message and data rates from
            your carrier may apply</strong>. Contact your wireless provider for details.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">6. How to opt out</h2>
          <p className="mb-3">You can opt out at any time by:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Replying <strong>STOP</strong> to any SMS we send</li>
            <li>Replying UNSUBSCRIBE, CANCEL, QUIT, END, or OPT OUT (also accepted)</li>
            <li>Calling {business.phone} and asking to be removed</li>
            <li>Emailing {business.email} with subject line &ldquo;UNSUBSCRIBE&rdquo;</li>
          </ul>
          <p className="mb-4">
            You will receive one final confirmation SMS confirming the opt-out, then no further messages until you
            re-opt-in by replying <strong>START</strong> or going through one of the opt-in methods above.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">7. How to get help</h2>
          <p className="mb-3">Reply <strong>HELP</strong> to any SMS, or:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>📞 Call {business.phone}</li>
            <li>📧 Email {business.email}</li>
            <li>🕐 Hours: Monday–Friday {business.hours.weekdays}, Saturday {business.hours.saturday}</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">8. Mobile information &amp; third-party data sharing</h2>
          <p className="mb-4">
            A&amp;M Painter does NOT share, sell, rent, transfer, or otherwise disclose your mobile phone number, SMS
            opt-in consent record, or any phone-related Personal Information with third parties or affiliates for their
            marketing or promotional purposes — under any circumstances.
          </p>
          <p className="mb-3">Specifically:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>We do NOT sell your phone number to data brokers, lead-generation companies, or list aggregators.</li>
            <li>We do NOT share your SMS opt-in with affiliates or sister companies for their own marketing.</li>
            <li>We do NOT use your phone number to retarget you in third-party advertising platforms.</li>
            <li>We DO use a CRM / SMS service provider (currently HighLevel / LeadConnector) acting under a Data Processing Agreement strictly to deliver our own messages on our behalf — this is operational use, not a sale or share.</li>
          </ul>
          <p className="mb-4">
            Full data-handling disclosure is in our <Link href="/privacy" className="text-primary underline">Privacy Policy
            §5 (SMS Messaging Consent)</Link> and <Link href="/privacy" className="text-primary underline">Privacy Policy
            §7 (Sharing of Personal Data)</Link>.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">9. Example messages we send</h2>
          <p className="mb-3">For carrier review and customer transparency:</p>
          <blockquote className="p-4 bg-gray-50 border-l-4 border-gray-300 italic mb-3">
            A&amp;M Painter: Hi Mike, thanks for reaching out! Reply STOP to opt out, HELP for help. Msg frequency varies,
            msg &amp; data rates may apply. {business.url}/privacy
          </blockquote>
          <blockquote className="p-4 bg-gray-50 border-l-4 border-gray-300 italic mb-3">
            A&amp;M Painter: Hi Mike, confirming your free painting estimate at 12 Maple St on Tue 3pm. Reply C to
            confirm, R to reschedule, STOP to opt out. Help? Reply HELP.
          </blockquote>
          <blockquote className="p-4 bg-gray-50 border-l-4 border-gray-300 italic mb-4">
            A&amp;M Painter: Mike, your painting project is on schedule for Mon 5/12. Crew arrives at 7am. Questions?
            Reply here or call {business.phone}. STOP to opt out.
          </blockquote>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">10. Legal references</h2>
          <p className="mb-3">These SMS Terms operate alongside our other legal documents:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><Link href="/privacy" className="text-primary underline">Privacy Policy</Link> — full data-handling disclosure</li>
            <li><Link href="/terms" className="text-primary underline">Terms &amp; Conditions</Link> — service agreement</li>
            <li><Link href="/cookies" className="text-primary underline">Cookie Policy</Link> — website tracking technologies</li>
          </ul>
          <p className="mb-4">
            Compliance frameworks observed: Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, CTIA Short Code
            Monitoring Handbook, A2P 10DLC carrier guidelines (Verizon, AT&amp;T, T-Mobile).
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">11. Questions about SMS or this policy</h2>
          <ul className="list-none pl-0 space-y-2 mb-6">
            <li>📧 <strong>Email:</strong> <a href={`mailto:${business.email}`} className="text-primary underline">{business.email}</a></li>
            <li>📞 <strong>Phone:</strong> <a href={`tel:${business.phoneRaw}`} className="text-primary underline">{business.phone}</a></li>
            <li>📍 <strong>Address:</strong> {business.legalName}, {getFullAddress()}</li>
          </ul>

          <div className="mt-10 p-6 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
            <p className="font-semibold mb-1">{business.legalName}</p>
            <p>{getFullAddress()}</p>
            <p>Phone: {business.phone}</p>
            <p>Website: ampainterinc.com</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
