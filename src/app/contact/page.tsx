import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PageHero from '@/components/shared/PageHero';
import Features from '@/components/shared/Features';
import ContactSection from '@/components/contact/ContactSection';

export const metadata = {
  title: 'Contact - Furniro',
  description: 'Get in touch with us for any inquiries',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero title="Contact" />
        <ContactSection />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
