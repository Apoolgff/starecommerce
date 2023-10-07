import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import CartWidget from './CartWidget';

const NavBar = () => {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <h1><Link to="/">Star-E-Commerce</Link></h1>
        <p>La fuerza nos acompaña</p>
      </div>
      <ul className="categories">
        <li onMouseEnter={toggleCategories} onMouseLeave={toggleCategories}>
          <span>Categorías</span>
          <ul className={`sub-categories ${showCategories ? 'active' : ''}`}>
            <li><Link to="/">Todo</Link></li>
            <li><Link to="/category/Imperio">Imperio</Link></li>
            <li><Link to="/category/Alianza">Alianza</Link></li>
            <li><Link to="/category/Separatistas">Separatistas</Link></li>
            <li><Link to="/category/Republica">Republica</Link></li>
          </ul>
        </li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/aboutus">Nosotros</Link></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
