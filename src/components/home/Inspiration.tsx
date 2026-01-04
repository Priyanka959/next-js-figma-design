 'use client';

import { useState } from 'react';

const rooms = [
  {
    id: 1,
    title: 'Inner Peace',
    category: 'Bed Room',
    image: '/assests/bedroom.webp',
  },
  {
    id: 2,
    title: 'Living Space',
    category: 'Living Room',
    image: '/assests/living.jpg',
  },
];

export default function Inspiration() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="py-12 md:py-16 lg:py-20 hero-section">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-secondary mb-6 md:mb-8 muted">
              Our designer already made a lot of beautiful prototype of rooms that inspire you
            </p>
            <button className="btn-primary">
              Explore More
            </button>
          </div>

          {/* Right Grid with two images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* First image */}
              <div className="rounded-lg overflow-hidden h-64 md:h-[420px] lg:h-[520px] relative">
                <img src={rooms[0].image} alt={rooms[0].title} className="w-full h-full object-cover" />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-muted text-sm mb-1">
                    <span>01</span>
                    <span className="w-6 h-px bg-muted" />
                    <span>{rooms[0].category}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">{rooms[0].title}</h3>
                </div>
              </div>

              {/* Second image with hover effect */}
              <button
                className="rounded-lg overflow-hidden h-64 md:h-[420px] lg:h-[520px] relative border-none bg-transparent p-0 cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <img
                  src={hovered ? '/assests/table.webp' : rooms[1].image}
                  alt={rooms[1].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-muted text-sm mb-1">
                    <span>02</span>
                    <span className="w-6 h-px bg-muted" />
                    <span>{rooms[1].category}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">{rooms[1].title}</h3>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
