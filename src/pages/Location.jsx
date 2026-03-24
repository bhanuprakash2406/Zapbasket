import React, { useEffect } from 'react'
import { TbXboxX } from "react-icons/tb";
import '../style/Location.css'

function Location ({ close }) {
  useEffect(()=>{
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  },[])
    
  return (
    <div className='location'>
    <div className='location_main'>
        <TbXboxX className="TbXbox" onClick={close}/>
        <p>Change Location</p>
        <div className='location_modal'>
        <button>Detect my location</button>
        <span>OR</span>
        <input type='text' placeholder='Search Delivery Location' />
        </div>
    </div>
    </div>
  )
}

export default Location