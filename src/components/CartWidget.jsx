import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import cartIcon from '../assets/images/cart.svg';

const CartWidget = () => {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart">
      <Link to="/cart">
        <img src={cartIcon} alt="Icono de carrito" />
        <span className="notification">{cartItemCount}</span>
      </Link>
    </div>
  );
};

export default CartWidget;


