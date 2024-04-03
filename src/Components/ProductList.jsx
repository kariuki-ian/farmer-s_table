import React, { useState, useEffect } from 'react';
import Product from './Product';

const ProductList = ({ categoryName, handleFavClick, handleItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='container w-full mx-auto flex gap-5 flex-wrap mt-5 pl-7 z-20'>
      {products
        .filter(product => !categoryName || product.category === categoryName) // Filter products by category name
        .map((product) => (
          <Product
            key={product._id}
            name={product.name}
            image={product.image}
            description={product.description}
            click={() => handleItems(product)}
            favClick={() => handleFavClick(product)}
          />
        ))}
    </div>
  );
};

export default ProductList;