import React, { useEffect } from "react";
import fetchData from "../redux/fetchResults";
import { useDispatch, useSelector } from "react-redux";
import ShowProduct from "./ShowProduct";
import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  useEffect(() => {
    fetchData(dispatch);
  }, []);
  console.log(data);
  return (
    <>
      <div className="input-wrap">
        <h1>Social Media for Travellers</h1>
        <input type="text" placeholder="Search here" />
      </div>
      <div className="data-wrapper">
        {data &&
          data.map((product, index) => {
            return (
              <>
                <ShowProduct product={product} key={index} />
              </>
            );
          })}
      </div>
    </>
  );
};

export default Home;
