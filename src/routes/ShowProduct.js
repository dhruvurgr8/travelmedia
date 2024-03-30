import React, { useState } from "react";
import "./show-product.css";
import { useNavigate } from "react-router-dom";
const ShowProduct = ({ product }) => {
  const navigate = useNavigate();
  const [isTrunc, setIsTrunc] = useState(true);
  const toggleReadMore = () => {
    setIsTrunc(!isTrunc);
  };
  const navigateToDetails = () => {
    navigate(`item/${product.id}`);
  };
  return (
    <>
      <div className="card">
        <img
          height={280}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMd7VcYrop0opW5_9Gyq1MKU1D7UVBZIAPFA&usqp=CAU"
        />
        <h3 className="title">{product.title}</h3>
        <div className="btn-para-wrapper">
          <p>
            {isTrunc ? product.body.slice(0, 100) : product.body}...
            {isTrunc && <a onClick={toggleReadMore}>Read more...</a>}
            {!isTrunc && <a onClick={toggleReadMore}>Read less</a>}
          </p>
          <div onClick={navigateToDetails}>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;