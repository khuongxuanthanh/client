import { Link } from "react-router-dom";
import Banner from "./Banner";
import FeaturedProduct from "./FeaturedProduct";
import NewProduct from "./NewProduct";

const HomeView = () => {
  return (
    <>
      {/* Banner */}
      <Banner />
      <hr />
      {/* Products */}
      <FeaturedProduct />
      
      <NewProduct />
    </>
  );
};

export default HomeView;
