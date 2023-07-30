import React from "react";
import { GoLocation } from "react-icons/go";
import phone from "../../images/Group157.png";
import zig from "../../images/zigzag.png";
import "../Header/header.css";

function Header() {
  return (
    <header>
      <div className="header__cont">
        <div className="header__left">
          <h1>
            Delivering Satisfaction <span className="every">Every day</span>
          </h1>
          <img src={zig} alt="" />
          <p>Browse Restaurants Near You</p>
          <form className="browse__cont">
            <input type="text" name="" id="" placeholder="Enter Address" />
            <div className="location-cont">
              <GoLocation />
              <button>use current location</button>
            </div>
          </form>
        </div>

        <div className="header__right">
          <img src={phone} alt="" />
          
        </div>
      </div>
    </header>
  );
}

export default Header;
