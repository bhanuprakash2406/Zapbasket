import { useEffect, useState } from "react";
import { TbXboxX } from "react-icons/tb";
import logo from '../assets/Product/log.png'
import'../style/Login.css'

function Login({ close }) {

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const [value,setValue]=useState();

  const handleChange = e =>{
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    setValue(onlyNums);
   };

  return (
    <div className="overlay">
      <div className="modal">
        <TbXboxX className="TbXboxX" onClick={close}/>

        <img src={logo}/>

        <h2>India's last minute app</h2>
        <p>Log in or Sign up</p>

        <div className="inputBox">
          <span>+91</span>
          <input placeholder="Enter mobile number" value={value} onChange={handleChange}/>
        </div>

        <button className="continue">Continue</button>

        <small>
          By continuing, you agree to our Terms of service & Privacy policy
        </small>

      </div>
    </div>
  );
}
export default Login;