import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PageHero from '@/components/shared/PageHero';
import Features from '@/components/shared/Features';
import Products from '@/components/home/Products';

export const metadata = {
  title: 'About - Furniro',
  description: 'Learn more about our products and services',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero title="About" />
        <Products />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
