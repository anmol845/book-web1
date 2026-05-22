import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-page">
      <div className="cart-header">
        <div>
          <h1>Your Cart</h1>
          <p>{cart.length} item{cart.length !== 1 ? "s" : ""} added</p>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>No items in cart</p>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div className="cart-item" key={`${item.title}-${index}`}>
              <div className="cart-item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                {item.author && <p className="cart-item-author">{item.author}</p>}
                <p className="cart-item-price">₹{item.price}</p>
                <button
                  type="button"
                  className="cart-item-remove"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;