import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Select from "./Select.jsx";
import "./Header.css";
import { useState } from "react";

const Languages = ["English", "Russian", "French", "Italian", "	Chinise"];
export default function Header() {
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
