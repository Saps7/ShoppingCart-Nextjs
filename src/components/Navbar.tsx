"use client"
import Image from 'next/image';
import Link from 'next/link'
import { useShoppingCart } from "../context/ShoppingCartContext";

function Navbar() {
    const { cartQuantity } = useShoppingCart();

    return (
        <header className="bg-white">
            <div className="container mx-auto px-4 py-2 xl:px-8 flex items-center">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image width="100" height="20" src="nav-logo.svg" alt="Nav logo" />
                </Link>
                <Link href="/" className="mr-auto hidden md:flex">
                    <h1 className="text-xl font-bold text-red-500">Cross Country Sneakers</h1>
                </Link>

                {/* Search */}
                <div className="w-full h-10 max-w-xs xl:max-w-md 2xl:max-w-lg bg-gray-100 rounded-md hidden sm:flex items-center">
                    <input
                        className="w-full h-full border-l border-gray-300 bg-transparent font-semibold text-md pl-4"
                        type="text"
                        placeholder="I'm searching for ..."
                    />
                    <svg
                        className="ml-auto h-5 px-4 text-gray-500"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="search"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                        ></path>
                    </svg>
                </div>

                <div className="ml-auto relative inline-block">
                    <Link href="/cart">
                        <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">{cartQuantity}</div>
                        <svg
                            className="h-9 lg:h-10 p-2 text-gray-500"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="shopping-cart"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                        >
                            <path
                                fill="currentColor"
                                d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                            ></path>
                        </svg>
                    </Link>
                </div>
            </div>
            <hr />
        </header>

    )
}

export default Navbar;
