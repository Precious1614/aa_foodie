import React from "react";
import { HiOutlineMail, HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { Link } from "react-router-dom";
import hand from "../../../images/hand.png";

function VendorTopnav() {
  return (
    <>
      <div className="top-bar">
        <h1>Dashboard</h1>
        <div className="user-menubar">
          <Link>
            <HiOutlineShoppingCart className="user-badge" />
            <span className="badge">0</span>
          </Link>
          <Link>
            <HiOutlineMail className="user-badge" />
            <span className="badge">0</span>
          </Link>
          <Link>
            <MdOutlineNotificationsNone className="user-badge" />
            <span className="badge">0</span>
          </Link>
        </div>
      </div>
      <div className="user-name">
        <div className="hand-cont">
          <p>
            Hello AirFoods
            <span>
              <img src={hand} alt="" />
            </span>
          </p>
        </div>
        <h2>Grow an online business with Foodie Xpress</h2>
        <p>With our help, you can make sales, boost your </p>
        <p>income, and manage your online busness.</p>
        <p>Here is where your path to digitization</p>
        <p>Begins</p>
      </div>
    </>
  );
}

export default VendorTopnav;
