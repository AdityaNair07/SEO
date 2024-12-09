import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const HelmetComponent = ({ title, desc, image, type }) => {
  return (
    <>
      <Helmet>
        <title>{`${title}`} - Buy Online</title>
        <meta name="description" content={desc} data-react-helmet="true" />
        <meta property="og:title" content={title} data-react-helmet="true" />
        <meta
          property="og:description"
          content={desc}
          data-react-helmet="true"
        />
        <meta property="og:image" content={image} data-react-helmet="true" />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
    </>
  );
};

HelmetComponent.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default HelmetComponent;
