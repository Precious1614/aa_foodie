import React, { useContext } from "react";
import Navbar from "../../Componenets/Navbar/Navbar";
import "../../Pages/page.css";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { useState } from "react";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { RestaurantbaseContext } from "../../context/RestaurantbaseContext";
import { useNavigate } from "react-router-dom";

function Restaurant() {
  const [inputFullname, SetInputfullname] = useState("");
  const [inputEmail, SetInputEmail] = useState("");
  const [inputPassword, SetInputPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [inputNumber, setInputeNumber] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  // const { restaurantbase, setRestaurantbase } = useContext(DatabaseContext);

  // function handleRegister(e) {
  //   e.preventDefault();

  //   if (inputfullname.trim() === "") {
  //     alert("Please enter your name");
  //     return;
  //   }

  //   if (inputemail.trim() === "") {
  //     alert("Please enter your email");
  //     return;
  //   }

  //   if (inputpassword.trim() === "") {
  //     alert("Please enter a password");
  //     return;
  //   }

  //   if (inputpassword !== confirmpassword) {
  //     alert("Passwords do not match");
  //     return;
  //   }

  //   const userExists = restaurantbase.find((data) => data.email === inputemail);
  //   if (userExists) {
  //     alert("This user already exists");
  //     return;
  //   }

  //   const newUser = {
  //     fullName: inputfullname,
  //     email: inputemail,
  //     password: inputpassword,
  //   };

  //   restaurantbase.push(newUser);
  //   localStorage.setItem("restaurantbase", JSON.stringify(restaurantbase));

  //   alert("Signup successful");
  //   console.log(restaurantbase);
  //   navigate("/login");
  // }

  const handleRegisterBKD = async () => {
    try {
      let requestBKD = {
        BusinessName: inputFullname,
        Email: inputEmail,
        Password: inputPassword,
        PhoneNumber: inputNumber,
        cPassword: confirmPassword,
        Location: inputLocation,
        role: role,
      };

      let response = await axios.post(
        "https://food-r1c5.onrender.com/api/v1/vendors/register",

        requestBKD
      );

      console.log(response);
      if (response.status === true) {
        toast(response.data.message);
        navigate("/login");
      } else {
        toast(response.data.message);
      }
    } catch (error) {
      toast(error);
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="aa__card-cont">
        <h1>Restaurant Account Signup</h1>
        <p>Signup for a New Account</p>
        <div className="aa__card">
          <form action="#" className="aa__signup-form">
            <div className="aa__input">
              <BsPerson />
              <input
                type="text"
                name=""
                id=""
                placeholder="Full Name"
                value={inputFullname}
                onChange={(e) => SetInputfullname(e.target.value)}
              />
            </div>
            <div className="aa__input">
              <HiOutlineMail />
              <input
                type="Email"
                name=""
                id=""
                placeholder="Email"
                value={inputEmail}
                onChange={(e) => SetInputEmail(e.target.value)}
              />
            </div>
            <div className="aa__input">
              <HiOutlineMail />
              <input
                type="text"
                name=""
                id="mynumber"
                placeholder="Phone No"
                value={inputNumber}
                onChange={(e) => setInputeNumber(e.target.value)}
                required
              />
            </div>
            <div className="aa__input">
              <GoLocation />
              <input
                type="text"
                name=""
                id=""
                placeholder="Location"
                value={inputLocation}
                onChange={(e) => setInputLocation(e.target.value)}
              />
            </div>
            <div className="aa__input">
              <CiLock />
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                value={inputPassword}
                onChange={(e) => SetInputPassword(e.target.value)}
              />
              <AiOutlineEyeInvisible />
            </div>
            <div className="aa__input">
              <CiLock />
              <input
                type="password"
                name=""
                id=""
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
              />
              <AiOutlineEyeInvisible />
            </div>
            <div className="aa__input">
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="customer">Customer</option>
                <option value="restaurant">Restaurant</option>
              </select>
            </div>

            <button type="button" onClick={(e) => handleRegisterBKD(e)}>
              Get Started
            </button>
          </form>
          <small>
            By clicking this button, you agree to our terms of services and
            disclaimer
          </small>
        </div>
      </div>
    </>
  );
}

export default Restaurant;
