import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
}

export default function PageHero({ title }: PageHeroProps) {
  return (
    <section className="relative h-[200px] md:h-[250px] lg:h-[316px] flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="absolute inset-0 bg-white/50"></div>
      
      <div className="relative z-10 text-center">
        <div className="flex justify-center mb-2 md:mb-3">
          <div className="w-12 h-12 md:w-16 md:h-16">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5L5 15L20 25L35 15L20 5Z" fill="#B88E2F"/>
              <path d="M5 25L20 35L35 25" stroke="#B88E2F" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-3 md:mb-4">
          {title}
        </h1>

        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <Link href="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="font-light">{title}</span>
        </div>
      </div>
    </section>
  );
}
