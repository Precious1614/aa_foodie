import React, { useState } from "react";
import Navbar from "../../Componenets/Navbar/Navbar";
import "../../Pages/page.css";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Customer = () => {
  const [inputFullname, setInputFullname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputNumber, setInputeNumber] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  // Handleregister FROM FRONT END

  // const handleRegister = (e) => {
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

  //   const userExists = database.find((data) => data.email === inputemail);
  //   if (userExists) {
  //     alert("This user already exists");
  //     return;
  //   }

  //   const newUser = {
  //     fullName: inputfullname,
  //     email: inputemail,
  //     password: inputpassword,
  //   };

  //   database.push(newUser);
  //   localStorage.setItem("database", JSON.stringify(database));

  //   alert("Signup successful");
  //   console.log(database);
  //   navigate("/login");
  // };

  const handleRegisterBKD = async () => {
    let firstName = inputFullname.split("")[0];
    let lastName = inputFullname.split("")[1];
    try {
      let requestBKD = {
        FirstName: firstName,
        LastName: lastName,
        Email: inputEmail,
        Password: inputPassword,
        PhoneNumber: inputNumber,
        cPassword: confirmPassword,
        role: role,
      };

      let response = await axios.post(
        "https://food-r1c5.onrender.com/api/v1/users/register",
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
        <h1>Customer Account Signup</h1>
        <p>Signup for a New Account</p>
        <div className="aa__card">
          {/* Input fields */}
          <form action="#" className="aa__signup-form">
            <div className="aa__input">
              <BsPerson />
              <input
                type="text"
                name=""
                id="myfullname"
                placeholder="Full Name"
                value={inputFullname}
                onChange={(e) => setInputFullname(e.target.value)}
                required
              />
            </div>
            <div className="aa__input">
              <HiOutlineMail />
              <input
                type="text"
                name=""
                id="myemail"
                placeholder="Email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                required
              />
            </div>
            <div className="aa__input">
              <CiLock />
              <input
                type="password"
                name=""
                id="mypassword"
                placeholder="Password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                required
              />
              <AiOutlineEyeInvisible />
            </div>
            <div className="aa__input">
              <CiLock />
              <input
                type="password"
                name=""
                id="myconfirmpassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <AiOutlineEyeInvisible />
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
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="customer">Customer</option>
                <option value="restaurant">Restaurant</option>
              </select>
            </div>

            <button onClick={(e) => handleRegisterBKD(e)} type="button">
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
};

export default Customer;
