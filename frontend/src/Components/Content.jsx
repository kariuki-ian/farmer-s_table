/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import ProductList from "./ProductList";
import NewCategory from "./NewCategory";
import NewProduct from "./NewProduct";
import ProductDetailPage from "./ProductDetailPage";
import Checkout from "./Checkout";
import Login from "./Login";
import Signup from "./Signup";

const Content = ({
  cart_items,
  setItems,
  products,
  setProducts,
  favourite,
  setFavourite,
  inputValue,
  user,
  setUser,
}) => {
  //List Categories
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      const response = await fetch("http://farm-project-pu8sorey0-jacks-projects-e96ea708.vercel.app/categories");
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
        const response = await fetch("http://farm-project-pu8sorey0-jacks-projects-e96ea708.vercel.app/products");
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

  return (
    <>
      <CategoryRoutes categories={categories} user={user} />
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
            <ProductDetailPage
              products={products}
              cart_items={cart_items}
              setItems={setItems}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cart_items={cart_items} user={user} />}
        />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </>
  );
};

//Categroies
const CategoryRoutes = ({ categories, user }) => {
  const isAdmin = user?.role === "admin";

  return (
    <nav className="flex flex-row justify-around md:w-2/4 mx-auto text-xs font-poppins bg-orange-200 mt-5 rounded-sm">
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
      {isAdmin && (
        <>
          <NavLink to="/categories/NewCategory" className="py-2">
            Add Category
          </NavLink>
          <NavLink to="/products/add" className="py-2">
            Add Product
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Content;
