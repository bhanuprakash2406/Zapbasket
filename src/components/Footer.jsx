import React, { useState } from 'react'
import img from '../assets/Product/log.png'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import '../style/Footer.css'
import { IoHeart } from "react-icons/io5";



const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='footer'>
      <div className='footer_hidden'>
            <p>India's last<br/> minute app <IoHeart className='heart'/></p>
            <span>Zap Basket</span>
          </div>
          <div className='additional' onClick={() => setOpen(prev => !prev)}>
            <p>India's last minute app - Zap Basket</p>
            <p>+</p>
          </div>
      <div className={open ? "main show" : "main"}>
      <div className='oneo'>
        <img src={img} alt='image'/>
        <ul className='icon'>
          <li><FaFacebookF /></li>
          <li><FaXTwitter /></li>
          <li><AiFillInstagram /></li>
          <li><FaYoutube /></li>
          <li><IoLogoWhatsapp /></li>
        </ul>
      </div>
      <div className='two'>
        <p>Organic</p>
        <ul>
          <li>About us</li>
          <li>Conditions</li>
          <li>Our Journals</li>
          <li>Careers</li>
          <li>Affiliate Programme</li>
          <li>Ultras Press</li>
        </ul>
      </div>
      <div className='three'>
        <p>Quick Links</p>
        <ul>
          <li>Offers</li>
          <li>Discount Coupons</li>
          <li>Stores</li>
          <li>Track Order</li>
          <li>Shop</li>
          <li>Info</li>
        </ul>
      </div>
      <div className='four'>
        <p>Customer Service</p>
        <ul>
          <li>FAQ</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Returns & Refunds</li>
          <li>Cookie Guidelines</li>
          <li>Delivery Information</li>
        </ul>
      </div>
      <div  className='five'>
        <p>Subscribe Us</p>
        <span>Subscribe to our newsletter to get updates about our grand offers.</span>
        <form>
          <input type='text' placeholder='Email Address' />
          <button>Subscribe</button>
        </form>
      </div>
      </div>
      <small>
      © 2026 Zap Basket. All rights reserved.</small>
    </div>
  )
}

export default Footer