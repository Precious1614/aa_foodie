import React from "react";
import "../UserBoard/userboard.css";
// import UserAside from "./UserAside";
// import UserTopnav from "./UserTopnav";
import { SHOPS } from "../../Componenets/Popularrestaurant/shop.js";
import { VscDiffAdded } from "react-icons/vsc";
// import { Link } from "react-router-dom";



function Eachproduct() {
  return (
    <>
      {SHOPS.map((shop) => {
        return (
          <div key={shop.id}>
            <h1>{shop.vendorName}</h1>

            {shop.food.map((shop) => (
              <div className="menu-flex" key={shop.id}>
                <div className="menu-img">
                  <img src={shop.foodImg} alt="" />
                </div>
                <div className="menu-info">
                  <h4>{shop.foodName}</h4>
                  <p>{shop.desc}</p>
                  <div className="menu-add">
                    <h4>#{shop.price}</h4>
                    <VscDiffAdded />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
}

export default Eachproduct;
