import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
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
      <HomePage />
    </>
  );
};

export default App;
