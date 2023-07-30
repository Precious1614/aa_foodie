import React, { useContext } from "react";
import "../UserBoard/userboard.css";
import MoreVendors from "./MoreVendors";
import ParticularVendor from "./ParticularVendor";
import UserAside from "./UserAside";
import UserTopnav from "./UserTopnav";
import { CartContext } from "../../context/CartContext";

function Userboard() {
  const { cart, cartLength } = useContext(CartContext);
  return (
    <div className="container">
      <div className="user-container">
        <aside className="user-side">
          <UserAside />
        </aside>
        <main>
          <UserTopnav cart={cart} cartLength={cartLength} />
          <MoreVendors />
        </main>
      </div>
    </div>
  );
}

export default Userboard;
