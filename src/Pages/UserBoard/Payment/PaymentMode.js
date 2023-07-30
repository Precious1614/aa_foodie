import React from "react";
import "../../UserBoard/userboard.css";
import UserAside from "../UserAside";
import UserTopnav from "../UserTopnav";
import { AiFillHome } from "react-icons/ai";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { BsCashStack } from "react-icons/bs";
import mastercard from "../../../images/mastercard.png";
import { RiBankFill, RiSmartphoneLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

function PaymentMode() {
  const { cart, cartLength } = useContext(CartContext);

  let total = 0;
  let charges = 0;
  let calculatedTotal = () => {
    cart.forEach((item) => {
      total = total + item.price * item.quantity;
    });
  };
  calculatedTotal();

  let delivery = (1 / 10) * total;
  let discount = 0.05 * total;
  let containerCharge = () => {
    cart.forEach((item) => {
      charges = charges + item.quantity * 200;
    });
  };
  containerCharge();
  let VAT = (6 / 100) * total;
  let allTotal = total + delivery + charges + VAT - discount;
  return (
    <>
      <div className="container">
        <div className="user-container">
          <aside className="user-side">
            <UserAside />
          </aside>
          <main>
            <UserTopnav />
            <div className="vendor-cont">
              <div className="menu-card">
                <div className="contact">
                  <h1>Contact Details</h1>
                  <hr />
                  <form action="" className="form-contact">
                    <div className="label-cont">
                      <label htmlFor="">Full name</label>
                      <input
                        type="text"
                        name="fullName"
                        value="Faith Joe"
                        id=""
                      />
                    </div>
                    <div className="label-cont">
                      <label htmlFor="">Email</label>
                      <input
                        type="email"
                        name="email"
                        value="faithjoe@gmail.com"
                        id=""
                      />
                    </div>
                    <div className="label-cont">
                      <label htmlFor="">Mobile </label>
                      <input
                        type="number"
                        name="phoneNumber"
                        value="0802006007"
                        id=""
                      />
                    </div>
                  </form>
                </div>

                <div className="delivery-address">
                  <hr />
                  <h1>Delivery Address</h1>

                  <div className="form-map">
                    <form action="">
                      <div className="contact-cont">
                        <label htmlFor="">Street Address</label>
                        <input
                          className="add-input"
                          type="text"
                          name="streetaddress"
                          value=""
                          id=""
                        />
                      </div>

                      <div className="contact-cont">
                        <label htmlFor="">Home No </label>
                        <input
                          className="add-input"
                          type="number"
                          name="homeNo"
                          value=""
                          id=""
                        />
                      </div>
                      <div className="add-label">
                        <p>Add Label</p>
                        <div className="add-label_btn">
                          <button>
                            <AiFillHome /> Home
                          </button>
                          <button>
                            <HiOutlineBuildingOffice /> Office
                          </button>
                          <button>
                            <HiBars3CenterLeft /> Other
                          </button>
                        </div>
                      </div>
                    </form>

                    <div className="map">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit cum assumenda, eaque iure quos dicta illo placeat
                      quibusdam illum nihil sapiente, nobis accusamus molestias,
                      fugiat odio. Sint consequatur iure nihil!
                    </div>
                  </div>
                </div>
                <div className="payment-method">
                  <hr />
                  <h1>Payment Method</h1>
                  <hr />
                  <h5>Pay now</h5>
                  <div className="card-trf">
                    <button>
                      <input type="radio" name="" id="" />
                      <img className="mastercard" src={mastercard} alt="" />
                      <p>Pay with one Click-Master Card, Visa and Verve</p>
                    </button>
                    <button>
                      <input type="radio" name="" id="" />
                      <RiBankFill /> <RiSmartphoneLine />
                      <p> Pay with Bank Transfer or USSD</p>
                    </button>
                  </div>
                  <div className="pay-delivery">
                    <h5>Pay now</h5>
                    <button>
                      <input type="radio" name="" id="" />
                      <BsCashStack />
                      <p> Pay on Delivery</p>
                    </button>
                  </div>
                </div>
                <div className="price-total">
                  <hr />

                  <div className="cal-price">
                    <p>
                      Subtotal <span>₦{total}</span>
                    </p>
                    <p>
                      Delivery <span>₦{delivery}</span>
                    </p>
                    <p>
                      Discount <span>₦{discount}</span>
                    </p>
                    <p>
                      Container Charges <span>₦{charges}</span>
                    </p>
                    <p>
                      Including VAT <span>₦{VAT}</span>
                    </p>
                    <p>Total</p>
                    <p>₦{allTotal}</p>
                  </div>
                </div>
                <button className="order-btn">
                  <Link>Place Order Now</Link>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default PaymentMode;
