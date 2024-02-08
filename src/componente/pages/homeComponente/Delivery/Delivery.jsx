import "./Delivery.css";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";
export default function Delivery() {
  return (
    <div className="containerDelivery">
      <div className="delivery">
        <div className="containerIcon">
          <TbTruckDelivery className="iconDelivery" />
        </div>
        <h4>FREE AND FAST DELIVERY</h4>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="delivery">
        <div className="containerIcon">
          <RiCustomerServiceLine className="iconDelivery" />
        </div>
        <h4>24/7 CUSTOMER SERVICE</h4>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="delivery">
        <div className="containerIcon">
          <SiAdguard className="iconDelivery" />
        </div>
        <h4>MONEY BACK GUARANTEE</h4>
        <p>We reurn money within 30 days</p>
      </div>
    </div>
  );
}
