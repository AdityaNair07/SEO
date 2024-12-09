import { getProducts } from "./services/api";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import HelmetComponent from "./components/HelmetComponent";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  if (!products) {
    return (
      <div className="w-full h-full pt-20 text-3xl font-semibold text-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      {/* <HelmetComponent
        title={"Product Hunt"}
        desc={"Get detailed product information from variety of products"}
        image={
          "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        url={"https://dummyjson.com/products"}
        type={"website"}
      /> */}
      <Navbar />
      <div className="container w-full h-full px-0 py-10 mx-auto lg:px-10">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
          {products?.map((data) => {
            return <ProductCard data={data} key={data?.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
