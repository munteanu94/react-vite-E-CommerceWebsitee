import React from "react";
import { useState } from "react";
import sing1 from "./sing1.png";
import "./CreateAcount.css";
import BtnAccount from "./btnAccount/btnAcount.jsx";
import { FcGoogle } from "react-icons/fc";
import BtnGoogle from "./btnAccount/btnGoogle.jsx";
import { Link } from "react-router-dom";
import Validation from "./Validation.jsx";
export default function CreateAcount() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  function handleInput(event) {
    const newObj = { ...value, [event.target.name]: event.target.value };
    setValue(newObj);
  }

  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(value));
  }

  return (
    <>
      <div className="ContainerAcount">
        <div className="boxImg">
          <img src={sing1} alt="poza" />
        </div>

        <form className="boxInput" onSubmit={handleValidation}>
          <div>
            <h2>Create an account</h2>
            <p>Enter your details below</p>
          </div>
          <div>
            <input type="text" placeholder="Name" onChange={handleInput} />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email or Phone Number"
              onChange={handleInput}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={handleInput}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>
          <div className="btn">
            <BtnAccount name="Create Acount" />
            <BtnGoogle />
          </div>
          <div className="boxLogIn">
            <p>Already have account?</p>
            <Link className="linkLogIn">Log In</Link>
          </div>
        </form>
      </div>
    </>
  );
}
