import sing1 from "./sing1.png";
import "./CreateAcount.css";
import BtnAccount from "./btnAccount/btnAcount.jsx";
import { FcGoogle } from "react-icons/fc";
import BtnGoogle from "./btnAccount/btnGoogle.jsx";
import { Link } from "react-router-dom";
export default function CreateAcount() {
  return (
    <>
      <div className="ContainerAcount">
        <div className="boxImg">
          <img src={sing1} alt="poza" />
        </div>
        <div className="boxInput">
          <div>
            <h2>Create an account</h2>
            <p>Enter your details below</p>
          </div>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <div className="btn">
            <BtnAccount name="Create Acount" />
            <BtnGoogle />
          </div>
          <div className="boxLogIn">
            <p>Already have account?</p>
            <Link className="linkLogIn">Log In</Link>
          </div>
        </div>
      </div>
    </>
  );
}
