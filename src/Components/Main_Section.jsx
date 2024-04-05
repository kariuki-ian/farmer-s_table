import { IoMdHeartEmpty } from "react-icons/io";
import { RiCloseCircleLine } from "react-icons/ri";
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ProductList from './ProductList';

//Side Content
const Side_Content = ({ favourite, items, showFav, setShowFav, setShowCart }) => {
    let Content;

    if (showFav) {
        Content = (
            // Show Favourite Items
            <>
                <h2 className="font-poppins w-fit text-sm font-semibold mt-2 ml-2 mb-4">Favourite Items</h2>
                <div className="flex flex-col gap-4">
                    {favourite.map((item) => (
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
                    {items.map((item) => (
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
        );
    }

    return (
        <div className="fixed right-0 bottom-0 h-full  w-[300px] backdrop-blur z-10 shadow-2xl ">
            <div >
                <button className="pl-64 w-full pt-2" onClick={() => { showFav ? setShowFav(false) : setShowCart(false) }}>
                    <RiCloseCircleLine color="green" size={30} />
                </button>
                {Content}
            </div >
        </div>

    );
}

//Adds the category buttons with corresponding routes
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
        <nav className="grid grid-cols-6 divide-x divide-black md:w-2/3 mx-auto text-xs font-poppins bg-orange-200 mt-5 rounded-sm">
            <NavLink to="/categories" className="py-2">All</NavLink>
            {categories.length > 0 && 
                categories.map(category => (
                    <NavLink key={category._id} to={`/categories/${category.name.split(" ").join("")}`} className="py-2">
                        {category.name}
                    </NavLink>
                ))
            }
            <NavLink to="/categories/newcategory" className="py-2">New Category</NavLink>
        </nav>
    )
}

const Main = ({ favourite, items, showFav, showCarts, setShowCart, setShowFav }) => {

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