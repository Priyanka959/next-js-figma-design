import { Trophy, ShieldCheck, Truck, Headphones } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: 'High Quality',
    description: 'crafted from top materials',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty Protection',
    description: 'Over 2 years',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Order over 150 $',
  },
  {
    icon: Headphones,
    title: '24 / 7 Support',
    description: 'Dedicated support',
  },
];

export default function Features() {
  return (
    <section className="bg-[#FAF3EA] py-12 md:py-14 lg:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white rounded-lg p-6 md:p-8 shadow-sm"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-light flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" strokeWidth={1.6} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1">{feature.title}</h3>
                <p className="text-muted text-sm md:text-base">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
