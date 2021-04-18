import { useEffect, useState } from 'react';
import ProductInfos from './ProductInfos';
import ProductsService from './services/productsService';

function Products() {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const products = await ProductsService.getAll();
      console.log(products);
      setProducts(products.data);
    } catch (err) {
      console.log(err.response); // Failed to fetch
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
