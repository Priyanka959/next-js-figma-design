export default function Hero() {
  const bgUrl = "/assests/interior_design_25915c03-bd9a-4e10-bf99-8fe0dfd102af.webp";

  return (
    <section
      className="relative hero-section bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="relative min-h-[420px] md:min-h-[520px] lg:min-h-[680px] flex items-center">
          {/* Decorative overlay to slightly dim image for contrast */}
          <div className="absolute inset-0 bg-black/0 md:bg-black/5" />

          {/* CTA card positioned on the right (hidden on small screens) */}
          <div className="absolute right-4 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 w-full max-w-md md:max-w-lg hidden md:block">
            <div className="hero-cta-card p-6 md:p-10 lg:p-12 rounded-lg">
              <p className="text-secondary text-sm md:text-base font-semibold tracking-wide mb-2 muted">
                New Arrival
              </p>
              <h1 className="text-2xl md:text-4xl lg:text-[48px] font-bold text-primary leading-tight mb-4">
                Discover Our<br />New Collection
              </h1>
              <p className="text-secondary text-sm md:text-base leading-relaxed mb-6 md:mb-8 muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
              <button className="btn-primary">
                BUY NOW
              </button>
            </div>
          </div>

          {/* Fallback content for small screens to keep spacing */}
          <div className="relative w-full md:hidden py-8">
            <div className="flex justify-center">
              <div className="hero-cta-card p-6 rounded-lg max-w-sm">
                <p className="text-secondary text-sm font-semibold tracking-wide mb-2 muted">New Arrival</p>
                <h2 className="text-xl font-bold text-primary mb-3">Discover Our New Collection</h2>
                <button className="btn-primary">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
