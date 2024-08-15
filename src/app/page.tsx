import products from '@/data/products.json';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5 md:mx-7 lg:mx-12 lg:mt-5">
      {products.map(product => (
        <div key={product.id}>
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}
