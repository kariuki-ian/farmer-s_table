import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main_Section'
import { Routes, Route } from 'react-router-dom';
import ProductList from './Components/ProductList';
import NewCategory from './Components/NewCategory';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [items, setItems] = useState([]);
  const [showFav, setShowFav] = useState(false);
  const [showCart, setShowCart] = useState(false);

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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
}, []);

const handleFavClick = (product) => {
  setFavourite(prevFavourite => {
    const index = prevFavourite.findIndex((likedProduct) => likedProduct.id === product.id);
    if (index !== -1) {
      // If the product is already liked, remove it from the liked products list
      const updatedLikedProducts = [...prevFavourite];
      updatedLikedProducts.splice(index, 1);
      return updatedLikedProducts;
    } else {
      // If the product is not liked, add it to the liked products list
      return [...prevFavourite, product];
    }
  });
};

const handleItems = (product) => {
  const index = items.findIndex((item) => item.id === product.id);
  if (index !== -1) {
      // If the item already exists in the cart, increase its quantity by 1
      const updatedItems = [...items];
      updatedItems[index].quantity += 1;
      setItems(updatedItems);
  } else {
      // If the item is not in the cart, add it with quantity 1
      setItems([...items, { ...product, quantity: 1 }]);
  }
};
  return (
    <div className="App">
      <Navbar
        favourite={favourite.length}
        items={items.length}
        products={products}
        showFav={showFav}
        showCarts={showCart}
        setShowCart={setShowCart}
        setShowFav={setShowFav}
      />
      <Main
        favourite={favourite}
        setFavourite={setFavourite}
        items={items}
        setItems={setItems}
        products={products}
        showFav={showFav}
        showCarts={showCart}
        setShowCart={setShowCart}
        setShowFav={setShowFav}
      />
      <Routes>
        <Route path="/categories" element={<ProductList showAll handleFavClick={handleFavClick} handleItems={handleItems} />} />
        {categories.map((category) => (
          <Route key={category._id} path={`/categories/${category.name.split(" ").join("")}`} element={<ProductList categoryName={category._id} handleFavClick={handleFavClick} handleItems={handleItems} />} />
        ))}
        <Route path="/categories/NewCategory" element={<NewCategory />}/>
      </Routes>
    </div>
  )
}
export default App
