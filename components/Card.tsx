import React from "react";
import Image from "next/image";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Dish {
  name: string;
  category: string;
  price: number;
  image: {
    desktop: string;
  };
}

const Card = ({ dish }: { dish: Dish }) => {
  return (
    <div>
      <CardHeader>
        <Image
          src={dish.image.desktop}
          alt={dish.name}
          className="rounded-md"
          width="250"
          height="250"
        />
        <CardTitle className="text-lg font-semibold">{dish.name}</CardTitle>
        <CardDescription className="text-gray-500">
          {dish.category}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">${dish.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <button className="bg-blue-500 text-white py-1 px-4 rounded-md">
          Add to Cart
        </button>
      </CardFooter>
    </div>
  );
};

export default Card;
