import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ItemListContainer.css';
import useProducts from '../hooks/useProductsMock';

const ItemListContainer = () => {
  const { id } = useParams();
  const { products, loading } = useProducts(id);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="item-list-container">
      <h1>Naves: {id}</h1>
      <div className="product-cards">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} className="image"/>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <Link to={`/item/${product.id}`}>
              <button>Ver</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;






