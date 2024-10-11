"use client";
import React, { useState } from "react";
import { useCart } from "@/context/cartcontext";
import EmptyCartIllustration from "@/public/assets/icons/EmptyCartIllustration";
import RemoveItemIcon from "@/public/assets/icons/RemoveItemIcon";
import CarbonNeutralIcon from "@/public/assets/icons/CarbonNeutralIcon";
import OrderConfirmationModal from "./OrderConfirmationModal";

const Cart = () => {
  const { cart, removeFromCart, getTotalItems, getTotalPrice, setCart } =
    useCart();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleConfirmOrder = () => {
    setIsModalVisible(true); // Show the modal
  };

  const resetCart = () => {
    setCart([]); // Reset cart after starting a new order
  };

  return (
    <div className="bg-rose-50 p-6 rounded-lg shadow-md w-[350px]">
      <h2 className="text-2xl font-bold mb-4 text-redCustom">
        Your Cart ({getTotalItems()})
      </h2>
      {cart.length === 0 ? (
        <>
          <div className="flex justify-center items-center">
            <EmptyCartIllustration />
          </div>
          <p className="text-center text-rose-500 mt-4">
            Your added items will appear here
          </p>
        </>
      ) : (
        <>
          {cart.map((item, index) => (
            <React.Fragment key={item.name}>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className=" font-semibold mb-1">{item.name}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <p>
                      <span className="text-redCustom mr-1 font-bold">
                        {item.quantity}x
                      </span>{" "}
                      @ ${item.price.toFixed(2)}
                    </p>
                    <p className="ml-2 font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-rose-500 p-1 rounded-full border border-rose-500 transition-colors group hover:border-rose-700 hover:text-rose-700"
                >
                  <RemoveItemIcon className="group-hover:text-white" />
                </button>
              </div>
              {index < cart.length - 1 && (
                <hr className="my-2 border-gray-200" />
              )}
            </React.Fragment>
          ))}
          <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
            <p className="text-sm text-gray-600">Order Total:</p>
            <p className="text-2xl font-bold text-redCustom">
              ${getTotalPrice().toFixed(2)}
            </p>
          </div>
          <div className="mt-4 p-2 bg-rose-50 rounded-lg flex items-center justify-center">
            <CarbonNeutralIcon className="mr-2" />
            <span className="text-sm text-rose-500">
              This is a{" "}
              <span className="font-semibold text-rose-950">
                carbon-neutral
              </span>{" "}
              delivery
            </span>
          </div>
          <button
            onClick={handleConfirmOrder}
            className="mt-4 w-full bg-redCustom text-white py-2 px-4 rounded-full hover:bg-rose-950 transition-colors"
          >
            Confirm Order
          </button>
        </>
      )}
      <OrderConfirmationModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        resetCart={resetCart}
      />
    </div>
  );
};

export default Cart;
