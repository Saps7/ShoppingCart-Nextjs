import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const EmptyCart = () => {
    const router = useRouter();
    return (
        <div className="container flex flex-col items-center justify-center md:flex-row md:gap-20 px-5 mt-20 text-gray-700">
            <div className="text-center">
                <div className="text-5xl font-dark font-bold mb-2">
                    OOPS!
                </div>
                <p className="text-2xl md:text-3xl font-light leading-normal mb-2">
                    Your cart is Empty!
                </p>
                <p className="xs:w-18">Please Add Items in your cart first! Click below to continue shopping.</p>
                <button className="mt-6 relative inline-block text-lg group"
                    onClick={() => router.push('/')}
                >
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative">Back to Home</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </button>
            </div>
            <div className="flex items-center">
                <Image src="/cart.png" alt="empty cart" width={200} height={200} />
            </div>
        </div>
    )
}

export default EmptyCart;
