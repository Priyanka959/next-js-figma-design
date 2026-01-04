import ProductGrid from '../shared/ProductGrid';

const products = [
  {
    id: 1,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: 3500000,
    discount: 30,
    image: '/assests/chair.jpg',
    isNew: false,
  },
  {
    id: 2,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: null,
    discount: null,
    image: '/assests/chair.jpg',
    isNew: false,
  },
  {
    id: 3,
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 7000000,
    originalPrice: 14000000,
    discount: 50,
    image: '/assests/sofa.jpg',
    isNew: false,
  },
  {
    id: 4,
    name: 'Respiro',
    description: 'Outdoor bar table and stool',
    price: 500000,
    originalPrice: null,
    discount: null,
    image: '/assests/table.webp',
    isNew: true,
  },
  {
    id: 5,
    name: 'Grifo',
    description: 'Night lamp',
    price: 1500000,
    originalPrice: null,
    discount: null,
    image: '/assests/smallTable.jpg',
    isNew: false,
  },
  {
    id: 6,
    name: 'Muggo',
    description: 'Small mug',
    price: 150000,
    originalPrice: null,
    discount: null,
    image: '/assests/sideStorage.webp',
    isNew: true,
  },
  {
    id: 7,
    name: 'Pingky',
    description: 'Cute bed set',
    price: 7000000,
    originalPrice: 14000000,
    discount: 50,
    image: '/assests/bed.jpg',
    isNew: false,
  },
  {
    id: 8,
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 500000,
    originalPrice: null,
    discount: null,
    image: '/assests/sideStorage.webp',
    isNew: true,
  },
];

export default function Products() {
  return (
    <ProductGrid 
      products={products} 
      title="Our Products" 
      showMoreButton={true}
      backgroundColor="bg-white"
    />
  );
}
