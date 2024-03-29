import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./componente/footer/footer.jsx";
import SideBar from "./componente/pages/homeComponente/SideBar.jsx";
import Home from "./componente/pages/Home.jsx";
import About from "./componente/pages/About.jsx";
import Contact from "./componente/pages/Contact.jsx";
import SingUp from "./componente/pages/SingUp.jsx";
import HeaderTop from "./componente/Header/HeaderTop.jsx";
import NavBar from "./componente/Header/NavBar.jsx";
import Carts from "./componente/pages/pageCarts/Carts.jsx";
import ProceesCheckout from "./componente/pages/pageCheckout/checkout.jsx";
import MyAccount from "./componente/pages/myAccount/myAccount.jsx";
import ProductDetail from "./componente/pages/ProdusDetail/ProductDitail.jsx";
import AllProducts from "./componente/pages/AllProducts/AllProduscts.jsx";
import ViewAllProducts from "./componente/pages/ViewAllProducts/ViewAllProducts.jsx";

import "./App.css";
import ShopContextProvider from "./componente/pages/homeComponente/sectionSecond/subComponete/Context.jsx";
function App() {
  return (
    <>
      <div className="mainContainer">
        <ShopContextProvider>
          <HeaderTop />
          <NavBar />
          <Routes>
            <Route path="/react-vite-E-CommerceWebsitee/" element={<Home />} />
            <Route data-aos="fade-up" path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/SingUp" element={<SingUp />} />
            <Route path="/Carts" element={<Carts />} />
            <Route path="/ProceesCheckout" element={<ProceesCheckout />} />
            <Route path="/MyAccount" element={<MyAccount />} />
            <Route path="/productDetails" element={<ProductDetail />} />
            <Route path="/ShowNow" element={<AllProducts />} />
            <Route path="/ViewAllProducts" element={<ViewAllProducts />} />
          </Routes>
          <Footer />
        </ShopContextProvider>
      </div>
    </>
  );
}

export default App;
