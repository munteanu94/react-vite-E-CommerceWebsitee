import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import HeaderTop from "./HeaderTop.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import SingUp from "../pages/SingUp.jsx";
export default function Header() {
  return (
    <>
      <HeaderTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SingUp" element={<SingUp />} />
      </Routes>
    </>
  );
}
