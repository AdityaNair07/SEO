import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import { useEffect, useState } from "react";
import HelmetComponent from "../components/HelmetComponent";
import Navbar from "../components/Navbar";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById({ id: id })
        .then((data) => setProduct(data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  if (!product) {
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
        <HelmetComponent
          title={product.title || "Prodcut Name"}
          desc={product.description || "Description for the product."}
          image={
            product.images[0] ||
            "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          type={"product"}
        />
        <div className="flex flex-col w-full h-full mt-10 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={product.images[0]}
              alt={product.title}
              className="object-contain object-center w-full h-[400px]"
            />
          </div>
          <div className="flex flex-col w-full gap-2 md:w-1/2">
            <div className="flex justify-start item-center">
              Reviews: {product.reviews?.length}
            </div>
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-lg">{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
