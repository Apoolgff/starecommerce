import { useState, useEffect } from 'react';

const ProductFetch = ({ itemId, children }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch('/src/mocks/products.json');
        const data = await response.json();
        const foundProduct = data.find((item) => item.id === parseInt(itemId, 10));
        setProduct(foundProduct);
      } catch (error) {
        console.error('Error al cargar los detalles del producto', error);
      }
    };

    fetchProductDetails();
  }, [itemId]);

  return children(product);
};

export default ProductFetch;
