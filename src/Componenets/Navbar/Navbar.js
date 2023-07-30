import React from "react";
import "./navbar.css";
import Logo from "../Navbar/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="">
      <div className="navbar-cont">
        <div className="navbar">
          <div className="aa-logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="aa-navlinks">
            <ul>
              <li>
                <Link to="/" className="menuItems">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/" className="menuItems">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="menuItems">
                  Start Your Order
                </Link>
              </li>
            </ul>
          </div>
          <div className="aa-navbtn">
            <button
              onClick={() => {
                setShowLinks(!showLinks);
              }}
            >
              Get Started
            </button>
            {showLinks && (
              <div className="try-relative">
                <div className="get-menuitems">
                  <ul>
                    <li>
                      <Link to="/login" className="get-link get-login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/customerpage" className="get-link">
                        Customer Signup
                      </Link>
                    </li>
                    <li>
                      <Link to="/restaurantpage" className="get-link">
                        Restaurant Signup
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
