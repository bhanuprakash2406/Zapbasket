import React, { useContext } from 'react'
import { PiTimer } from "react-icons/pi";
import { bestSelling } from '../data/bestSelling'
import { justArrived } from '../data/justArrived'
import { mostPopular } from '../data/mostPopular';
import { featured } from '../data/featured';
import '../style/Products.css'
import { CartContext } from "../context/CartContext";

const Products = () => {

const { cart, addItem, removeItem } = useContext(CartContext);

return (
  <div className='Product_main'>

    {/* Best Selling */}
    <div className='product_con'>
      <h2>Best Selling</h2>
      <div className='product_section'>
        {bestSelling.map(item => {
          const count = cart[item.id] || 0;
          return (
          <div className='product' key={item.id}>
            <img src={item.img} alt={item.name} style={{width:'100px'}}/>
            <small>
              <PiTimer style={{color:'green'}}/> 12 MINS
            </small>
            <p>{item.name}</p>
            <span>{item.qty}</span>
            <div className='product_btn'>
              <h4>{item.mrp}</h4>
              <div>
                {count > 0 ? (
                  <div className='btn_counts'>
                    <button className='btn_count' onClick={() => removeItem(item.id)}>-</button>
                    <p>{count}</p>
                    <button className='btn_count' onClick={() => addItem(item.id)}>+</button>
                  </div>) : (<button className='btn_main' onClick={() => addItem(item.id)}>ADD</button>
                )}
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
    {/* Just Arrived */}
    <div className='product_con'>
      <h2>Just Arrived</h2>
      <div className='product_section'>
        {justArrived.map(item => {
          const count = cart[item.id] || 0;
          return (
          <div className='product' key={item.id}>
            <img src={item.img} alt={item.name} style={{width:'100px'}}/>
            <small>
              <PiTimer style={{color:'green'}}/> 12 MINS
            </small>
            <p>{item.name}</p>
            <span>{item.qty}</span>
            <div className='product_btn'>
              <h4>{item.mrp}</h4>
              <div>
                {count > 0 ? (
                  <div className='btn_counts'>
                    <button className='btn_count' onClick={() => removeItem(item.id)}>-</button>
                    <p>{count}</p>
                    <button className='btn_count' onClick={() => addItem(item.id)}>+</button>
                  </div>) : (<button className='btn_main' onClick={() => addItem(item.id)}>ADD</button>
                )}
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
    {/* Most Popular */}
    <div className='product_con'>
      <h2>Most Popular</h2>
      <div className='product_section'>
        {mostPopular.map(item => {
          const count = cart[item.id] || 0;
          return (
          <div className='product' key={item.id}>
            <img src={item.img} alt={item.name} style={{width:'100px'}}/>
            <small>
              <PiTimer style={{color:'green'}}/> 12 MINS
            </small>
            <p>{item.name}</p>
            <span>{item.qty}</span>
            <div className='product_btn'>
              <h4>{item.mrp}</h4>
              <div>
                {count > 0 ? (
                  <div className='btn_counts'>
                    <button className='btn_count' onClick={() => removeItem(item.id)}>-</button>
                    <p>{count}</p>
                    <button className='btn_count' onClick={() => addItem(item.id)}>+</button>
                  </div>) : (<button className='btn_main' onClick={() => addItem(item.id)}>ADD</button>
                )}
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
    {/* Featured*/}
    <div className='product_con'>
      <h2>Featured</h2>
      <div className='product_section'>
        {featured.map(item => {
          const count = cart[item.id] || 0;
          return (
          <div className='product' key={item.id}>
            <img src={item.img} alt={item.name} style={{width:'100px'}}/>
            <small>
              <PiTimer style={{color:'green'}}/> 12 MINS
            </small>
            <p>{item.name}</p>
            <span>{item.qty}</span>
            <div className='product_btn'>
              <h4>{item.mrp}</h4>
              <div>
                {count > 0 ? (
                  <div className='btn_counts'>
                    <button className='btn_count' onClick={() => removeItem(item.id)}>-</button>
                    <p>{count}</p>
                    <button className='btn_count' onClick={() => addItem(item.id)}>+</button>
                  </div>) : (<button className='btn_main' onClick={() => addItem(item.id)}>ADD</button>
                )}
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  </div>
)
}

export default Products;