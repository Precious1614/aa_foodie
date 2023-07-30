import React from "react";
import "../Testimonial/testimonial.css";
import { TESTIMONY } from "./testimony";

const Testimonials = (props) => {
  const { id, desc, personImage, personName } = props.data;

  return (
    <div className="card-testimonial" key={id}>
      <p>{desc}</p>
      <div className="card-img">
        <img src={personImage} alt="" />
        <p>{personName}</p>
      </div>
    </div>
  );
};

export default function Testimonial() {
  return (
    <div className="test__cont">
      <h2>Our User Testimonials</h2>
      <div className="aa__slider-cont">
        {TESTIMONY.map((testimony) => (
          <Testimonials data={testimony} />
        ))}
      </div>
    </div>
  );
}
