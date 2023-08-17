import React, { useContext, useEffect, useState } from "react";
import "../UserBoard/userboard.css";
import UserAside from "./UserAside";
import UserTopnav from "./UserTopnav";
import { VscDiffAdded } from "react-icons/vsc";
import { CartContext } from "../../context/CartContext";
import eggstar from "../../images/Foodpicx/eggstar.png";
import ricedodo from "../../images/Foodpicx/ricedodo.png";
import bigmeal from "../../images/Foodpicx/bigmeal.png";

let food = [
  {
    id: 1,
    quantity: "",
    foodName: "EggStar Meal",
    foodImg: eggstar,
    desc:
      "An Egg served with White Rice, Spaghetti, Fried Rice or Jollof Rice with a delicious sauce.",
    price: 500,
  },
  {
    id: 2,
    foodName: "Refuel Dodo Max Meal",
    foodImg: bigmeal,
    desc:
      "One piece of Soulfully Spiced Fried Chicken served with your choice of Spaghetti, Fried PLUS our tasty NEW Plaintain Cubes and a refreshing PET drink",
    price: 500,
  },
  {
    id: 3,
    foodName: "New Big Crew Meal",
    foodImg: ricedodo,
    desc:
      "Enjoy a succulent full Rotisserie Chicken served with 4 portions of Spaghetti, Fried or Jollof Rice PLUS 2 portions of Coleslaw Moin-Moin or Dodo Cubes and 4 x PET drinks",
    price: 500,
  },
  {
    id: 4,
    foodName: "EggStar Meal",
    foodImg: bigmeal,
    desc:
      "An Egg served with White Rice, Spaghetti, Fried Rice or Jollof Rice with a delicious sauce.",
    price: 500,
  },
  {
    id: 5,
    foodName: "Refuel Dodo Max Meal",
    foodImg: eggstar,
    desc:
      "One piece of Soulfully Spiced Fried Chicken served with your choice of Spaghetti, Fried PLUS our tasty NEW Plaintain Cubes and a refreshing PET drink",
    price: 500,
  },
  {
    id: 6,
    foodName: "New Big Crew Meal",
    foodImg: bigmeal,
    desc:
      "Enjoy a succulent full Rotisserie Chicken served with 4 portions of Spaghetti, Fried or Jollof Rice PLUS 2 portions of Coleslaw Moin-Moin or Dodo Cubes and 4 x PET drinks",
    price: 500,
  },
  {
    id: 7,
    foodName: "EggStar Meal",
    foodImg: ricedodo,
    desc:
      "An Egg served with White Rice, Spaghetti, Fried Rice or Jollof Rice with a delicious sauce.",
    price: 500,
  },
  {
    id: 8,
    foodName: "Refuel Dodo Max Meal",
    foodImg: eggstar,
    desc:
      "One piece of Soulfully Spiced Fried Chicken served with your choice of Spaghetti, Fried PLUS our tasty NEW Plaintain Cubes and a refreshing PET drink",
    price: 500,
  },
  {
    id: 9,
    foodName: "New Big Crew Meal",
    foodImg: eggstar,
    desc:
      "Enjoy a succulent full Rotisserie Chicken served with 4 portions of Spaghetti, Fried or Jollof Rice PLUS 2 portions of Coleslaw Moin-Moin or Dodo Cubes and 4 x PET drinks",
    price: 500,
  },
];

function ParticularVendor() {
  const [shopItems, setShopItems] = useState([]);
  useEffect(() => {
    setShopItems(food);
  }, []);
  const { cart, setCartLength } = useContext(CartContext);

  const handleAddCart = (foodItem) => {
    if (cart.length === 0) {
      foodItem.quantity = 1;
      cart.push(foodItem);
    } else {
      const findfoodItem = cart.findIndex(
        (cartfoodItem) => foodItem === cartfoodItem
      );
      if (findfoodItem === -1) {
        foodItem.quantity = 1;
        cart.push(foodItem);
      } else {
        let current = cart[findfoodItem];
        current.quantity += 1;
      }
    }
    setCartLength(cart.length);
  };
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
                <h1>Chicken Republic</h1>
                {shopItems.map((shop, index) => {
                  return (
                    <div key={index}>
                      {/* <h1>{shop.vendorName}</h1> */}
                      <div className="menu-flex" key={shop.id}>
                        <div className="menu-img">
                          <img src={shop.foodImg} alt="" />
                        </div>
                        <div className="menu-info">
                          <h4>{shop.foodName}</h4>
                          <p>{shop.desc}</p>
                          <div className="menu-add">
                            <h4>#{shop.price}</h4>

                            <VscDiffAdded
                              onClick={() => {
                                handleAddCart(shop);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default ParticularVendor;
