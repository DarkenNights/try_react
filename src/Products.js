import { useEffect, useState } from 'react';
import ProductInfos from './ProductInfos';

function Products() {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await fetch('http://localhost:4000/fr/products');
      const products = await data.json();
      setProducts(products);
    } catch (err) {
      console.log(err); // Failed to fetch
    }
  };

  return (
    <div>
      <h1>Vous êtes sur la page des produit</h1>
      {products.map((product) => (
        <ProductInfos key={product._id} product={product} />
      ))}
    </div>
  );
}

export default Products;
