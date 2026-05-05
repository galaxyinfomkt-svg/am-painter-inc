import type { Metadata } from 'next'
import Link from 'next/link'
import { business, getFullAddress } from '@/data/business'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: `Cookie Policy | ${business.name}`,
  description: `Cookie Policy for ${business.name}. Learn how our website uses cookies and similar tracking technologies, and how you can control them.`,
  alternates: { canonical: `${business.url}/cookies` },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'May 4, 2026'

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="pt-[124px] bg-white">
        <section className="bg-gradient-to-br from-secondary via-secondary to-secondary/90 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-gray-300">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-800 leading-relaxed">
          <p className="mb-6">
            This Cookie Policy explains how <strong>{business.legalName}</strong> (&ldquo;A&amp;M Painter,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; and &ldquo;our&rdquo;) uses cookies and similar technologies to recognize you when you visit
            our website at <a href={business.url} className="text-primary underline">{business.url}</a> (the &ldquo;Website&rdquo;).
            It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            In some cases, we may use cookies to collect Personal Information (as defined in our{' '}
            <Link href="/privacy" className="text-primary underline">Privacy Policy</Link>) or information that becomes
            Personal Information if we combine it with other information.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What are Cookies?</h2>
          <p className="mb-4">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website.
            Cookies are widely used by website owners to make their websites work or work more efficiently, as well as to
            provide reporting information.
          </p>
          <p className="mb-4">
            Cookies set by the website owner (in this case, {business.legalName}) are called <strong>&ldquo;first-party
            cookies&rdquo;</strong>. Cookies set by parties other than the website owner are called{' '}
            <strong>&ldquo;third-party cookies&rdquo;</strong>. These cookies enable third-party features or functionalities
            (like advertising, analytics, and interactive content) to be provided through the website. These third parties
            can recognize your computer when it visits our Website and also when it visits other websites.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Why do we use Cookies?</h2>
          <p className="mb-3">We use first- and third-party cookies for several reasons:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Some cookies are required for technical reasons for our Website to operate (&ldquo;essential&rdquo; or &ldquo;strictly necessary&rdquo; cookies).</li>
            <li>Other cookies help us enhance user experience, personalize content, analyze performance, and deliver targeted ads.</li>
            <li>Specific reasons are outlined under &ldquo;Types of Cookies We May Use&rdquo; below.</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">How can I control cookies?</h2>
          <p className="mb-4">
            You have the right to accept or reject cookies. You can manage your preferences through our cookie consent
            settings on the Website, which allows you to select categories of cookies to accept or reject. Essential
            cookies cannot be disabled as they are necessary for site functionality.
          </p>
          <p className="mb-4">
            You can also set or change cookie preferences in your browser settings. Please note that disabling cookies may
            impact the functionality of our Website.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Types of Cookies We May Use</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Essential Cookies</strong> – Required for basic website functionality (forms, navigation, chat widget, security).</li>
            <li><strong>Performance / Functionality Cookies</strong> – Improve site performance and remember your preferences.</li>
            <li><strong>Analytics and Customization Cookies</strong> – Help us understand how users interact with our Website and personalize your experience (e.g., Google Analytics, Vercel Analytics).</li>
            <li><strong>Advertising Cookies</strong> – Deliver relevant ads and limit how many times you see the same ad. We may use Facebook Pixel and Google Ads tags.</li>
            <li><strong>Social Networking Cookies</strong> – Enable sharing through social media (Instagram, Facebook) and may also track activity for ad targeting on those platforms.</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Managing Cookies in Your Browser</h2>
          <p className="mb-3">You can manage or disable cookies via your browser settings:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary underline" target="_blank" rel="noopener noreferrer">Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-primary underline" target="_blank" rel="noopener noreferrer">Firefox</a></li>
            <li><a href="https://support.apple.com/en-us/HT201265" className="text-primary underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary underline" target="_blank" rel="noopener noreferrer">Edge</a></li>
            <li><a href="https://help.opera.com/en/latest/web-preferences/" className="text-primary underline" target="_blank" rel="noopener noreferrer">Opera</a></li>
          </ul>
          <p className="mb-3">You may also opt out of targeted advertising through:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><a href="https://www.aboutads.info/choices/" className="text-primary underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a></li>
            <li><a href="https://youradchoices.ca/" className="text-primary underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance of Canada</a></li>
            <li><a href="https://www.youronlinechoices.eu/" className="text-primary underline" target="_blank" rel="noopener noreferrer">European Interactive Digital Advertising Alliance</a></li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Other Tracking Technologies</h2>
          <p className="mb-4">
            In addition to cookies, we may use tracking technologies like <strong>web beacons</strong> or <strong>pixels</strong>.
            These help us understand usage patterns, track campaign performance, and improve services.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Flash Cookies / Local Shared Objects</h2>
          <p className="mb-4">
            Our Website may use Flash Cookies for site features and fraud prevention. You can manage Flash settings at the{' '}
            <a href="https://www.adobe.com/support/documentation/en/flashplayer/help/settings_manager.html" className="text-primary underline" target="_blank" rel="noopener noreferrer">Adobe Settings Panel</a>.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Targeted Advertising</h2>
          <p className="mb-4">
            Third parties may use cookies and similar technologies to display targeted ads based on your online activity.
            We do not control these cookies. Refer to their policies for more information.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Updates to This Policy</h2>
          <p className="mb-4">
            We may update this Cookie Policy periodically to reflect changes in practices or legal requirements. Please
            revisit this page regularly. The date at the top indicates the last update.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Contact Us</h2>
          <p className="mb-3">If you have questions about this Cookie Policy, please contact us:</p>
          <ul className="list-none pl-0 space-y-2 mb-6">
            <li>📧 <strong>Email:</strong> <a href={`mailto:${business.email}`} className="text-primary underline">{business.email}</a></li>
            <li>🌐 <strong>Website:</strong> <a href={business.url} className="text-primary underline">{business.url}</a></li>
            <li>🏢 <strong>Address:</strong> {business.legalName}, {getFullAddress()}, United States</li>
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
