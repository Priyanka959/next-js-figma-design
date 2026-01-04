const galleryImages = [
  { id: 1, span: 'row-span-2', image: '/assests/bedroom.webp' },
  { id: 2, span: 'row-span-1', image: '/assests/chair.jpg' },
  { id: 3, span: 'row-span-1', image: '/assests/sofa.jpg' },
  { id: 4, span: 'row-span-2', image: '/assests/living.jpg' },
  { id: 5, span: 'row-span-1', image: '/assests/table.webp' },
  { id: 6, span: 'row-span-1', image: '/assests/smallTable.jpg' },
  { id: 7, span: 'row-span-1', image: '/assests/bed.jpg' },
  { id: 8, span: 'row-span-2', image: '/assests/interior_design_25915c03-bd9a-4e10-bf99-8fe0dfd102af.webp' },
  { id: 9, span: 'row-span-1', image: '/assests/sideStorage.webp' },
];

export default function Gallery() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="text-center mb-8 md:mb-12">
        <p className="text-secondary text-sm md:text-base mb-2 muted">
          Share your setup with
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          #FuniroFurniture
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[150px] md:auto-rows-[200px] gap-3 md:gap-4 px-4 md:px-8">
        {galleryImages.map((item) => (
          <div
            key={item.id}
            className={`${item.span} overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer card`}
          >
            <img
              src={item.image}
              alt={`Gallery image ${item.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
