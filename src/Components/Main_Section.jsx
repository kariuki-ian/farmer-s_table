import { IoMdHeartEmpty } from "react-icons/io";
import { RiCloseCircleLine } from "react-icons/ri";
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ProductList from './ProductList';

//Side Content
const Side_Content = (props) => {
    let Content

    if (props.showFav) {
        Content = (
            // Show Favourite Items
            <>
                <h2 className="font-poppins w-fit text-sm font-semibold mt-2 ml-2 mb-4">Favourite Items</h2>
                <div className="flex flex-col gap-4">
                    {props.favourite.map((item) => (
                        <div className="flex border-1 rounded-md bg-white">
                            <img
                                src={item.image}
                                loading="lazy"
                                alt="Product Image"
                                className='object-contain h-24 pdt_image'
                            />
                            <p className="font-poppins text-xs">
                                <span className="w-fit mt-2 font-semibold">{item.name}</span>
                                <span className="w-fit flex mt-2"><span className="font-semibold" >Description:</span><span>{item.description}</span></span>
                            </p>
                        </div>
                    ))}
                </div>
            </>
        );
    } else {
        Content = (
            // Show Shopping Cart
            <>
                <h2 className="font-poppins w-fit text-sm font-semibold mt-2 ml-2 mb-4">Shopping Cart</h2>
                <div className="flex flex-col gap-4">
                    {props.items.map((item) => (
                        <div className="flex border-1 rounded-md bg-white">
                            <img
                                src={item.image}
                                loading="lazy"
                                alt="Product Image"
                                className='object-contain h-24 pdt_image'
                            />
                            <p className="font-poppins text-xs flex flex-col">
                                <span className="w-fit mt-2 font-semibold">{item.name}</span>
                                <span className="w-fit flex mt-2"><span className="font-semibold" >Description:</span><span>{item.description}</span></span>
                                <span className="w-fit flex gap-2"><span className="font-semibold">Quantity:</span>{item.quantity}</span>
                            </p>

                        </div>
                    ))}
                </div>
            </>
        )
    }

    return (
        <div className="fixed right-0 bottom-0 h-full  w-[300px] backdrop-blur z-10 shadow-2xl ">
            <div >
                <button className="pl-64 w-full pt-2" onClick={() => { props.showFav ? props.setShowFav(false) : props.setShowCart(false) }}>
                    <RiCloseCircleLine color="green" size={30} />
                </button>
                {Content}
            </div >
        </div>

    );
}

const CategoryRoutes = () => {
    const [categories, setCategories] = useState([]);
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
    return (
        <nav className="grid grid-cols-5 divide-x divide-black md:w-2/3 mx-auto text-xs font-poppins bg-orange-200 mt-5 rounded-sm">
            <NavLink to="/categories" className="py-2">All</NavLink>
            {categories.length > 0 && 
                categories.map(category => (
                    <NavLink key={category._id} to={`/categories/${category._id}`} className="py-2">
                        {category.name}
                    </NavLink>
                ))
            }
        </nav>
    )
}

const Main = ({ favourite, setFavourite, items, setItems, showFav, showCarts, setShowCart, setShowFav }) => {
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
        <>
          {(showCarts || showFav) && (
            <Side_Content
              showFav={showFav}
              showCarts={showCarts}
              setShowCart={setShowCart}
              setShowFav={setShowFav}
              items={items}
              favourite={favourite}
            />
          )}
    
          <CategoryRoutes />
        </>
      );
    };
    
    export default Main;