import React from 'react';
import carrito from '../img/carrito.png'

function CartWidget() {
  return (
    <div className='cart-widget'>
      <img src={carrito} alt="" />
      <span>0</span> 
    </div>
  );
}

export default CartWidget;
