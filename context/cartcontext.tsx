"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Dish {
  name: string;
  category: string;
  price: number;
  image: {
    desktop: string;
  };
  quantity: number;
}

// Define the shape of the context state
type CartContextType = {
  cart: Dish[];
  updateCart: (dish: Dish) => void;
};

// Create the context with default values
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Define the provider component
type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Dish[]>([]);

  const updateCart = (dish: Dish) => {
    setCart((prev) => {
      return [dish, ...prev];
    });
  };

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
