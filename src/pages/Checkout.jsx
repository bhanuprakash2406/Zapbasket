import React, { useEffect, useContext } from 'react'
import '../style/CheckOut.css'
import { CiCircleChevLeft } from "react-icons/ci";

import { CartContext } from "../context/CartContext";

import { bestSelling } from "../data/bestSelling";
import { justArrived } from "../data/justArrived";
import { mostPopular } from "../data/mostPopular";
import { featured } from "../data/featured";

function Checkout({ close }) {

  const { cart, addItem, removeItem, clearCart  } = useContext(CartContext);

  const allProducts = [
    ...bestSelling,
    ...justArrived,
    ...mostPopular,
    ...featured
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const cartItems = Object.entries(cart);

const totalAmount = cartItems.reduce((sum, [id, qty]) => {

  const product = allProducts.find(p => p.id === id);

  if (!product) return sum;

  const price = Number(product.mrp.replace("₹",""));

  return sum + price * qty;

}, 0);

function Submit(){
  clearCart();
  alert("Order placed successfully!");
  close();
}
const deliveryFee = 20;
const platformFee = 5;

const grandTotal = totalAmount + deliveryFee + platformFee;

  return (
    <div className='checkout'>
  <div className="lay">
    <div className='one'>
      <CiCircleChevLeft className='TbXboxX' onClick={close}/>
      <h3>My Cart</h3>
    </div>

    {/* Cart Products */}
    <div className="cart_products">

      {cartItems.length === 0 && (
        <p className='empty'>Your cart is empty</p>
      )}

      {cartItems.map(([id, qty]) => {

        const product = allProducts.find(p => p.id === id);
        if (!product) return null;

        const price = Number(product.mrp.replace("₹",""));

        return (
          <div className="cart_card" key={id}>

            <img src={product.img} width="70" />

            <div className="cart_info">
              <p>{product.name}</p>
              <div className="price_qty">
              <span>{product.qty}</span>
              <p style={{fontWeight:'600',color:'black',margin:'3px 0'}}>₹{price * qty}</p>
            </div>
            </div>

            <div className="cart_counter">
              <button onClick={() => removeItem(id)}>-</button>
              <p style={{fontWeight:'bold'}}>{qty}</p>
              <button onClick={() => addItem(id)}>+</button>
            </div>

          </div>
        );

      })}

      {/* Billing Section */}
    {cartItems.length > 0 && (
      <div className="billing">

        <h3>Bill Details</h3>

        <div className="bill_row">
          <p>Item Total</p>
          <span>₹{totalAmount}</span>
        </div>

        <div className="bill_row">
          <p>Delivery Fee</p>
          <span>₹{deliveryFee}</span>
        </div>

        <div className="bill_row">
          <p>Platform Fee</p>
          <span>₹{platformFee}</span>
        </div>

        <hr />

        <div className="bill_row total">
          <p>Grand Total</p>
          <span>₹{grandTotal}</span>
        </div>
      
    <button className="checkout_btn" onClick={Submit}>
      Proceed to Pay ₹{grandTotal}
      </button>
      </div>
    )}

    </div>
  </div>
</div>
  )
}

export default Checkout