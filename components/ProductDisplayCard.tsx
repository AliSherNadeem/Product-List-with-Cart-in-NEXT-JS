import React from "react";
import Image from "next/image";
import AddtoCartButton from "./AddtoCartButton";
import { CardContent, CardDescription, CardTitle } from "./ui/card";

interface Dish {
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const ProductDisplayCard = ({ dish }: { dish: Dish }) => {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="relative rounded-lg">
        <Image
          src={dish.image.desktop}
          alt={dish.name}
          className="w-full h-auto rounded-xl"
          width={300}
          height={300}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />

        <div className="absolute inset-x-0 bottom-[-16px] flex justify-center">
          <div className="transform translate-y-1">
            <AddtoCartButton label="Add to Cart" dish={dish} />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <CardDescription className="text-rose-500">
          {dish.category}
        </CardDescription>
        <CardTitle className="text-lg font-semibold mt-1">
          {dish.name}
        </CardTitle>
        <CardContent className="mt-1 p-0">
          <p className="text-rose-600 font-medium">${dish.price.toFixed(2)}</p>
        </CardContent>
      </div>
    </div>
  );
};

export default ProductDisplayCard;
