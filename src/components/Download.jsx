import React from 'react'
import apple from '../assets/Product/img-app-store.jpg'
import google from '../assets/Product/img-google-play.jpg'
import img from '../assets/Product/banner-onlineapp.png'
import '../style/Download.css'

const Download = () => {
  return (
    <div className='download'>
        <div>
            <p>Download Zap Basket App</p>
            <span>Online Orders made easy, fast and reliable</span>
            <div className='down'>
            <img src={apple} alt='Apple-store' />
            <img src={google} alt='Play-store' />
            </div>
        </div>
        <div>
            <img src={img} alt='image' className='banner'/>
        </div>
    </div>
  )
}

export default Download