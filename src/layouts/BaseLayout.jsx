import Header from "../components/partials/Header";
// import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import { Outlet } from "react-router-dom";
// import { CartProvider } from "../views/User/Cart/cart";

const item = JSON.parse(localStorage.getItem("loginOk"));
const BaseLayout = () => {
  if(item && item.user.role == 1){
    return (
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    );
  } else{
    return (
      <div>
        {/* <CartProvider> */}
          <Header />
  
        <main>
          <Outlet />
        </main>
  
        <Footer />
        {/* </CartProvider> */}
      </div>
    );
  }
};

export default BaseLayout;
