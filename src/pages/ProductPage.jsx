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
        <HelmetComponent product={product} />
        <div className="flex flex-col w-full h-full mt-10 md:flex-row">
          <div className="w-1/2">
            <img
              src={product?.images[0]}
              alt={product?.title}
              className="object-contain object-center w-full h-[400px]"
            />
          </div>
          <div className="flex flex-col w-1/2 gap-2">
            <div className="flex justify-start item-center">
              Reviews: {product?.reviews?.length}
            </div>
            <h2 className="text-xl font-bold">{product?.title}</h2>
            <p className="text-lg">{product?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
