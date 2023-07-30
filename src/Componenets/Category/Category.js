import React from "react";
import { Link } from "react-router-dom";
import '../Category/category.css'

function Category() {
  return (
    <div className="aa__category-cont">
      <h1>Top Category</h1>
      <div className="aa__category">
      <button className="top__btn">
        <Link to="/#">Turkey</Link>
      </button>
      <button className="top__btn">
        <Link to="/#">Jollof</Link>
      </button>
      <button className="top__btn">
        <Link to="/#">Local Food</Link>
      </button>
      <button className="top__btn">
        <Link to="/#">Snacks</Link>
      </button>
      <button className="top__btn">
        <Link to="/#">Healthy</Link>
      </button>
      <button className="top__btn">
        <Link to="/#">Traditional</Link>
      </button>
      <button className="top__btn">
        <Link to="/#">Sea Food</Link>
      </button>
      </div>
    </div>
  );
}

export default Category;
