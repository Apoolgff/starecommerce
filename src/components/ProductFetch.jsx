import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';

const ProductFetch = ({ itemId, children, db }) => {
  const [product, setProduct] = useState(null);

  const fetchProductDetails = async () => {
    try {
      const productDocRef = doc(db, 'products', itemId);
      const productDocSnapshot = await getDoc(productDocRef);

      if (productDocSnapshot.exists()) {
        const productData = productDocSnapshot.data();
        setProduct({ id: itemId, ...productData });
      }
    } catch (error) {
      console.error('Error al cargar los detalles del producto', error);
    }
  };

  useEffect(() => {
    if (itemId) {
      fetchProductDetails();
    }
  }, [itemId, db]);

  return children(product);
};

export default ProductFetch;


