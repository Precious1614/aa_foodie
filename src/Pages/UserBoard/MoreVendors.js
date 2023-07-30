import React from "react";
import { SHOPS } from "../../Componenets/Popularrestaurant/shop";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";
import { useState } from "react";

const Restaurant = (props,) => {
  const { id, vendorName, productImage } = props.data;

  return (
    <div className="vendor-info" key={id}>
      <div className="vendor-img">
        <img src={productImage} alt="" />
      </div>
      <div className="vendor-name">
        <Link to="/particularvendor">{vendorName}</Link>
        {/* <button>{vendorName}</button> */}

        <div className="heart-icon">
          <BiHeart />
          <p>
            67% <span> (761)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

function MoreVendors() {
  const [showMore, setShowMore] = useState(6);

  const showMoreItems = (e) => [setShowMore((prevalue) => prevalue + 5)];

  return (
    <div className="vendor-cont">
      <div className="vendor-items">
        <h2>Vendors</h2>
        <hr />
        <div className="vendor-card">
          {SHOPS.slice(0, showMore).map((shop, index) => (
            <Restaurant data={shop} />
            
          ))}
        </div>

        <div className="seeBtn">
          {showMore < SHOPS.length && (
            <button onClick={showMoreItems}>See More</button>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default MoreVendors;
