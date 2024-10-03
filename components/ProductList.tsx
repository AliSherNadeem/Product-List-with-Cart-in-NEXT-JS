import Card from "./Card";

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
    <div>
      <h1 className="text-2xl font-bold mb-4">Desserts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((dish, index) => (
          <Card key={index} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
