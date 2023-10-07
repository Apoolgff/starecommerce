import React, { useState } from 'react';
import "./itemCount.css";

const ItemCount = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="item-count">
            <p className="quantity"><strong>Cantidad: </strong>{quantity}</p>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleIncrease}>+</button>
        </div>
    );
};

export default ItemCount;
