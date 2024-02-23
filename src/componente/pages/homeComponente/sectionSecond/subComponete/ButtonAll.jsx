import { Link } from "react-router-dom";
import "./ButtonAll.css";

export default function ButtonAll() {
  return (
    <div className="containerButton">
      <Link to="/ViewAllProducts" className="btnProducts">
        View All Products
      </Link>
    </div>
  );
}
