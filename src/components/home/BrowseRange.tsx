const categories = [
  {
    name: 'Dining',
    image: '/assests/table.webp',
  },
  {
    name: 'Living',
    image: '/assests/living.jpg',
  },
  {
    name: 'Bedroom',
    image: '/assests/bedroom.webp',
  },
];

export default function BrowseRange() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
            Browse The Range
          </h2>
          <p className="text-secondary text-sm md:text-base muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <div key={category.name} className="group cursor-pointer">
              <div className="relative h-[320px] md:h-[420px] lg:h-[480px] rounded-lg overflow-hidden mb-4 md:mb-6 card">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-center mt-2">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
