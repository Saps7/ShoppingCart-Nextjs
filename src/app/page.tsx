import products from '@/data/products.json';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 lg:gap-12 md:mx-8 lg:mx-12 md:mt-10">
      {products.map(product => (
        <div key={product.id}>
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}
