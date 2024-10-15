"use client";
import React from "react";
import { useCart } from "@/context/cartcontext";
import Image from "next/image";
import OrderConfirmIcon from "@/public/assets/icons/OrderConfirmIcon";

interface OrderConfirmationModalProps {
  isVisible: boolean;
  onClose: () => void;
  resetCart: () => void;
}

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  isVisible,
  onClose,
  resetCart,
}) => {
  const { cart, getTotalPrice } = useCart();

  if (!isVisible) return null;

  const handleNewOrder = () => {
    resetCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white border rounded-xl p-6 w-96 relative shadow-lg  mx-auto md:w-[380px] sm:w-[300px]">
        <div className="">
          <OrderConfirmIcon />
        </div>
        <h2 className="text-2xl text-rose-900 font-bold mt-4">
          Order Confirmed
        </h2>
        <p className="text-sm text-rose-500 mt-1">
          We hope you enjoy your food!
        </p>

        {/* Order Details */}
        <div className="mt-6 space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <Image
                src={item.image.desktop}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div className="ml-3 flex-1">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-sm text-rose-900">
                  <span className="text-redCustom mr-2">{item.quantity}x</span>{" "}
                  @ ${item.price.toFixed(2)}
                </p>
              </div>
              <p className="text-sm font-semibold">
                ${(item.quantity * item.price).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Order Total */}
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between">
            <p className="text-sm font-semibold">Order Total</p>
            <p className="text-lg font-bold text-rose-900">
              ${getTotalPrice().toFixed(2)}
            </p>
          </div>
        </div>

        {/* Start New Order Button */}
        <button
          onClick={handleNewOrder}
          className="w-full mt-6 bg-redCustom text-white py-2 rounded-full hover:bg-red-600 transition"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
