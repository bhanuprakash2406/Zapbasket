import React from 'react'
import { products } from '../data/products'
import '../style/ProductCard.css'

const ProductCard = () => {
  return (
    <div className='productcard'>
    <h4>Shop by category</h4>
    <div className='card'>
        {products.map((item)=>(
            <div key={item.id} className='products'>
                <img src={item.image} alt={item.name}/>
                <p>{item.name}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default ProductCard