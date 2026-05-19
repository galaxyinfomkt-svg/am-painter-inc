import { business } from '@/data/business'
import { SparklesIcon, PhoneIcon } from '@heroicons/react/24/solid'

interface ContactFormSectionProps {
  heading?: string
  subheading?: string
  /** Unique suffix so multiple instances on the same page have distinct iframe IDs */
  variant?: string
}

export function ContactFormSection({
  heading = 'Get Your Free Estimate',
  subheading = 'Tell us about your project — we respond within 24 hours.',
  variant = 'page',
}: ContactFormSectionProps) {
  const iframeId = `inline-Mh6K2okib8bY2wNnjYYq-${variant}`

  return (
    <section id="contact" className="py-10 lg:py-14 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-primary font-semibold text-xs mb-3">
            <SparklesIcon className="h-3.5 w-3.5" />
            Contact Us
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {heading}
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto">{subheading}</p>
        </div>

        <div className="bg-white rounded-xl p-1 border border-white/20 shadow-2xl overflow-hidden">
          <iframe
            src={business.formEmbedUrl}
            style={{ width: '100%', height: '420px', border: 'none', borderRadius: '8px', display: 'block' }}
            id={iframeId}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="FORM SITE AM PAINTER"
            data-height="616"
            data-layout-iframe-id={iframeId}
            data-form-id="Mh6K2okib8bY2wNnjYYq"
            title="FORM SITE AM PAINTER"
          />
        </div>

        <div className="mt-5 text-center">
          <p className="text-gray-400 mb-2 text-sm">Or call us directly:</p>
          <a
            href={`tel:${business.phoneRaw}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-600 transition text-sm"
          >
            <PhoneIcon className="h-4 w-4" />
            {business.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
