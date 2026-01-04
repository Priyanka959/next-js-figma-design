'use client';

import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number | null;
  discount: number | null;
  image: string;
  isNew: boolean;
}

interface ProductGridProps {
  products: Product[];
  title?: string;
  showMoreButton?: boolean;
  backgroundColor?: string;
  hasBorderTop?: boolean;
}

export default function ProductGrid({ 
  products, 
  title = "Our Products",
  showMoreButton = false,
  backgroundColor = "bg-white",
  hasBorderTop = false
}: ProductGridProps) {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  return (
    <section className={`py-12 md:py-16 lg:py-20 ${backgroundColor} ${hasBorderTop ? 'border-t border-gray-200' : ''}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Title */}
        {title && (
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              {title}
            </h2>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg overflow-hidden border border-gray-100 card"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Badge */}
              {(product.discount || product.isNew) && (
                <div className="absolute top-3 right-3 z-10 flex flex-col items-end gap-2">
                  {product.discount && (
                    <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-semibold">
                      -{product.discount}%
                    </div>
                  )}
                  {product.isNew && !product.discount && (
                    <div className="bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-semibold">
                      New
                    </div>
                  )}
                </div>
              )}

              {/* Image */}
              <div className="relative h-[260px] md:h-[320px] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay on hover */}
              <div
                className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <button className="bg-white text-primary font-semibold py-3 px-8 rounded hover:bg-primary hover:text-white transition-colors">
                  Add to cart
                </button>
                <div className="flex items-center gap-4 text-white">
                  <button className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <span>🔗</span> Share
                  </button>
                  <button className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <span>↔️</span> Compare
                  </button>
                  <button className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <span>❤️</span> Like
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 md:p-6 bg-white">
                <h3 className="text-lg md:text-xl font-semibold mb-1">
                  {product.name}
                </h3>
                <p className="text-muted text-sm mb-2 md:mb-3">
                  {product.description}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-lg md:text-xl font-semibold">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-muted line-through text-sm">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {showMoreButton && (
          <div className="text-center mt-10 md:mt-12">
            <button className="border-2 border-primary text-primary font-semibold py-3 px-12 md:px-16 rounded hover:bg-primary hover:text-white transition-colors">
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
