import React, { useState, useContext } from "react";
import { HiOutlineMail, HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { Link } from "react-router-dom";
import hand from "../../images/hand.png";
import CartModal from "./CartModal";
import { CartContext } from "../../context/CartContext";
import { click } from "@testing-library/user-event/dist/click";

function UserTopnav() {
  const [show, setShow] = useState(false);
  const [increaseItem, setIncreaseItem] = useState(false);
  const { cart, cartLength } = useContext(CartContext);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  let total = 0;

  let charges = 0;
  let calculatedTotal = () => {
    cart.forEach((item) => {
      total = total + item.price * item.quantity;
    });
  };
  calculatedTotal();

  return (
    <>
      <div className="top-bar">
        <h1>Dashboard</h1>
        <div className="user-menubar">
          <button className="cart-btn">
            <div>
              {click ? (
                <HiOutlineShoppingCart
                  className="user-badge"
                  onClick={handleOpen}
                />
              ) : (
                <HiOutlineShoppingCart
                  className="user-badge"
                  onClick={handleClose}
                />
              )}
              <span className="badge">({cartLength})</span>
            </div>

            {show && <CartModal handleClose={handleClose} />}
          </button>

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
            Hello Christiana
            <span>
              <img src={hand} alt="" />
            </span>
          </p>
        </div>

        <p>Order you meal from various </p>
        <p>restaurants around Ibadan.</p>
      </div>
    </>
  );
}

export default UserTopnav;
