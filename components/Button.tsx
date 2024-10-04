"use client";

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
    if (!showControls) {
      setShowControls(true);
      setQuantity(1);
    } else {
      setShowControls(false);
      setQuantity(0);
    }
  };

  return (
    <div className="flex items-center mt-4">
      {!showControls ? (
        <button
          className="bg-white font-bold text-rose-900 border border-redCustom py-2 px-4 rounded-full shadow-lg flex items-center gap-1 justify-center w-40"
          onClick={handleButtonClick}
        >
          <CartIcon />
          {label}
        </button>
      ) : (
        <div className="flex items-center justify-between bg-redCustom text-white py-2 rounded-full shadow-lg w-40">
          <button
            onClick={handleDecrement}
            disabled={quantity <= 0}
            className="flex items-center justify-center w-6 h-6 ml-auto border border-white rounded-full"
          >
            <DecrementIcon className="text-white" />
          </button>
          <span className="mx-8">{quantity}</span>
          <button
            onClick={handleIncrement}
            className="flex items-center justify-center w-6 h-6 mr-auto  border border-white rounded-full"
          >
            <IncrementIcon className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Button;
