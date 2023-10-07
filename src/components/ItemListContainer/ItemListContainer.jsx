import React from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import useProducts from '../../hooks/useProductsMock';

const ItemListContainer = () => {
  const { id } = useParams();
  const { products, loading } = useProducts(id);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="item-list-container">
      <h1>Naves: {id}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;






