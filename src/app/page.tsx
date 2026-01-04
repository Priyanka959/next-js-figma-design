import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/home/Hero';
import BrowseRange from '@/components/home/BrowseRange';
import Products from '@/components/home/Products';
import Inspiration from '@/components/home/Inspiration';
import ShareSetup from '@/components/home/ShareSetup';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BrowseRange />
        <Products />
        <Inspiration />
        <ShareSetup />
      </main>
      <Footer />
    </div>
  );
}
