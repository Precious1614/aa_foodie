import React from "react";
import "../UserBoard/userboard.css";
import Logo from "../UserBoard/Logo.png";
import userimage from "../../images/userimage.png";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AiOutlineReconciliation } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";

function UserAside() {
  return (
    <>
      <div className="top-logo">
        <img src={Logo} alt="" />
      </div>

      <div className="side-bar">
        <div className="user-info">
          <img src={userimage} alt="" />
          <h2>John Doe</h2>

          <Link to="/gmail.com"> joedoe@gmail.com</Link>
        </div>
        <div className="user-links">
          <Link className="active">
            <MdDashboard />
            <h3>Dashboard</h3>
          </Link>
          <Link>
            <AiOutlineReconciliation />
            <h3>Transaction History</h3>
          </Link>
          <Link>
            <IoMdSettings />
            <h3>Settings</h3>
          </Link>
          <Link>
            <BiLogOut />
            <h3>Log out</h3>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UserAside;
