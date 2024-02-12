import "./App.css";

import { Routes, Route } from "react-router-dom";

import Footer from "./componente/footer/footer.jsx";
import SideBar from "./componente/pages/homeComponente/SideBar.jsx";
import Home from "./componente/pages/Home.jsx";
import About from "./componente/pages/About.jsx";
import Contact from "./componente/pages/Contact.jsx";
import SingUp from "./componente/pages/SingUp.jsx";
import HeaderTop from "./componente/Header/HeaderTop.jsx";
import NavBar from "./componente/Header/NavBar.jsx";
import "./App.css";
function App() {
  return (
    <>
      <div className="mainContainer">
        <HeaderTop />
        <NavBar />
        <Routes>
          <Route path="/react-vite-E-CommerceWebsitee/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SingUp" element={<SingUp />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
