import Card from "./Card";
import Cart from "./Cart";

interface Dish {
  name: string;
  category: string;
  price: number;
  image: {
    desktop: string;
  };
}

function getDishes(): Promise<Dish[]> {
  return fetch("http://localhost:3000/api/desserts")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching data:", error);
      return [];
    });
}

const ProductList = async () => {
  const data = await getDishes();

  return (
    <div className="flex flex-col lg:flex-row lg:mx-auto lg:px-1">
      <div className="lg:w-3/4">
        <h1 className="text-4xl font-bold mb-4 text-rose-900">Desserts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((dish, index) => (
            <Card key={index} dish={dish} />
          ))}
        </div>
      </div>
      <div className="lg:w-1/4 lg:ml-8 mt-8 lg:mt-0">
        <Cart />
      </div>
    </div>
  );
};

export default ProductList;
