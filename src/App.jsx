import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main_Section'
import berries from "./assets/berries.jpg"
import cheese from "./assets/cheese.jpg"



function App() {
  let products = [
    {
      id: 1,
      name: "Berries",
      image: berries,
      description: "Blackberries - Organic,Fresh 6oz, 6 Ounce"
    },
    {
      id: 2,
      name: "Cheese",
      image: cheese,
      description: "Arla - Dofino Havarti Cheese Slices - Smoked, 145 Gram"

    },
    {
      id: 3,
      image: berries,
      name: "Berries",
      description: "Blackberries - Organic,Fresh 6oz, 6 Ounce"
    },
    {
      id: 4,
      name: "Cheese",
      image: cheese,
      description: "Arla - Dofino Havarti Cheese Slices - Smoked, 145 Gram"

    }
  ]
  const [favourite, setFavurite] = useState([]);
  const [items, setItems] = useState([]);
  const [showFav, setShowFav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
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

    </>
  )
}

export default App
