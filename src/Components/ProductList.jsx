import { useState, useEffect } from 'react';
import Product from './Product';

const ProductList = ({ categoryName }) => {
  const [products, setProducts] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [items, setItems] = useState([]);

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

  const handleFavClick = (product) => {
    const index = favourite.findIndex((likedProduct) => likedProduct.id === product.id);
    if (index !== -1) {
      // If the product is already liked, remove it from the liked products list
      const updatedLikedProducts = [...favourite];
      updatedLikedProducts.splice(index, 1);
      setFavourite(updatedLikedProducts);
    } else {
      // If the product is not liked, add it to the liked products list
      setFavourite([...favourite, product]);
    }
  };

  const handleItems = (product) => {
    const index = items.findIndex(item => item.id === product.id);
    if (index !== -1) {
      const updatedItems = [...items];
      updatedItems[index].quantity += 1;
      setItems(updatedItems);
    } else {
      setItems([...items, { ...product, quantity: 1 }]);
    }
  };

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