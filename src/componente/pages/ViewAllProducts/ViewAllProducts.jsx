import { useState } from "react";
import "./ViewAllProducts.css";
import { Link } from "react-router-dom";
import { viewAllProducts } from "./viewAllProducts";

import Star from "../homeComponente/sectionSecond/subComponete/StarsFeedback";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
export default function ViewAllProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = viewAllProducts.slice(firstIndex, lastIndex);
  const npage = Math.ceil(viewAllProducts.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changePage(id) {
    setCurrentPage(id);
  }

  return (
    <>
      <p
        style={{
          marginTop: 10,
          marginLeft: 80,
        }}
      >
        <span
          style={{
            color: "silver",
          }}
        >
          Home
        </span>
        / View All Products
      </p>
      <div className="conatineViewAll">
        {records.map((user) => (
          <div key={user.id}>
            <div className="sliderCart">
              <div className="containerCart">
                <div className="containerImg">
                  <img
                    src={import.meta.env.VITE_PUBLIC_URL + user.image}
                    alt="cart"
                  />
                  <div className="icon heart">
                    <FaRegHeart />
                  </div>
                  <div className="icon eyes">
                    <IoEyeOutline />
                  </div>
                  <div className="ContainerAdd">
                    <button className="btnAdd">Add To Cart</button>
                  </div>
                </div>
                <div>
                  <div className="textCart">
                    <h5>{user.name}</h5>
                    <div className="cartprice flex">
                      <span>${user.price}</span>
                      <div className="feedback">
                        <div>
                          <Star stars={user.stars} reviews={user.reviews} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ul className="paginationsAll">
        <li className="linkPre">
          <Link className="link " onClick={prePage}>
            Prev
          </Link>
        </li>
        {numbers.map((item, i) => (
          <li key={i} className={currentPage === item ? "activePage" : " "}>
            <Link className="link" onClick={() => changePage(item)}>
              {item}
            </Link>
          </li>
        ))}
        <li className="linkNext">
          <Link className="link " onClick={nextPage}>
            Next
          </Link>
        </li>
      </ul>
    </>
  );
}
