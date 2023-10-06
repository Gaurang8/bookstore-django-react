import React from "react";
import { useState, useEffect } from "react";

import cartImg from "../cover/cart.svg";
import crossImg from "../cover/dustbin.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantityValues, setQuantityValues] = useState({});

  const cartDetails = async (token) => {
    try {
      const response = await fetch(`http://localhost:8000/cart/cartdetails/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setCartItems(result);
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleQuantityChange = async (id, quantity) => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (quantity === quantityValues[id]) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8000/cart/cartdetails/?id=${id}&quantity=${quantityValues[id]}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        alert("Quantity Updated");
        cartDetails(token);
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

    const handleRemove = async (id) => {
    const token = localStorage.getItem("token");
    console.log(token);
        
    try {

        const response = await fetch(
        `http://localhost:8000/cart/cartdetails/?id=${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
        );
        console.log(response);

        if (response.ok) {
        const result = await response.json();
        console.log(result);
        alert("Item Removed");
        cartDetails(token);
        } else {
        alert("Something went wrong");
        }
    }
    catch (err) {
        console.log(err);
    }
    };


  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token && token !== "undefined" && token !== null) {
      if (cartItems.length === 0) {
        cartDetails(token);
      }
    } else {
      alert("Please login to add to cart");
    }
  }, []);

  return (
    <div className="main-cart">
      <div className="cart-heading flex ">
        <img src={cartImg} alt="cart img" />
        <h2> My Cart</h2>
      </div>
      <div className="container cart-content flex">
        <div className="cart-items" id="cart-item">
          <div className="cart-item-heading flex">
            <div className="cart-i-img">Items</div>
            <div className="cart-i-name"></div>
            <div className="cart-i-price">Price</div>
            <div className="cart-i-quantity">Quantity</div>
            <div className="cart-i-total">Total</div>
            <div className="item-remove"></div>
          </div>
          {cartItems &&
            cartItems.map((item) => {
              return (
                <div className="cart-i flex" key={item?.id}>
                  <div className="cart-i-img">
                    <img
                      src={`http://127.0.0.1:8000${item?.book?.cover}`}
                      alt="book"
                    />
                  </div>
                  <div className="cart-i-name">
                    <div className="book-n">{item?.book?.title}</div>
                    <p className="p3-text book-w">{item?.book?.author?.name}</p>
                  </div>
                  <div className="cart-i-price">Rs. {item?.book?.price}</div>
                  <div className="cart-i-quantity">
                    <input
                      type="number"
                      name=""
                      min="1"
                      max="20"
                      value={quantityValues[item?.id] || item?.quantity}
                      onChange={(e) =>
                        setQuantityValues({
                          ...quantityValues,
                          [item?.id]: parseInt(e.target.value),
                        })
                      }
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item?.id, item?.quantity)
                      }
                    >
                      change
                    </button>
                  </div>
                  <div className="cart-i-total">
                    Rs. {item?.book_price_total}
                  </div>
                  <div class="item-remove">
                    <img
                      src={crossImg}
                      onClick={() => handleRemove(item?.id)}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="cart-bill">
          <div className="cart-bill-div flex">
            <h5>Subtotal :</h5>
            <p className="p2-text">Rs. {cartItems[0]?.cart?.amount || "00"}</p>
          </div>
          <div className="cart-bill-div flex">
            <h5>Sales Tax : </h5>
            <p className="p2-text">rs.105</p>
          </div>
          <div className="cart-bill-div flex">
            <h5>Coupon Code :</h5>
            <p className="p2-text">
              <a href="">add coupon</a>
            </p>
          </div>
          <div className="cart-bill-grand flex">
            <h5>Grand Total</h5>
            <p className="p-text">
              Rs. {parseInt(cartItems[0]?.cart?.amount) + 105 || "105"}
            </p>
          </div>
          <div className="cart-checkout">
            <div>you are eligible for free delivery</div>
            <div>
              <button className="check-btn">CheckOut</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
