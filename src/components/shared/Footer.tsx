import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Funiro.</h3>
            <address className="not-italic text-muted text-sm leading-relaxed">
              400 University Drive Suite 200 Coral Gables,<br />
              FL 33134 USA
            </address>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-muted font-medium mb-6 md:mb-8 text-sm md:text-base">
              Links
            </h4>
            <ul className="space-y-4 md:space-y-6">
              <li>
                <Link href="/" className="text-sm md:text-base font-medium hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm md:text-base font-medium hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm md:text-base font-medium hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm md:text-base font-medium hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-muted font-medium mb-6 md:mb-8 text-sm md:text-base">
              Help
            </h4>
            <ul className="space-y-4 md:space-y-6">
              <li>
                <Link href="/payment" className="text-sm md:text-base font-medium hover:text-primary transition-colors">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm md:text-base font-medium hover:text-primary transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm md:text-base font-medium hover:text-primary transition-colors">
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-muted font-medium mb-6 md:mb-8 text-sm md:text-base">
              Newsletter
            </h4>
            <div className="flex gap-3 items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-8">
          <p className="text-sm text-muted">
            2023 Funiro. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
