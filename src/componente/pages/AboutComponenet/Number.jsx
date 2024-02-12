import { SiHomebridge } from "react-icons/si";
import { LuCircleDollarSign } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { FaSackDollar } from "react-icons/fa6";
import "./Number.css";
export default function Number() {
  return (
    <div className="containerNumber">
      <div className="box">
        <div className="iconStory">
          <SiHomebridge />
        </div>
        <h2>10.5K</h2>
        <p>Sallers active our site</p>
      </div>
      <div className="box">
        <div className="iconStory">
          <LuCircleDollarSign />
        </div>
        <h2>33K</h2>
        <p>Mopnthly Produduct Sale</p>
      </div>
      <div className="box">
        <div className="iconStory">
          <FiShoppingBag />
        </div>
        <h2>45.5K</h2>
        <p>Customer active in our site</p>
      </div>
      <div className="box">
        <div className="iconStory">
          <FaSackDollar />
        </div>
        <h2>25K</h2>
        <p>Anual gross sale in our site</p>
      </div>
    </div>
  );
}
