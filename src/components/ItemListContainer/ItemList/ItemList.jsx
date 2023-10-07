import React from "react"
import Item from "./Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
    return (
        <div className="product-cards">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ItemList;