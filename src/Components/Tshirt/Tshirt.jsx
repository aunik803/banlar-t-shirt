import React from 'react'
import './Tshirt.css'

export const Tshirt = ({tshirt, handleAddToCart}) => {
    const {picture, name, price} = tshirt;
    // console.log(tshirt)
  return (
    <div className='t-shirt'>
        <img src={picture} alt="" />
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <button onClick={ () => handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  )
}

