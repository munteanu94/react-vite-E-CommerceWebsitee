import "./HeaderTop.css";
import { useState } from "react";
import Select from "./Select.jsx";
import { Link } from "react-router-dom";

const Languages = ["English", "Russian", "French", "Italian", "	Chinise"];
export default function HeaderTop() {
  const [language, setLanguage] = useState(Languages[0]);
  return (
    <nav className="headerTop">
      <p>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <Link className="ShowNow" to="/ShowNow">
          ShowNow
        </Link>
      </p>
      <div className="containeSelect">
        <Select
          options={Languages}
          currentOption={language}
          onChange={setLanguage}
        />
      </div>
    </nav>
  );
}
