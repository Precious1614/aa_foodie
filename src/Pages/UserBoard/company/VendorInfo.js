import React from "react";
// import { SHOPS } from "../../Componenets/Popularrestaurant/shop";

function VendorInfo() {
  return (
    <div className="vendor-cont">
      <div className="vendor-items">
        <h2>We need to know more</h2>
        <h2>about your restaurant</h2>
        <hr />
        <div className="vendor-address">
          <h4>Restaurant 1</h4>
          <p>This information will help us to make sure</p>
          <p>that customers find your restaurant</p>

          <div>
            <hr />
          </div>

          <div className="enter-add">
            {/* *Required */}
            <p>Enter the restaurant address</p>
            <input type="text" name="" id="" />
          </div>
          <div className="location">or</div>

          <div className="new-address">
            <button>Add a new restaurant</button>
          </div>
        </div>

        <div className="seeBtn">
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default VendorInfo;
