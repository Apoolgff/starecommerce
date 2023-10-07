import React from "react"
import { Link } from 'react-router-dom';
import "./Item.css";

const Item = ({ product }) => {
    return (
        <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} className="image" />
            <p>{product.description}</p>
            <p><strong>Precio: </strong>${product.price}</p>
            <Link to={`/item/${product.id}`}>
                <button>Ver</button>
            </Link>
        </div>);
}

export default Item;