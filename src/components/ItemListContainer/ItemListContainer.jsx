import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase';

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, 'products');
        let productSnapshot;

        if (id) {
          const categoryQuery = query(productsRef, where('category', '==', id));
          productSnapshot = await getDocs(categoryQuery);
        } else {
          
          productSnapshot = await getDocs(productsRef);
        }

        const productsData = productSnapshot.docs.map((doc) => doc.data());

        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar los productos', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div className="item-list-container">
      <h1>Naves: {id || 'Todo'}</h1>
      {loading ? <p>Cargando...</p> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;


