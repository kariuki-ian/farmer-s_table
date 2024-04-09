import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Content from './Components/Content';


function App() {

  //Define favourite, Shopping Cart and Products variables
  const [favourite, setFavourite] = useState([]);
  const [cart_items, setItems] = useState([]);
  const [products, setProducts] = useState([]);



  return (
    
      <Router>
        <NavBar
          //Length of favourites and shopping cart
          favourite_length={favourite.length}
          cart_length={cart_items.length}

          // Usestate variables for Favourites and Carts
          favourite_items={favourite}
          setFavourite={setFavourite}
          cart={cart_items}
          setItems={setItems}

          products={products}
        />
        <Content
          //Favourite and CartItems
          favourite={favourite}
          setFavourite={setFavourite}
          cart_items={cart_items}
          setItems={setItems}

          products={products}
          setProducts={setProducts}
        />
       
      </Router>
    
  )
}

export default App
