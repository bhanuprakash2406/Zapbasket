import React, { useState, useEffect, useContext } from 'react'
import { CgProfile } from "react-icons/cg";
import { BsBasket } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa6";


import Location from '../pages/Location'
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';

import { CartContext } from "../context/CartContext";

import '../style/NavBar.css'
import '../style/Login.css'

import logo from '../assets/Product/Log.png'
import { bestSelling } from "../data/bestSelling";
import { justArrived } from "../data/justArrived";
import { mostPopular } from "../data/mostPopular";
import { featured } from "../data/featured";

const Navbar = () => {

  const { cart } = useContext(CartContext);

const allProducts = [
  ...bestSelling,
  ...justArrived,
  ...mostPopular,
  ...featured
];

const totalItems = Object.values(cart).reduce(
  (sum, item) => sum + item,
  0
);

const totalAmount = Object.entries(cart).reduce((sum, [id, qty]) => {

  const product = allProducts.find(item => item.id === id);

  if (!product) return sum;

  const price = Number(product.mrp.replace("₹",""));

  return sum + price * qty;

}, 0);

   const [login, setLogin] = useState(false);

   const [carts, setCart] = useState(false);

   const [add, setAdd] = useState(false);

   const words = ["Milk", "Fruits", "Snacks","Rice","Eggs","Chips"];

   const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className='navbar'>
        <div className='title'>
            <img src={logo}/>
        </div>
        <div className='nav'>
            <div className='address'>
            <div onClick={()=>setAdd(true)}>
            <p>Delivery in 8 minutes  <FaCaretDown/></p>
            <span>83, Maruthi Nagar, Tirupati, Andhra Pradesh, 517501</span>
            </div>
            {add && <Location close={() => setAdd(false)} />}
              
            <CgProfile  className='profile' onClick={() => setLogin(true)}/>
            {login && <Login close={() => setLogin(false)} />}
            </div>
            <div className='search'>
            <CiSearch className='icon'/>
            <input type='text' placeholder={'Search '+words[index]} />
            </div>

            <div className='login'>
            <a href='#' onClick={() => setLogin(true)}>Login</a>
            {login && <Login close={() => setLogin(false)} />}
            </div>
              {totalItems > 0 ? (<div className='checkout_hidden' onClick={() => setCart(true)}>
                <p ><BsBasket className='bsicon' style={{color:'white'}}/> {totalItems} items <br/> ₹{totalAmount}</p>
                <span>view cart <FaCaretRight className='right_icon'/></span>
                </div>):(<p></p>)}
                {carts && <Checkout close={()=> setCart(false)}/>}
            <div className='cart'>
                {totalItems === 0 ? (<p className="nav-link" onClick={() => setCart(true)}><BsBasket className='icon'/> My Cart</p>
                ) : (<p className="nav-links" onClick={() => setCart(true)}><BsBasket className='icon' style={{color:'white'}}/> {totalItems} items <br/> ₹{totalAmount}</p>
                )}
                {carts && <Checkout close={()=> setCart(false)}/>}
            </div>
        </div>
    </div>
  )
}

export default Navbar