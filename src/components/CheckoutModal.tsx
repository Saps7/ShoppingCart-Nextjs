"use client"
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Modal from "./Modal";
import { formatCurrency } from "@/lib/formatCurrency";
 import { useRouter } from 'next/navigation'

type CheckoutModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    total: Number;
}

const CheckoutModal = ({ open, setOpen, total }: CheckoutModalProps) => {
    const { resetCart } = useShoppingCart();
    const router = useRouter();

    const handleOrderPlace = () => {
        resetCart();
        router.push('/');
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Modal isOpen={open} onClose={handleClose}>
            <div className="flex justify-center">
                <div className="rounded-full bg-green-200 p-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
            <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">Congratuations!</h3>
            <p className="w-[250px] text-center font-normal text-gray-600">Your order has been checked out succesfully!</p>
            <h3 className="w-[250px] text-center font-semibold py-4 mt-4 text-xl text-gray-700">Total: {formatCurrency(total)}</h3>
            <button 
                className="mx-auto mt-5 block rounded-xl border-4 border-transparent bg- px-6 py-3 bg-gray-900 text-center text-base font-medium text-white outline-8 hover:outline hover:duration-300"
                onClick={handleOrderPlace}
            >  
                Place Your Order
            </button>
            </div>
        </Modal >
    )
}

export default CheckoutModal
