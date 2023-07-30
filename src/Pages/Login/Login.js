import React, { useState } from "react";
import Navbar from "../../Componenets/Navbar/Navbar";
import "../../Pages/page.css";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import { AiOutlineEyeInvisible } from "react-icons/ai";
// import { DatabaseContext } from "../../context/DatabaseContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  // const { database, restaurantbase } = useContext(DatabaseContext);

  // JSON.stringify(localStorage.getItem("database"));
  // JSON.stringify(localStorage.getItem("restaurantbase"));

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   if (!role) {
  //     alert("Please select a role");
  //     return;
  //   }

  //   if (inputemail.trim() === "") {
  //     alert("Please enter your email");
  //     return;
  //   }

  //   const userData = role === "customer" ? database : restaurantbase;

  //   const emailExist = userData.find((data) => data.email === inputemail);

  //   if (!emailExist) {
  //     alert("Email not found");
  //     return;
  //   }

  //   if (inputpassword.trim() === "") {
  //     alert("Please enter your password");
  //     return;
  //   }

  //   const correctPassword = userData.find(
  //     (data) => data.password === inputpassword
  //   );

  //   if (!correctPassword) {
  //     alert("Incorrect password");
  //     return;
  //   }

  //   alert("Login successful");
  //   navigate("/userboard");
  // };

  const handleLogin = async () => {
    try {
      let requestBKD = {
        Email: inputEmail,
        Password: inputPassword,
        role: role,
      };
      let response = await axios.post(
        "https://food-r1c5.onrender.com/api/v1/auth/login",
        requestBKD
      );

      console.log(response);
      if (response.status === "00") {
        toast(response.data.message);
        navigate("/userboard");
      } else {
        toast(response.data.message);
      }
    } catch (error) {
      toast(error);
    }
  };

  // let handleLogin = async () => {
  //   let req = {
  //     email: inputEmail,
  //     password: inputPassword,
  //     role: role,
  //   };
  //   //console.log(req)
  //   try {
  //     if (req.role === "Customer") {
  //       let response = await axios.post(
  //         "https://food-r1c5.onrender.com/api/v1/auth/login",
  //         req
  //       );
  //       console.log(response);
  //       localStorage.setItem("token", response.data.token);
  //       localStorage.setItem("userData", JSON.stringify(response.data));
  //       localStorage.setItem("accountType", "Customer");
  //       console.log(localStorage);
  //       // if(response.data.statusCode== "99"){
  //       //   toast(response.data.message)
  //       // }
  //       if (response.data.status === "00") {
  //         toast(response.data.message);
  //         navigate("/userboard");
  //       } else {
  //         toast(response.data.message);
  //       }
  //     }
  //     if (req.role === "Vendor") {
  //       let response = await axios.post(
  //         "https://food-r1c5.onrender.com/api/v1/auth/login",
  //         req
  //       );
  //       console.log(response);
  //       localStorage.setItem("token", response.data.token);
  //       localStorage.setItem("vendorData", JSON.stringify(response.data));
  //       localStorage.setItem("accountType", "Vendor");
  //       // if(response.data.statusCode== "99"){
  //       //   toast(response.data.message)
  //       // }
  //       if (response.data.status === "00") {
  //         toast(response.data.message);
  //         navigate("/userboard");
  //       } else {
  //         toast(response.data.message);
  //       }
  //     }
  //   } catch (error) {
  //     toast(error.message);

  //     //console.log(response.data)
  //   }
  // };
  // let handleSubmit = () => {
  //     let userExist = users.findIndex(user => user.email === email)
  //     if(userExist == -1){
  //         alert("User does not exist, Please SignUp" )
  //         navigate('/customer')

  //     }
  //     else{
  //         if(users[userExist].password === password){
  //             props.changeLoginState()
  //             navigate("/vendors")
  //         }
  //         else{
  //             alert("Wrong Password! Kindly check and try again")
  //         }
  //     }
  // }

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="aa__card-cont login-cont">
        <h1>Hello! Login</h1>
        <div className="aa__card login-form">
          <form className="aa__signup-form">
            <div className="aa__input">
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="customer">Customer</option>
                <option value="restaurant">Restaurant</option>
              </select>
            </div>

            <div className="aa__input">
              <HiOutlineMail />
              <input
                type="email"
                placeholder="Phone No/Email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />
            </div>

            <div className="aa__input">
              <CiLock />
              <input
                type="password"
                placeholder="Password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
              />
              <AiOutlineEyeInvisible />
            </div>
            <button type="button" onClick={(e) => handleLogin(e)}>
              Login
            </button>
          </form>
          <small>
            Forgot Password? <Link to="/#">Click here</Link>
          </small>
        </div>
      </div>
    </>
  );
}

export default Login;
