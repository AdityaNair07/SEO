import { getProducts } from "./services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

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
      <Navbar />
      <div className="container w-full h-full px-0 py-10 mx-auto lg:px-10">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
          {products?.map((data) => {
            return (
              <Link
                to={`/${data?.id}`}
                key={data?.id}
                className="min-w-[150px] w-[200px] rounded-md flex flex-col border border-slate-300 mx-auto relative"
              >
                <img
                  loading="lazy"
                  src={data?.images[0]}
                  alt="product image"
                  className="min-w-[150px] h-40 object-contain border-b-2 border-slate-600"
                />
                <div className="font-semibold text-center">{data?.title}</div>
                <div className="absolute px-2 py-1 font-semibold text-white bg-teal-500 rounded-md shadow-md top-2 right-2">
                  {data?.category}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
