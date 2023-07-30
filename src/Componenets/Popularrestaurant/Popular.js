import React from "react";
import "../Popularrestaurant/popular.css";
import { SHOPS } from "./shop";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";

const Vendor = (props) => {
  const { id, vendorName, productImage } = props.data;

  return (
    <div className="food-card" key={id}>
      <div className="img-card">
        <img src={productImage} alt="" />
      </div>
      <div className="card-text">
        <Link to="/#">{vendorName}</Link>
        <div className="icon-cont">
          <BiHeart />
          <p>
            67% <span> (761)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

function Popular() {
  return (
    <div className="aa__popular-cont">
      <h1>Popular Restaurants</h1>

      <div className="popular-card">
        {SHOPS.slice(0,6).map((shop) => (
          <Vendor data={shop} />
        ))}
      </div>
    </div>
  );
}

export default Popular;
