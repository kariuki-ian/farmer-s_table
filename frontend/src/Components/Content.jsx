import React, { useState, useEffect } from 'react';
import {Routes, Route, NavLink } from 'react-router-dom';
import ProductList from './ProductList';
import NewCategory from './NewCategory';


const Content =({cart_items,setItems,products,setProducts,favourite,setFavourite})=>{
//List Categories
const[categories, setCategories] = useState([]);

  async function getCategories() {
        try {
            const response = await fetch('http://localhost:3000/categories');
            if (!response.ok) {
                throw new Error('Failed to fetch categories');
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
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    //Get List of Products
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
    

    return(
        <> 
        <CategoryRoutes
       categories = {categories}
       />      
       <Routes>
        <Route path="/" element=
        {<ProductList           
            cart_items= {cart_items}
            setItems={setItems}
            favourite={favourite}
            setFavourite={setFavourite}
            products={products}
        />}></Route>
        {categories.map((category) => (
          <Route key={category._id} path={`/categories/${category.name.split(" ").join("")}`} element=
          {<ProductList
             categoryName={category._id}
             cart_items= {cart_items}
             setItems={setItems}
             favourite={favourite}
             setFavourite={setFavourite}
             products={products}
              />} />
        ))}
        <Route path="/categories/NewCategory" element={<NewCategory />}/>
       </Routes> 
        </>

    )

}

//Categroies
const CategoryRoutes = ({categories}) => { 
    return (
        <nav className="grid grid-cols-5 divide-x divide-black md:w-2/3 mx-auto text-xs font-poppins bg-orange-200 mt-5 rounded-sm">
            <NavLink to="/" className="py-2">All</NavLink>
            {categories.length > 0 && 
                categories.map(category => (
                    <NavLink key={category._id} to={`/categories/${category.name.split(" ").join("")}`} className="py-2">
                        {category.name}
                    </NavLink>
                ))
            }
            <NavLink to="/categories/NewCategory" className="py-2">Add Category</NavLink>
        </nav>
    )
}

export default Content;