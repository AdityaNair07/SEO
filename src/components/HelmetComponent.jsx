import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const HelmetComponent = ({ product }) => {
  return (
    <>
      <Helmet>
        <title>{`${product?.title}`} - Buy Online</title>
        <meta name="description" content={product?.description} />
        <meta property="og:title" content={product?.name} />
        <meta property="og:description" content={product?.description} />
        <meta property="og:image" content={product?.images[0]} />
        <meta property="og:type" content="product" />
        <meta
          property="og:url"
          content={`https://dummyjson.com/products/${product?.id}`}
        />
      </Helmet>
    </>
  );
};

HelmetComponent.propTypes = {
  product: PropTypes.object.isRequired,
};

export default HelmetComponent;
