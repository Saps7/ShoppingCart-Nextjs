"use client"
import { useState } from "react";
import { formatCurrency } from "@/lib/formatCurrency";
import cardOptions from "@/data/coupons.json"

type CartSummaryProps = {
    subTotal: number,
    totalDiscount: number,
    discountedTotal: number,
}

function CartSummary({ subTotal, productDiscount, discountedTotal }: CartSummaryProps) {
    const [selectedCard, setSelectedCard] = useState(0);
    const [showCoupon, setShowCoupon] = useState(false);
    const [couponDiscount, setCouponDiscount] = useState(0)
    const [total, setTotal] = useState(discountedTotal);

    const isSelected = (id: number) => selectedCard === id;

    const couponClickHandler = (id) => {
        setSelectedCard(id);

        const coupon = cardOptions.filter(card => card.id === id)[0];
        //Checking for type of discount and calculating it on cartvalue post product level discounts
        const discount = coupon.discountType === 'amount' ? coupon.discount : discountedTotal * coupon.discount / 100;
        setCouponDiscount(discount);
        //Final cart value post all discounts
        setTotal(discountedTotal - discount);
    }

    return (
        <>
            <div className="bg-gray-50 rounded-xl p-6 w-full my-8 max-lg:max-w-xl max-lg:mx-auto">
                <div className="flex items-center justify-between w-full mb-6">
                    <p className="font-normal text-xl leading-8 text-gray-400">
                        Sub Total (MRP)
                    </p>
                    <h6 className="font-semibold text-xl leading-8 text-gray-900">
                        {formatCurrency(subTotal)}
                    </h6>
                </div>
                <div className="flex items-center justify-between w-full py-4 border-b border-gray-200">
                    <p className="font-normal text-xl leading-8 text-gray-400">
                        Product Discount
                    </p>
                    <h6 className="font-semibold text-xl leading-8 text-green-500">
                        -{formatCurrency(productDiscount)}
                    </h6>
                </div>
                <div className="flex items-center justify-between w-full py-4 border-b border-gray-200">
                    <p className="font-normal text-xl leading-8 text-gray-400">
                        Coupon Discount
                    </p>
                    <h6 className="font-semibold text-xl leading-8 text-green-500">
                        -{formatCurrency(couponDiscount)}
                    </h6>
                </div>
                <div className="flex items-center justify-between w-full py-6">
                    <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
                        Total
                    </p>
                    <h6 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                        {formatCurrency(total)}
                    </h6>
                </div>
            </div>

            <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8 xl:gap-8">
                <button className="rounded-full py-4 w-full max-w-[280px] flex items-center bg-green-500 justify-center transition-all duration-500 hover:bg-green-700"
                    onClick={() => setShowCoupon(!showCoupon)}
                >
                    <span className="px-2 font-semibold text-lg leading-8 text-white">
                        Add Coupon Code
                    </span>
                </button>
                <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-red-500 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-red-700">
                    Checkout
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                        <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>

            {showCoupon &&
                //Coupons section
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {cardOptions.map((card) => (
                            <div
                                key={card.id}
                                className={`relative border-2 ${card.color} rounded-lg p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 ${isSelected(card.id) ? card.bg : 'bg-white'}`}
                                onClick={() => couponClickHandler(card.id)}
                                tabIndex={0}
                                role="checkbox"
                            >
                                <div className="flex items-center gap-1 mb-4 px-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="40px" fill="#2bd45e"><path d="m860.67-399.33-299.34 300q-10 9.66-22.5 14.5-12.5 4.83-25 4.83T489-85q-12.33-5-22.33-14.33L99.67-467q-9-9-14.34-21.14Q80-500.27 80-513.67v-299.66q0-27.5 19.58-47.09Q119.17-880 146.67-880H447q13.38 0 25.92 5.42 12.55 5.41 21.75 14.58l366 366.33q10.26 10 14.96 22.5 4.7 12.5 4.7 25t-4.83 25q-4.83 12.5-14.83 21.84ZM250-656q22.33 0 38.5-16.17 16.17-16.16 16.17-38.5 0-22.33-16.17-38.5-16.17-16.16-38.5-16.16t-38.5 16.16q-16.17 16.17-16.17 38.5 0 22.34 16.17 38.5Q227.67-656 250-656Z" /></svg>
                                    <h3 className="text-xl font-semibold">{card.title}</h3>
                                </div>
                                <p className="text-gray-700">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}


export default CartSummary;
