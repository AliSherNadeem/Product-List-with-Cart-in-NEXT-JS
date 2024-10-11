"use client";
import { useCart } from "@/context/cartcontext";
import CartIcon from "@/public/assets/icons/CartIcon";
import DecrementIcon from "@/public/assets/icons/DecrementIcon";
import IncrementIcon from "@/public/assets/icons/IncrementIcon";
import React, { useState, useEffect } from "react";

interface Dish {
  name: string;
  category: string;
  price: number;
  image: {
    desktop: string;
  };
}
interface ButtonProps {
  label: string;
  dish: Dish;
}

const Button = ({ label, dish }: ButtonProps) => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const cartItem = cart.find((item) => item.name === dish.name);
    if (cartItem) {
      setQuantity(cartItem.quantity);
      setShowControls(true);
    } else {
      setQuantity(0);
      setShowControls(false);
    }
  }, [cart, dish.name]);

  const handleIncrement = () => {
    addToCart(dish);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(dish.name, quantity - 1);
    } else {
      removeFromCart(dish.name);
    }
  };

  const handleButtonClick = () => {
    addToCart(dish);
  };

  return (
    <div className="flex items-center mt-4">
      {!showControls ? (
        <button
          className="bg-white font-semibold text-rose-900 border border-redCustom py-2 px-4 rounded-full shadow-lg flex items-center gap-1 justify-center w-40"
          onClick={handleButtonClick}
        >
          <CartIcon />
          {label}
        </button>
      ) : (
        <div className="flex items-center justify-between bg-redCustom text-white py-2 rounded-full shadow-lg w-40">
          <button
            onClick={handleDecrement}
            className="flex items-center justify-center w-6 h-6 ml-auto border border-white rounded-full"
          >
            <DecrementIcon className="text-white" />
          </button>
          <span className="mx-8">{quantity}</span>
          <button
            onClick={handleIncrement}
            className="flex items-center justify-center w-6 h-6 mr-auto border border-white rounded-full"
          >
            <IncrementIcon className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Button;
