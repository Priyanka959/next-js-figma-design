'use client';

import Link from 'next/link';
import { Search, Heart, ShoppingCart, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5L5 15L20 25L35 15L20 5Z" fill="#B88E2F"/>
                <path d="M5 25L20 35L35 25" stroke="#B88E2F" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-lg md:text-xl font-bold">Furniro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            <Link href="/" className="text-sm md:text-base font-medium text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-sm md:text-base font-medium text-gray-700 hover:text-primary transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-sm md:text-base font-medium text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm md:text-base font-medium text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-3 md:gap-5 lg:gap-6">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Account">
              <User className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Search">
              <Search className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Wishlist">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Cart">
              <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center justify-around py-3 border-t border-gray-100">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">
            Shop
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
