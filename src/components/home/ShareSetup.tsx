'use client';

import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Collage photos (add or replace with your project assets)
const photos = [
  { src: '/assests/bedroom.webp' },
  { src: '/assests/living.jpg' },
  { src: '/assests/table.webp' },
  { src: '/assests/images.jpg' },
  { src: '/assests/sofa.jpg' },
  { src: '/assests/sideStorage.webp' },
  { src: '/assests/smallTable.jpg' },
  { src: '/assests/chair.jpg' },
  { src: '/assests/bed.jpg' },
  { src: '/assests/interior_design_25915c03-bd9a-4e10-bf99-8fe0dfd102af.webp' },
  // duplicated images to fill out the collage — these reuse existing assets
  { src: '/assests/bedroom.webp' },
  { src: '/assests/living.jpg' },
];

export default function ShareSetup() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-lg md:text-xl font-semibold">Share your setup with</h3>
          <div className="text-xl md:text-2xl font-bold mt-2">#FuniroFurniture</div>
        </div>

        {/* Masonry-style collage grid */}
        <div className="w-full">
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 auto-rows-[120px]">
            {photos.map((p, i) => {
              // assign different spans to create collage effect
              let spanClass = 'col-span-1 row-span-1';
              if (i === 0) spanClass = 'col-span-2 row-span-2 md:col-span-3 md:row-span-3';
              else if (i === 1) spanClass = 'col-span-1 row-span-2 md:col-span-2 md:row-span-3';
              else if (i === 2) spanClass = 'col-span-1 row-span-1 md:col-span-1 md:row-span-2';
              else if (i === 3) spanClass = 'col-span-1 row-span-1 md:col-span-1 md:row-span-2';
              else if (i === 4) spanClass = 'col-span-1 row-span-2 md:col-span-2 md:row-span-2';

              return (
                <button
                  key={`${p.src}-${i}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Open ${i + 1}`}
                  className={`overflow-hidden rounded-lg focus:outline-none bg-gray-100 ${spanClass}`}
                >
                  <img
                    src={p.src}
                    alt={`Setup ${i + 1}`}
                    className="w-full h-full object-cover block"
                  />
                </button>
              );
            })}
          </div>
        </div>

        <Lightbox
          open={index >= 0}
          slides={photos.map((p) => ({ src: p.src }))}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </section>
  );
}
