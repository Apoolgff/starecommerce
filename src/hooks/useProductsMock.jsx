import { useEffect, useState } from 'react';

const useProducts = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const response = await fetch('/src/mocks/products.json');
        const data = await response.json();

        const filteredProducts = categoryId
          ? data.filter((product) => product.category === categoryId)
          : data;

        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar los productos', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return { products, loading };
};

export default useProducts;
