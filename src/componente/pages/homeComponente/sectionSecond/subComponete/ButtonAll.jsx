import { Link } from "react-router-dom";
import "./ButtonAll.css";

export default function ButtonAll() {
  return (
    <div className="containerButton">
      <Link className="btnProducts">View All Products</Link>
    </div>
  );
}
