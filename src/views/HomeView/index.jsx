import { Link } from "react-router-dom";
import Banner from "./Banner";
import Products from "./products";
import ProductCollectionList from "./ProductCollectionList/ProductCollectionList";

const HomeView = () => {
  return (
    <>
      {/* Banner */}
      <Banner />
      <hr />
      {/* Products */}
      <Products />
      <ProductCollectionList />
    </>
  );
};

export default HomeView;
