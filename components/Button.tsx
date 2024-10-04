"use client"; // Add this at the top of your file

import CartIcon from "@/public/assets/icons/CartIcon";
import DecrementIcon from "@/public/assets/icons/DecrementIcon";
import IncrementIcon from "@/public/assets/icons/IncrementIcon";
import React, { useState } from "react";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  const [quantity, setQuantity] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    setShowControls(true);
  };

  const handleDecrement = () => {
    setQuantity((prev) => {
      if (prev === 1) {
        setShowControls(false);
        return 0;
      }
      return prev - 1;
    });
  };

  const handleButtonClick = () => {
    setShowControls(true);
    setQuantity((prev) => (prev === 0 ? 1 : prev));
  };

  return (
    <div className="flex items-center mt-4">
      {!showControls ? (
        <button
          className="bg-white text-redCustom border border-cus py-2 px-4 rounded-full shadow-lg flex items-center justify-center w-40"
          onClick={handleButtonClick}
        >
          <CartIcon className="mr-2" />
          {label}
        </button>
      ) : (
        <div className="flex items-center bg-redCustom text-white py-2 rounded-full shadow-lg w-40 justify-center">
          <button
            onClick={handleDecrement}
            disabled={quantity <= 0}
            className="flex items-center justify-center w-6 h-6"
          >
            <DecrementIcon className="text-white" />
          </button>
          <span className="mx-4">{quantity > 0 ? quantity : 0}</span>
          <button
            onClick={handleIncrement}
            className="flex items-center justify-center w-6 h-6"
          >
            <IncrementIcon className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Button;
