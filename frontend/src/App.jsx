import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./Components/Content";

function App() {
  //Define favourite, Shopping Cart and Products variables
  const [favourite, setFavourite] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("favourite");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [cart_items, setItems] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("cart");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState();
  useEffect(() => {
    //get user info from local storage
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);
  useEffect(() => {
    //store favourite items to local storage
    localStorage.setItem("favourite", JSON.stringify(favourite));
  }, [favourite]);
  useEffect(() => {
    //store cart items to local storage
    localStorage.setItem("cart", JSON.stringify(cart_items));
  }, [cart_items]);

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
        inputValue={inputValue}
        setInputValue={setInputValue}
        user={user}
        setUser={setUser}
      />
      <Content
        //Favourite and CartItems
        favourite={favourite}
        setFavourite={setFavourite}
        cart_items={cart_items}
        setItems={setItems}
        products={products}
        setProducts={setProducts}
        inputValue={inputValue}
        setInputValue={setInputValue}
        user={user}
        setUser={setUser}
      />
    </Router>
  );
}

export default App;
