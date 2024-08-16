import { formatCurrency } from "@/lib/formatCurrency";

type CartSummaryProps = {
    subTotal: number,
    totalDiscount: number,
    total: number
}

function CartSummary({subTotal, totalDiscount, total} : CartSummaryProps) {
  return (
    <>
      <div className="bg-gray-50 rounded-xl p-6 w-full my-8 max-lg:max-w-xl max-lg:mx-auto">
                    <div className="flex items-center justify-between w-full mb-6">
                        <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                        <h6 className="font-semibold text-xl leading-8 text-gray-900">
                            {formatCurrency(subTotal)}
                        </h6>
                    </div>
                    <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                        <p className="font-normal text-xl leading-8 text-gray-400">Discount</p>
                        <h6 className="font-semibold text-xl leading-8 text-gray-900">
                            {formatCurrency(totalDiscount)}
                        </h6>
                    </div>
                    <div className="flex items-center justify-between w-full py-6">
                        <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                        <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">
                            {formatCurrency(total)}
                        </h6>
                    </div>
                </div>
                <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8 xl:gap-8">
                    <button
                        className="rounded-full py-4 w-full max-w-[280px] flex items-center bg-green-500 justify-center transition-all duration-500 hover:bg-green-700">
                        <span className="px-2 font-semibold text-lg leading-8 text-white">Add Coupon Code</span>
                    </button>
                    <button
                        className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-red-500 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-red-700">
                            Checkout
                        <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                            fill="none">
                            <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" stroke-width="1.6"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
    </>
  )
}


export default CartSummary;
