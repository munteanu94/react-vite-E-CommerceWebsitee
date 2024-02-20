import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RxPerson } from "react-icons/rx";
import { useState } from "react";

import { ShopContext } from "../pages/homeComponente/sectionSecond/subComponete/Context.jsx";
import "./NavBar.css";

export default function NavBar(props) {
  const [active, setActive] = useState(false);

  const { getTotalCartNumber } = useContext(ShopContext);
  let amountProduct = getTotalCartNumber();

  return (
    <nav className="containerNav">
      <div className="containerWrapper">
        <h2 className="logo">Exclusive</h2>
        <ul className="ulList">
          <li>
            <NavLink className="link" to="/react-vite-E-CommerceWebsitee/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/SingUp">
              Sing Up
            </NavLink>
          </li>
        </ul>
        <ul className="ulList2">
          <li className="containerInput">
            <input type="text" placeholder="What are you looking for?" />
            <IoIosSearch className="iconSerch" />
          </li>
          <li>
            <IoIosHeartEmpty />
          </li>
          <li className="boxAmountCarts">
            <Link to="/Carts">
              <BiCartAlt />
            </Link>
            <p className="numberCarts">{amountProduct}</p>
          </li>
          <li>
            <Link
              className={active ? "myAccount active" : "myAccount"}
              to="/MyAccount"
              onClick={() => setActive((prev) => !prev)}
            >
              <RxPerson />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
