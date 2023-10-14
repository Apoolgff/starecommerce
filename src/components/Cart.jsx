import React from 'react';
import { useCart } from './CartContext'; 
import { Link } from 'react-router-dom'; 
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clearCart } = useCart();

  
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className='cart-header'>Carrito de Compras</h1>
      {cart.length > 0 ? (
        <div>
          <ul className='cart-items'>
            {cart.map((item) => (
              <li className='cart-item' key={item.id}>
                <span>Nombre: {item.name} </span>
                <img src={item.image} alt={item.name} className="item-image" />
                <span>Precio: ${item.price} </span>
                <span>Cantidad: x{item.quantity}</span>
                <button className="remove-button" onClick={() => removeItem(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div className='cart-footer'>
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button className='buy-button' onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/checkout">
              <button className='buy-button'>Terminar mi compra</button>
            </Link>
          </div>
        </div>
      ) : (
        <p>El carrito está vacío. ¡Agrega algunos productos!</p>
      )}
    </div>
  );
};

export default Cart;



