import Header from "../components/partials/Header";
// import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import { Outlet } from "react-router-dom";
// import { CartProvider } from "../views/User/Cart/cart";

// Page admin
import Navbar from "../views/Admin/Navbar";
import HeaderAdmin from "../components/partials/Header";


const item = JSON.parse(localStorage.getItem("loginOk"));
const BaseLayout = () => {
  if(item && item.user.role == 1){
    return (
      <div className='grid grid-cols-12'>
        <div className='col-span-12'><HeaderAdmin /></div>
        <div className='col-span-2'><Navbar /></div>
        <div className='col-span-10'>
          <main>
            <Outlet />
          </main>
        </div>
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
