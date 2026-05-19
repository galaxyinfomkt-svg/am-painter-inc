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
    <section id="contact" className="py-16 lg:py-24 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold text-sm mb-4">
            <SparklesIcon className="h-4 w-4" />
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            {heading}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{subheading}</p>
        </div>

        <div className="bg-white rounded-2xl p-1 border border-white/20 shadow-2xl overflow-hidden">
          <iframe
            src={business.formEmbedUrl}
            style={{ width: '100%', height: '616px', border: 'none', borderRadius: '12px', display: 'block' }}
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

        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-3">Or call us directly:</p>
          <a
            href={`tel:${business.phoneRaw}`}
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-600 transition"
          >
            <PhoneIcon className="h-5 w-5" />
            {business.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
