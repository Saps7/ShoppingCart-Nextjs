/* eslint-disable @next/next/no-img-element */
import { formatCurrency } from '@/lib/formatCurrency';
import React from 'react';

type ProductProps = {
    id: number
    name: string
    price: number
    imgUrl: string,
    discount: number
  }

export default function ProductCard({ id, name, price, imgUrl, discount }: ProductProps) {
  return (
    <div className="transform overflow-hidden rounded-none lg:rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <img className="h-48 w-full object-cover object-center" alt={name} src={imgUrl}/>
        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{name}</h2>
          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">{formatCurrency(price - (discount*price/100))}</p>
            <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">{formatCurrency(price)}</p>
            <p className="ml-auto text-base font-medium text-green-500">{discount}% off</p>
          </div>
        </div>
    </div>
  )
}
