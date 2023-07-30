import React from "react";
import joinHand from "../../images/joinhand1.png";
import { Link } from "react-router-dom";
import "../Join/join.css";

function Join() {
  return (
    <div className="join__cont">
      <h2>Let's Join Hands</h2>
      <div className="join_img">
        <img src={joinHand} alt="" />
      </div>
      <div className="join-text">
        <span> Join forces with foodie express! you may incraese </span>
        <span> sales and sieze new chances with the aid of</span>
        <span>our technology and user base!</span>
      </div>
      <button className="join-btn">
        <Link to="/#">Join Us</Link>
      </button>
    </div>
  );
}

export default Join;
