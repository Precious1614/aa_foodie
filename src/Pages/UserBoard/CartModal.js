import React, { useContext, useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { FaRegMinusSquare } from "react-icons/fa";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function CartModal() {
  const { cart, cartLength } = useContext(CartContext);
  const [increaseItem, setIncreaseItem] = useState(false);
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleOpen = () => setShow(true);

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

  const [isDelete, setIsDelete] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);

  const handleDelete = () => {
    let index = cart.findIndex((item) => item.id === item);
    cart.splice(index, 1);
    let cartItem = cart[index];
    setIsDelete(cartItem);
    setIsDelete(true);
    if (isDelete) {
      setIsDelete(false);
      return <span>Deleted...</span>;
    }
  };

  const handleDeleteItem = (food) => {
    let index = cart.findIndex((item) => item === food);
    let itemChange = cart[index];
    let currentQ = (itemChange.quantity -= 1);
    itemChange.totalPrice = itemChange.price * currentQ;
    setDeleteItem(itemChange);
    setDeleteItem(true);
    if (deleteItem) {
      setDeleteItem(false);
    }
  };

  const handleIncreaseItem = (food) => {
    // console.log(index);
    let index = cart.findIndex((item) => item.id === food.id);
    // console.log(cart[index]);
    let itemChange = cart[index];
    let currentQ = (itemChange.quantity += 1);
    itemChange.totalPrice = itemChange.price * currentQ;
    cart[index] = itemChange;
    setIncreaseItem(true);
    if (increaseItem) {
      setIncreaseItem(false);
    }
  };

  return (
    <div className="modal">
      <div className="modal-cont">
        <div className="location">
          <div className="location-box">
            <p>Location</p>
            <input type="text" name="" id="" placeholder="e.g Ajibode" />
          </div>
          <p>ORDER FROM</p>
          <p>Lagos</p>
          <div className="delivery">
            <p>ESTIMATED DELIVERY TIME</p>
            <p className="delivery-time">70-90 minutes</p>
          </div>
        </div>
        <hr />
        <div className="food-order">
          {cart.length !== 0 ? (
            cart.map((food, index) => (
              <div className="each-order">
                <div className="order-name" key={index}>
                  <p>{food.foodName}</p>
                  <p>₦{food.totalPrice}</p>
                </div>

                <div className="remove-order">
                  <div className="remove">
                    <CiSquareRemove onClick={handleDelete} />
                    <p>Remove</p>
                  </div>
                  <div className="remove-add">
                    <FaRegMinusSquare onClick={() => handleDeleteItem(food)} />
                    {food.quantity}
                    <AiOutlinePlusSquare
                      onClick={() => handleIncreaseItem(food)}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Cart is empty</div>
          )}
        </div>
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

        <div className="out-btn">
          <button className="out-btn">
            <Link to="/paymentmode">PROCEED TO CHECKOUT</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
