import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import { useEffect, useState } from "react";
import HelmetComponent from "../components/HelmetComponent";

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
    <div className="container w-full h-full px-0 py-10 mx-auto lg:px-10">
      <HelmetComponent product={product} />
      <div className="w-full h-full flex md:flex-row flex-col px-5">
        {product?.title}
      </div>
    </div>
  );
};

export default ProductPage;
