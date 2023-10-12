import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import { CartProvider } from './components/CartContext'; // Importa el CartProvider
import './App.css';
import Cart from './components/Cart';
import Checkout from "./components/Checkout"

function App() {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/cart" element={<Cart />} /> 
            <Route exact path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;


