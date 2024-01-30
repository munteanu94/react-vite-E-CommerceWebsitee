import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { BiCartAlt } from "react-icons/bi";

import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="containerNav">
      <div className="containerWrapper">
        <h2 className="logo">Exclusive</h2>
        <ul className="ulList">
          <li>
            <NavLink className="link" to="/Home">
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
          <li>
            <BiCartAlt />
          </li>
        </ul>
      </div>
    </nav>
  );
}
