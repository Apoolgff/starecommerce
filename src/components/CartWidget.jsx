import React from 'react';
import cartIcon from '../assets/images/cart.svg';


const CartWidget = () => {
  return (
      <div className="cart">
      <img src={cartIcon} alt="Icono de carrito" />
          <span className="notification">3</span>
      </div>
  );
};

export default CartWidget;