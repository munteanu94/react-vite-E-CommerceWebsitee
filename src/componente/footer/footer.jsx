import { CiPaperplane } from "react-icons/ci";
import { TbCircleLetterC } from "react-icons/tb";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

import Qrcode from "../img/Qrcode.png";
import google from "../img/google.png";
import app from "../img/app.png";
import "./footer.css";
export default function Footer() {
  return (
    <div className="containerFooter">
      <div className="containerColum">
        <div>
          <h2>Exclusive</h2>
          <h4>Subscribe</h4>
          <p>Get 10% off your first order</p>
          <div className="inputWrapper">
            <input type="text" placeholder="Enter your email" />
            <CiPaperplane className="iconPlane" />
          </div>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li>
              111 Bijoy sarani, Dhaka,
              <br /> DH 1515, Bangladesh.
            </li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        <div>
          <h4>Account</h4>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <h4>Quick Link</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4>Download App</h4>
          <p>Save $3 with App New User Only</p>
          <div className="containerApp">
            <img src={Qrcode} alt="Qrcode" />
            <img src={google} alt="google" />
            <img src={app} alt="app" />
          </div>
          <div className="socialMedia">
            <RiFacebookLine />
            <CiTwitter />
            <FaInstagram />
            <RiLinkedinLine />
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <TbCircleLetterC />

        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
}
