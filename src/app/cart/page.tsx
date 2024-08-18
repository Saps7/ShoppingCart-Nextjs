"use client"
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Loading from "@/components/UI/Loading";
import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";
import EmptyCart from "@/components/EmptyCart";
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

function CartPage() {
    const { cartItems } = useShoppingCart();

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

    //Total of MRP of all products in cart
    const subTotal = cartItems.reduce((total, cartItem) => {
        const item = products.find((product: ProductProps) => product.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
    }, 0);

    //Total of all product level discounts (excluding payment/ coupon discounts)
    const totalDiscount = cartItems.reduce((total, cartItem) => {
        const item = products.find((product: ProductProps) => product.id === cartItem.id);
        const discount = (item?.price !== undefined && item?.price > 0) ? (item.price * item.discount / 100) : 0;
        return total + discount * cartItem.quantity;
    }, 0);

    //Discounted total of products                               
    const discountedTotal = subTotal - totalDiscount;

    return (
        <>
            {cartItems.length > 0 ?
                (<div className="py-10 relative">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
                            Shopping Cart
                        </h2>
                        <div className="hidden lg:grid grid-cols-2 px-4 py-6">
                            <div className="font-normal text-xl leading-8 text-gray-500 pl-2">Product</div>
                            <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-around gap-4">
                                <span className=" max-w-[260px] text-center">Quantity</span>
                                <span className=" max-w-[200px] text-center">Total</span>
                            </p>
                        </div>

                        {cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} {...cartItem} />
                        ))}

                        <CartSummary subTotal={subTotal} productDiscount={totalDiscount} discountedTotal={discountedTotal} />
                    </div>
                </div>
                ) : (
                    <EmptyCart />
                )

            }
        </>
    )
}

export default CartPage
