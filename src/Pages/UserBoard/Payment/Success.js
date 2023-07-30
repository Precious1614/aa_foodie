import React from "react";
import { BiArrowBack } from "react-icons/bi";

import { Link } from "react-router-dom";
import mark from "../../../images/mark.png";

function Success() {
  return (
    <div className="modal">
      <div className="success-cont">
        <div className="img-mark">
          <img src={mark} alt="" />
        </div>
        <div className="success-text">
          <h3>Payment Sucessful</h3>
          <p>You will a call from our </p>
          <p>dispatch rider</p>
        </div>
        <div className="success-btn">
          <button className="success-btn">
            <BiArrowBack />
            <Link>Back to Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
