/* eslint-disable @next/next/no-img-element */
"use client"
import { useShoppingCart } from "@/context/ShoppingCartContext"
import formatCurrency from "@/lib/formatCurrency";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  discount: number;
  inStock: number;
}

export default function ProductCard({ id, name, price, imgUrl, discount, inStock }: ProductProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(id);

  const handleIncrementCartQuantity = () => {
    if (quantity < inStock)
        increaseCartQuantity(id);
    else {
        toast.warn("You can't order any more quantity of this item!", {
            position: "top-right"
        });
    }
}

  return (
    <>
      <div className="transform overflow-hidden rounded-none lg:rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <img className="h-48 w-full object-cover object-center" alt={name} src={imgUrl} />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{name}</h2>
          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">{formatCurrency(price - (discount * price / 100))}</p>
            <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">{formatCurrency(price)}</p>
            <p className="ml-auto text-base font-medium text-green-500">{discount}% off</p>
          </div>
          {quantity === 0 ? (
            <button className="mt-4 relative inline-block text-lg group"
              onClick={() => increaseCartQuantity(id)}
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Add to Cart</span>
              </span>
              <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </button>
          ) :
          (
            <div className="mt-4 flex justify-between">
              <div className="flex items-center overflow-hidden text-gray-900 bg-gray-50 rounded group">
                <button className="px-3.5 py-2 text-white text-lg bg-gray-900 flex items-center justify-center"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </button>
                <span className="pl-4 pr-5 py-2.5">{quantity}</span>
                <button className="px-3.5 py-2 text-white text-lg bg-gray-900 flex items-center justify-center"
                  onClick={() => handleIncrementCartQuantity()}
                >
                  +
                </button>
              </div>
              <button className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 text-lg border-red-600 text-red-600 text-white"
                onClick={() => removeFromCart(id)}
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-red-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-red-600 transition duration-300 group-hover:text-white ease">Remove</span>
              </button>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  )
}
