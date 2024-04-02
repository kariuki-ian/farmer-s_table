import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main_Section'
import ProductTest from './Components/Product';
import { Routes, Route } from 'react-router-dom';


function App() {
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  let products = fetchProducts();
  console.log("Product Data: ", products);
  const [favourite, setFavurite] = useState([]);
  const [items, setItems] = useState([]);
  const [showFav, setShowFav] = useState(false);
  const [showCart, setShowCart] = useState(false);


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
          setFavourite={setFavurite}
          items={items}
          setItems={setItems}
          products={products}
          showFav={showFav}
          showCarts={showCart}
          setShowCart={setShowCart}
          setShowFav={setShowFav}
        />
      <Routes>
        <Route path="categories" element={<ProductTest/>} />
      </Routes>
    </div>
  )
}

export default App
