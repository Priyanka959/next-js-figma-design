'use client';

import { useState } from 'react';

const tabs = ['Description', 'Additional Information', 'Reviews [5]'];

export default function ProductDescription() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Tabs */}
        <div className="flex justify-center gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-12 border-b border-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`pb-4 md:pb-6 text-sm md:text-base lg:text-lg font-medium transition-colors relative ${
                activeTab === index
                  ? 'text-foreground'
                  : 'text-text-muted hover:text-foreground'
              }`}
            >
              {tab}
              {activeTab === index && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"></div>
              )}
            </button>
          ))}
        </div>

        {/* Description Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-text-muted text-sm md:text-base leading-relaxed mb-8 md:mb-12">
            <p className="mb-6">
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#F9F1E7] rounded-lg overflow-hidden h-[300px] md:h-[400px]">
              <img
                src="/assests/sofa.jpg"
                alt="Product view 1"
                className="w-full h-full object-contain p-8"
              />
            </div>
            <div className="bg-[#F9F1E7] rounded-lg overflow-hidden h-[300px] md:h-[400px]">
              <img
                src="/assests/living.jpg"
                alt="Product view 2"
                className="w-full h-full object-contain p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
