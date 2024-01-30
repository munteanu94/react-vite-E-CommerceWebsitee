import "./SideBar.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
export default function SideBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [iconHide, setIconHide] = useState(false);

  return (
    <div className={openMenu ? "containerSideBar open" : "containerSideBar"}>
      <IoIosCloseCircle
        className="sidebarClose"
        onClick={() => {
          setOpenMenu(!openMenu);
          setIconHide(!iconHide);
        }}
      />
      <IoMenu
        className={iconHide ? "sidebarMenu MenuHide" : " sidebarMenu"}
        onClick={() => {
          setOpenMenu(!openMenu);
          setIconHide(!iconHide);
        }}
      />

      <ul className="sidebarhide">
        <li className="more">
          Woman's Fashion <IoIosArrowForward />
        </li>
        <li className="more">
          Men's Fashion <IoIosArrowForward />
        </li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby's & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
    </div>
  );
}
