import React from "react";
import { Link } from "react-router-dom";
import "../Footer/footer.css";
import footerLogo from "../Footer/Logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-cont">
        <div className="footer__logo-img">
          <img src={footerLogo} alt="" />
        </div>
        <div className="links-cont">
          <div className="options">
            <h2>Let'S Join Hands</h2>
            <Link>Careers</Link>
            <Link>Foodie Xpress Partners</Link>
            <Link>Couriers</Link>
          </div>
          <div className="options">
            <h2>Links</h2>
            <Link>About Us</Link>
            <Link>Contact US</Link>
            <Link>FAQs</Link>
            <Link>Blog</Link>
            <Link>Security</Link>
          </div>
          <div className="options">
            <h2>Social Media</h2>
            <Link>Facebook</Link>
            <Link>Instagram</Link>
            <Link>Twitter</Link>
          </div>
          <div className="options">
            <br />
            <Link>Terms and conditions</Link>
            <Link>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
