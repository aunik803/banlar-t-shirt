import React from 'react'

export const Cart = ({cart, handleRemoveFromCart}) => {
      let message;
      if(cart.length === 0 ){
        message = <p>Please add some products</p>
      }
      else{
        message = <div>
          <h3>BoroLooxx</h3>
        <p><small>Thanks for giving your money</small></p>
        </div>
        
      }
  return (
    <div>
        <h2>Order sumary: {cart.length}</h2>
        {message}
        {
            cart.map(tshirt => <p 
            key={tshirt._id}
            >{tshirt.name} 
            <button onClick={ () => handleRemoveFromCart(tshirt._id)}
            >X</button> </p> )
        }
    </div>
  )
}



/*
conditional reandering
1. use if else to set a variable that will contain an element , component
*/