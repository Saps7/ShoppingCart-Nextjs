"use client"
import ProductCard from '@/components/ProductCard';
import Loading from '@/components/UI/Loading';
import useSWR from "swr";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  discount: number;
  inStock: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const {
    data: products,
    isLoading,
    error,
} = useSWR(
    "/api/products",
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
);

if (error) {
    return <p>Failed to fetch</p>;
}

if (isLoading) {
    return <Loading></Loading>;
}

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
