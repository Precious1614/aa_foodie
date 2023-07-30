import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
// import Navbar from "./Componenets/Navbar/Navbar";
import Customer from "./Pages/Customersignup/Customer";
import Home from "./Pages/Home/Home";
import Restaurant from "./Pages/Restaurantsignup/Restaurant";
import Login from "./Pages/Login/Login";
import Userboard from "./Pages/UserBoard/Userboard";
import ParticularVendor from "./Pages/UserBoard/ParticularVendor";
import PaymentMode from "./Pages/UserBoard/Payment/PaymentMode";
import Success from "./Pages/UserBoard/Payment/Success";
import { DatabaseProvider } from "./context/DatabaseContext";
import { CartProvider } from "./context/CartContext";
// import { RestaurantbaseProvider } from "./context/RestaurantbaseContext";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Customer /> */}
      {/* <Userboard/> */}
      {/* <ParticularVendor/> */}
      {/* <Eachproduct /> */}
      {/* <VendorBoard /> */}

      <CartProvider>
        <DatabaseProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <DatabaseProvider>
                  <Login />
                </DatabaseProvider>
              }
            />
            <Route
              path="/customerpage"
              element={
                <DatabaseProvider>
                  <Customer />
                </DatabaseProvider>
              }
            />
            <Route
              path="/restaurantpage"
              element={
                <databaseProvider>
                  <Restaurant />
                </databaseProvider>
              }
            />
            <Route path="/userboard" element={<Userboard />} />
            <Route
              path="/particularvendor"
              element={
                <cartProvider>
                  <ParticularVendor />
                </cartProvider>
              }
            />
            <Route path="/paymentmode" element={<PaymentMode />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </DatabaseProvider>
      </CartProvider>
    </>
  );
}

export default App;
