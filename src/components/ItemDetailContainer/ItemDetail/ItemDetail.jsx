import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase';
import { useCart } from '../../CartContext';
import ItemCount from './ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (product) {
      console.log('Agregando producto al carrito:', product);
      addItem(product, quantity);
    }
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        console.log('ID en URL:', id);
        const productsRef = collection(db, 'products');
        const productQuery = query(productsRef, where('id', '==', parseInt(id)));

        console.log('Consulta de productos:', productQuery);
        const productSnapshot = await getDocs(productQuery);
        console.log('Snapshot de productos:', productSnapshot);

        if (!productSnapshot.empty) {
          const productData = productSnapshot.docs[0].data();
          console.log('Producto encontrado:', productData);
          setProduct(productData);
        } else {
          console.log('El producto no existe');
        }
      } catch (error) {
        console.error('Error al cargar los detalles del producto', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div className="product-details">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} className="image-detail" />
          <p>{product.description}</p>
          <p><strong>Precio: </strong>${product.price}</p>
          <p><strong>Categoría: </strong>{product.category}</p>
          <ItemCount onQuantityChange={handleQuantityChange} />
          <button onClick={handleAddToCart}>Comprar</button>
        </>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ItemDetail;







