import type { Metadata } from 'next'
import Link from 'next/link'
import { business, getFullAddress } from '@/data/business'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: `Privacy Policy | ${business.name}`,
  description: `Privacy Policy for ${business.name}. Learn how we collect, use, and protect your personal information, including SMS opt-in, data sharing, and your rights.`,
  alternates: { canonical: `${business.url}/privacy` },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'May 4, 2026'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-[124px] bg-white">
        <section className="bg-gradient-to-br from-secondary via-secondary to-secondary/90 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-300">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-800 leading-relaxed">
          <p className="mb-6">
            This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your
            information when you use the Services and tells you about your privacy rights and how the law protects them.
          </p>
          <p className="mb-6">
            We use your personal data to provide and improve the Services. By using the Services, you consent to the
            collection and use of information in accordance with this Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">1. Overview</h2>
          <p className="mb-4">
            <strong>{business.legalName}</strong> (doing business as <em>A&amp;M Painter</em>, &ldquo;A&amp;M Painter,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; and &ldquo;our&rdquo;) respects your privacy and is committed to protecting
            it through compliance with this Privacy Policy. This Privacy Policy describes how we collect and use your
            Personal Information when you visit our Website (ampainterinc.com), submit a form, request a free estimate,
            communicate with us via our chat widget, send us a text message, or use any of our services.
          </p>
          <p className="mb-4">
            Please read this Privacy Policy to understand our policies and practices regarding your Personal Information
            and how we treat it. If you do not agree with our policies and practices, do not use the Services. By
            accessing or using the Services, you agree and consent to this Privacy Policy.
          </p>
          <p className="mb-4">
            A&amp;M Painter may change this Privacy Policy at any time, at its discretion. Your continued use of the
            Services after we make changes will be considered acceptance and consent to those changes, so please check the
            Privacy Policy periodically for updates.
          </p>
          <p className="mb-4">
            This Privacy Policy is subject to our <Link href="/terms" className="text-primary underline">Terms and
            Conditions</Link>. For information on cookies and tracking technologies, see our <Link href="/cookies"
            className="text-primary underline">Cookie Policy</Link>.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">2. Interpretation and Definitions</h2>
          <h3 className="text-xl font-semibold text-secondary mt-6 mb-3">Interpretation</h3>
          <p className="mb-4">
            Words with the first letter capitalized have meanings defined under the following conditions. The following
            definitions will have the same meaning regardless of whether they appear in the singular or plural.
          </p>
          <h3 className="text-xl font-semibold text-secondary mt-6 mb-3">Definitions</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Account:</strong> a unique account created for you to access our Services or parts of our Services.</li>
            <li><strong>Affiliate:</strong> an entity that controls, is controlled by, or is under common control with a party.</li>
            <li><strong>Company:</strong> means {business.legalName}, with registered office at {getFullAddress()}, United States.</li>
            <li><strong>Cookies:</strong> small files placed on your device by a website, used for various purposes.</li>
            <li><strong>Country:</strong> means {business.address.stateFullName}, United States.</li>
            <li><strong>Device:</strong> any device that can access the Services, such as a computer or mobile phone.</li>
            <li><strong>Personal Data:</strong> any information relating to an identified or identifiable individual, including your name, phone number, email, address, and project details you share with us.</li>
            <li><strong>Service:</strong> means the Website, the chat widget, SMS messaging, email correspondence, and any other channel through which A&amp;M Painter interacts with you.</li>
            <li><strong>Service Provider:</strong> any third party who processes data on behalf of the Company (for example, our CRM and SMS provider).</li>
            <li><strong>Usage Data:</strong> data collected automatically from the use of the Services.</li>
            <li><strong>Website:</strong> refers to ampainterinc.com.</li>
            <li><strong>You:</strong> the user of the Services, either as an individual or representing a legal entity.</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">3. Information We Collect</h2>
          <p className="mb-3">We collect the following categories of information:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Contact information</strong> you provide voluntarily — name, phone number, email, project address, and details about the work you want done.</li>
            <li><strong>Communications</strong> sent through our website forms, chat widget, SMS, email, or phone calls.</li>
            <li><strong>Photos and project notes</strong> you share with us for the purpose of preparing an estimate or executing the work.</li>
            <li><strong>Usage data</strong> collected automatically — IP address, browser type, device, referring page, and analytics events used to improve the Website.</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">4. Tracking Technologies and Cookies</h2>
          <p className="mb-3">
            We use Cookies and similar tracking technologies (beacons, tags, and analytics scripts) to track activity on our
            Services and store certain information. We use both Persistent Cookies and Session Cookies for the following
            purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Essential Cookies:</strong> necessary to provide Services and enable Website features.</li>
            <li><strong>Cookies for Acceptance of the Cookie Policy:</strong> identify whether users have accepted the use of cookies.</li>
            <li><strong>Functional Cookies:</strong> remember your choices to offer a more personalized experience.</li>
            <li><strong>Analytics Cookies:</strong> measure how the Website is used so we can improve it.</li>
          </ul>
          <p className="mb-4">
            We do <strong>NOT</strong> retain Personal Information to develop, improve, or train generalized AI or machine
            learning models, including user data provided via third-party APIs.
          </p>
          <p className="mb-4">
            For more details on the cookies we use, see our <Link href="/cookies" className="text-primary underline">Cookie Policy</Link>.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">5. SMS / Text Messaging Consent (A2P 10DLC)</h2>
          <p className="mb-3"><strong>Important — Telephone Consumer Protection Act (TCPA) compliance.</strong></p>
          <p className="mb-4">
            When you provide your mobile phone number to {business.legalName} — through our website form, chat widget, by
            phone, or in person — and you check a consent box or otherwise agree to receive SMS, you authorize us to send
            you SMS text messages related to your project, estimates, scheduling, follow-up, and occasional service updates.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Message frequency varies</strong> based on your project stage. You typically receive a few messages per week during an active project and only occasional updates outside active work.</li>
            <li><strong>Message and data rates may apply.</strong> Your carrier&apos;s standard rates apply to all SMS communications. A&amp;M Painter does not charge a fee to send or receive SMS.</li>
            <li><strong>Reply STOP</strong> at any time to any SMS we send to unsubscribe. You will be removed from our SMS list and will not receive further messages.</li>
            <li><strong>Reply HELP</strong> for assistance, or contact us directly at {business.phone} or {business.email}.</li>
            <li><strong>Mobile information will not be shared</strong> with third parties or affiliates for marketing or promotional purposes. All categories of information described in this policy exclude mobile opt-in consent and phone numbers from being sold or transferred to third parties.</li>
            <li><strong>How we obtain consent:</strong> you opt in by submitting our website form with the SMS consent checkbox checked, by initiating a conversation through our website chat widget, or by verbally agreeing during a phone call.</li>
          </ul>
          <p className="mb-4">
            By providing your phone number and giving consent, you confirm that the number provided is yours, that you are
            authorized to receive SMS at that number, and that you agree to the SMS terms described above.
          </p>
          <p className="mb-4">
            See our <Link href="/sms-terms" className="text-primary underline">SMS Terms &amp; Opt-In Methods</Link> for full
            disclosure.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">6. Use of Your Personal Data</h2>
          <p className="mb-3">A&amp;M Painter may use your Personal Data for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>To provide and maintain our Services, including monitoring the use of the Services.</li>
            <li>To prepare estimates, schedule appointments, communicate project status, and deliver the work you hired us for.</li>
            <li>To contact you by email, telephone, SMS, or other electronic means of communication for updates or information related to the Services.</li>
            <li>To provide information about products, special offers, and events that we offer (only if you opted in to such marketing communications).</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">7. Sharing of Your Personal Data</h2>
          <p className="mb-3">A&amp;M Painter may share your personal data in the following situations:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>With Service Providers:</strong> CRM, scheduling, and SMS providers that process data on our behalf to operate the Services. We never sell your information.</li>
            <li><strong>With Affiliates:</strong> with controlling companies or subsidiaries under common control.</li>
            <li><strong>With Business Partners:</strong> only when necessary to deliver a specific service you requested.</li>
            <li><strong>With Your Consent:</strong> for any other purpose with your explicit permission.</li>
            <li><strong>For Legal Reasons:</strong> if required by law, subpoena, or court order.</li>
          </ul>
          <p className="mb-4">We do not sell, rent, or share your phone number with third parties for their marketing purposes.</p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">8. Retention of Your Personal Data</h2>
          <p className="mb-4">
            A&amp;M Painter will retain your Personal Data only for as long as necessary to fulfill the purposes outlined in
            this Privacy Policy. We will also retain Usage Data for internal analysis, usually for shorter periods.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">9. Transfer of Your Personal Data</h2>
          <p className="mb-4">
            Your information may be transferred to, and maintained on, computers located outside of your state, province,
            or country where the data protection laws may differ from those where you live. Servers used by our service
            providers may be located in the United States.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">10. Deletion of Your Personal Data</h2>
          <p className="mb-4">
            You have the right to delete or request assistance in deleting the Personal Data we have collected about you.
            You may update, correct, or delete your information at any time by contacting us using the information at the
            bottom of this page.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">11. Lawful Disclosures of Your Personal Data</h2>
          <p className="mb-4">
            We may be required to disclose your Personal Data to comply with legal requirements or by order of governmental
            authorities, such as courts or government agencies.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">12. Security of Your Personal Data</h2>
          <p className="mb-4">
            The security of your Personal Data is important to us, but remember that no method of transmission over the
            Internet, or electronic storage, is 100% secure. We use commercially reasonable measures to protect your
            Personal Data, but cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">13. Children&apos;s Privacy</h2>
          <p className="mb-4">
            We do not knowingly collect, use, or disclose Information from children under 16. If we learn that we have
            collected the Personal Information of a child under 16 — or the equivalent minimum age depending on the
            jurisdiction, such as 13 in the United States per the Children&apos;s Online Privacy Protection Act — we will
            take steps to delete the information as soon as possible.
          </p>
          <p className="mb-4">
            If you are under 16, do not provide any Information about yourself to A&amp;M Painter, including your name,
            address, telephone number, or email address. If you become aware that Information of a child under 16 years of
            age has been provided, please contact us using the methods in the &ldquo;Contact Us&rdquo; section below.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">14. Links to Other Sites</h2>
          <p className="mb-4">
            Our Service may contain links to third-party websites. We have no control over, and are not responsible for,
            the privacy practices of third-party websites.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">15. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy
            Policy on this page and updating the &ldquo;Last updated&rdquo; date at the top.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">16. Contact Us</h2>
          <p className="mb-3">
            If you have any questions about this Privacy Policy, including your SMS consent or opt-out preferences, please
            contact us:
          </p>
          <ul className="list-none pl-0 space-y-2 mb-6">
            <li>📧 <strong>Email:</strong> <a href={`mailto:${business.email}`} className="text-primary underline">{business.email}</a></li>
            <li>📍 <strong>Address:</strong> {getFullAddress()}, United States</li>
            <li>📞 <strong>Phone:</strong> <a href={`tel:${business.phoneRaw}`} className="text-primary underline">{business.phone}</a></li>
          </ul>

          <div className="mt-10 p-6 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
            <p className="font-semibold mb-1">{business.legalName}</p>
            <p>{getFullAddress()}</p>
            <p>Local Phone: {business.phone}</p>
            <p>Email: {business.email}</p>
            <p>Website: ampainterinc.com</p>
          </div>

          <p className="mt-8 text-sm text-gray-600 italic">
            By using this website, submitting a form, or sending us an SMS, you agree to our Privacy Policy,{' '}
            <Link href="/terms" className="text-primary underline">Terms &amp; Conditions</Link>, and{' '}
            <Link href="/cookies" className="text-primary underline">Cookie Policy</Link>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}
