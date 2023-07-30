import React from "react";
import Navbar from "../../Componenets/Navbar/Navbar";
import Header from "../../Componenets/Header/Header";
import Popular from "../../Componenets/Popularrestaurant/Popular";
import Category from "../../Componenets/Category/Category";
import Join from "../../Componenets/Join/Join";
import Footer from "../../Componenets/Footer/Footer";
import Testimonial from "../../Componenets/Testimonial/Testimonial";

function Home() {
  return (
    <>
      <div className="aa__container">
        <Navbar />
        <Header />
        <Popular />
        <Category />
        <Join />
        <Testimonial />
        <Footer />
      </div>

      {/* <Link to="customerpage"> customer </Link> */}
    </>
  );
}

export default Home;
