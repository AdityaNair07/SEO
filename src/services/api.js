export const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

export const getProducts = async () => {
  try {
    const res = await fetch(BASE_URL).then((data) => data.json());

    console.log("Response: ", res);

    return res.products;
  } catch (error) {
    console.error("Error getting products", error);
  }
};

export const getProductById = async ({ id }) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`).then((data) => data.json());

    console.log("Get product by id response: ", res);

    return res;
  } catch (error) {
    console.error("Error getting product by id", error);
  }
};
