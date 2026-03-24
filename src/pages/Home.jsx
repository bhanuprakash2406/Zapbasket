import React from 'react'
import Frame from '../assets/Product/Frame.jpg'
import pharmacy from '../assets/Product/pharmacy.jpg'
import baby_crystal from '../assets/Product/baby_crystal.jpg'
import petweb from '../assets/Product/petweb.jpg'
import '../style/Home.css'

const Home = () => {
  return (
    <div className='home'>
        <img src={Frame} />
        <div>
        <img src={pharmacy} alt='img'/>
        <img src={baby_crystal} alt='img'/>
        <img src={petweb} alt='img'/>
        </div>
    </div>
  )
}

export default Home