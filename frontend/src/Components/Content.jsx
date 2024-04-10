/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import ProductList from "./ProductList";
import NewCategory from "./NewCategory";
import NewProduct from "./NewProduct";
import ProductDetailPage from "./ProductDetailPage";
import Checkout from "./Checkout";


const Content = ({
  cart_items,
  setItems,
  products,
  setProducts,
  favourite,
  setFavourite,
  inputValue,
}) => {
  //List Categories
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      const response = await fetch("http://localhost:3000/categories");
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  //Get List of Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleItems = (product) => {
    const index = items.findIndex((item) => item._id === product.id);
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
    <>
      <CategoryRoutes categories={categories} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              cart_items={cart_items}
              setItems={setItems}
              favourite={favourite}
              setFavourite={setFavourite}
              products={products}
              inputValue={inputValue}
            />
          }
        ></Route>
        {categories.map((category) => (
          <Route
            key={category._id}
            path={`/categories/${category.name.split(" ").join("")}`}
            element={
              <ProductList
                categoryName={category._id}
                cart_items={cart_items}
                setItems={setItems}
                favourite={favourite}
                setFavourite={setFavourite}
                products={products}
                inputValue={inputValue}
              />
            }
          />
        ))}
        <Route path="/categories/NewCategory" element={<NewCategory />} />
        <Route path="/products/add" element={<NewProduct />} />
        <Route
          path="/product/:productId"
          element={
            <ProductDetailPage products={products} handleItems={handleItems} />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cart_items={cart_items} />}
        />
      </Routes>
    </>
  );
};

//Categroies
const CategoryRoutes = ({ categories }) => {
  return (
    <nav className="grid xs:grid-cols-3 md:grid-cols-6 divide-x divide-black md:w-2/4 mx-auto text-xs font-poppins bg-orange-200 mt-5 rounded-sm">
      <NavLink to="/" className="py-2">
        All
      </NavLink>
      {categories.length > 0 &&
        categories.map((category) => (
          <NavLink
            key={category._id}
            to={`/categories/${category.name.split(" ").join("")}`}
            className="py-2"
          >
            {category.name}
          </NavLink>
        ))}
      <NavLink to="/categories/NewCategory" className="py-2">
        Add Category
      </NavLink>
      <NavLink to="/products/add" className="py-2">
        Add Product
      </NavLink>
    </nav>
  );
};

export default Content;
