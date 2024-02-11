import { FaPhoneAlt } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import { useState } from "react";
import Validation from "./SingUpComponente/Validation.jsx";

import "./ContactComponente/Contact.css";
export default function Contact() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    number: "",
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
      <div className="containerContact">
        <p>
          <span>Home</span> / Contact
        </p>
        <div className="boxContact">
          <div className="allContact">
            <div className="textRow">
              <div className="boxIcon">
                <div className="fiIcon">
                  <FaPhoneAlt />
                </div>
                <h4>Call To Us</h4>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <div className="textRow textRow2">
              <div className="boxIcon">
                <div className="fiIcon">
                  <SlEnvolope />
                </div>
                <h4>Write To US</h4>
              </div>
              <p>
                Fill out our form and we will contact
                <br /> you within 24 hours.
              </p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
          <div className="containerForm">
            <form onSubmit={handleValidation}>
              <div className="inputFirst">
                <input
                  type="text"
                  placeholder="Your Name *"
                  onChange={handleInput}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                <input
                  type="email"
                  placeholder="Your Email *"
                  onChange={handleInput}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                <input
                  type="number"
                  placeholder="Your Phone *"
                  onChange={handleInput}
                />
                {errors.number && (
                  <p style={{ color: "red" }}>{errors.number}</p>
                )}
              </div>
              <textarea placeholder="Your Massage"></textarea>
              <div className="btnSendMessage">
                <button>Send Massage</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
