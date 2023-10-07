import React from 'react';
import ProductFetch from '../../ProductFetch';
import ItemCount from "./ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ itemId }) => {
    return (
        <ProductFetch itemId={itemId}>
            {(product) => (
                <div className="product-details">
                    {product ? (
                        <>
                            <h2>{product.name}</h2>
                            <img src={product.image} alt={product.name} className="image-detail" />
                            <p>{product.description}</p>
                            <p><strong>Precio: </strong>${product.price}</p>
                            <p><strong>Categoría: </strong>{product.category}</p>
                            <ItemCount />
                        </>
                    ) : (
                        <p>Cargando detalles del producto...</p>
                    )}
                </div>
            )}
        </ProductFetch>
    );
};

export default ItemDetail;