import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full px-5 py-4 md:px-10">
      <span className="text-2xl font-bold">Product Hunt</span>
      <Link className="text-lg font-semibold" to={"/"}>
        Home
      </Link>
    </div>
  );
};

export default Navbar;
