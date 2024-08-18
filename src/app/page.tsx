import ProductCard from '@/components/ProductCard';

type ProductProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  discount: number;
  inStock: number;
}

export default async function Home() {
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/products`);
  const products = await res.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5 lg:mx-7 xl:mx-12 lg:mt-5">
      {products.map(( product : ProductProps ) => (
        <div key={product.id}>
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}
