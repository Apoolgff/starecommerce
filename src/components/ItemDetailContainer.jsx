import React from 'react';
import { useParams } from 'react-router-dom';
import ProductFetch from './ProductFetch';
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();

  return (
    <ProductFetch itemId={id}>
      {(product) => (
        <div className="item-detail-container">
          {product ? (
            <>
              <div className="product-details">
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name} className="image-detail"/>
                <p>{product.description}</p>
                <p>Precio: ${product.price}</p>
                <p>Categoría: {product.category}</p>
              </div>
            </>
          ) : (
            <p>Cargando detalles del producto...</p>
          )}
        </div>
      )}
    </ProductFetch>
  );
};

export default ItemDetailContainer;