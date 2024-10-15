import ProductDisplayCard from "./ProductDisplayCard";
import Cart from "./Cart";

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

async function getDishes(): Promise<Dish[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || ""; // Fallback to empty string if undefined

  try {
    const response = await fetch(`${baseUrl}/api/desserts`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const ProductList = async () => {
  const data = await getDishes();

  return (
    <div className="flex flex-col lg:flex-row lg:mx-auto lg:px-1">
      <div className="lg:w-2/3">
        <h1 className="text-4xl font-bold mb-4 text-rose-900">Desserts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((dish, index) => (
            <ProductDisplayCard key={index} dish={dish} />
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
