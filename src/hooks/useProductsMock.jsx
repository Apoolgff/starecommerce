import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

const useProducts = (categoryId, db) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, 'products');
        const querySnapshot = await getDocs(productsCollection);

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

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
  }, [categoryId, db]);

  return { products, loading };
};

export default useProducts;


