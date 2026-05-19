import Script from 'next/script'

export function ReviewsWidget() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read verified reviews from our satisfied customers across Massachusetts
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <iframe
            className="lc_reviews_widget"
            src="https://reputationhub.site/reputation/widgets/review_widget/npwVVdTpo5dMM8CCSeCT?widgetId=693995dc7e2e568690fbcf48"
            frameBorder="0"
            scrolling="no"
            loading="lazy"
            style={{ minWidth: '100%', width: '100%', minHeight: '500px' }}
            title="Verified customer reviews on Google"
          />
          <Script
            src="https://reputationhub.site/reputation/assets/review-widget.js"
            strategy="lazyOnload"
          />
        </div>
      </div>
    </section>
  )
}
