"use client"
import { useShoppingCart } from "../context/ShoppingCartContext";
import products from "@/data/products.json";
import { formatCurrency } from "@/lib/formatCurrency";
import Image from "next/image";

type CartItemProps = {
    id: number;
    quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
    const product = products.find((i) => i.id === id);
    if (product == null) return null;

    const discountedPrice = product.price - (product.price * product.discount / 100);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
            <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[750px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                <div className="img-box">
                    <img className="h-48 w-48 object-cover object-center rounded-lg" alt={product.name} src={product.imgUrl} />
                </div>
                <div className="pro-data flex flex-col items-center gap-2">
                    <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                        {product.name}
                    </h5>
                    <div className="flex flex-col">
                        <h4 className="font-medium text-xl leading-8 text-red-500 max-[550px]:text-center">
                            {formatCurrency(discountedPrice)}
                        </h4>
                        <h4 className="font-medium text-xl leading-8 line-through text-gray-500 max-[550px]:text-center">
                            {formatCurrency(product.price)}
                        </h4>
                    </div>
                    <button className="rounded-md min-w-20 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 text-lg border-red-600 text-red-600 text-white"
                        onClick={() => removeFromCart(product.id)}
                    >
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-red-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-red-600 transition duration-300 group-hover:text-white ease">Remove</span>
                    </button>
                </div>
            </div>
            <div className="flex justify-start flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-4">
                {/*Button to change quanity of item(s) in cart*/}
                <div className="flex mt-4 items-center w-full mx-auto justify-center">
                    <button className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center 
                                shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        onClick={() => decreaseCartQuantity(product.id)}
                    >
                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                            fill="none">
                            <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                stroke-linecap="round" />
                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                stroke-linecap="round" />
                        </svg>
                    </button>
                    <input type="text"
                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] 
                                min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                        placeholder={quantity.toString()} />
                    <button
                        className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center 
                                shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        onClick={() => increaseCartQuantity(product.id)}
                    >
                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                            fill="none">
                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                stroke-linecap="round" />
                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                stroke-linecap="round" />
                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                stroke-linecap="round" />
                        </svg>
                    </button>
                </div>

                <h6 className="text-red-500 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] flex items-center mx-auto mt-4">
                    <span className="lg:hidden">Total: </span>
                    {formatCurrency(discountedPrice * quantity)}
                </h6>
            </div>
        </div>
    )
}

export default CartItem
