import logo from "../assets/logo.svg"
import Autocomplete from '@mui/joy/Autocomplete';
import { GiShoppingCart } from "react-icons/gi"
import { FaRegHeart } from "react-icons/fa6";
import Badge from '@mui/joy/Badge';
import Typography from '@mui/joy/Typography';
import { RiCloseCircleLine } from "react-icons/ri";
import { useState } from "react";
import { NavLink } from "react-router-dom";


// SideBar Content
const Side_Content = (props) => {
    let Content;

    if (props.showFav) {
        Content = (
            // Show Favourite Items
            <>
                <h2 className="font-poppins w-fit text-sm font-semibold mt-2 ml-2 mb-4">Favourite Items</h2>
                <div className="flex flex-col gap-4">
                    {props.favourite.map((item, index) => (
                        <div key={item.id || index} className="flex border-1 rounded-md bg-white">
                            <img
                                src={item.image}
                                loading="lazy"
                                alt="Product Image"
                                className='object-contain h-24 pdt_image'
                            />
                            <p className="font-poppins text-xs">
                                <span className="w-fit x mt-2 font-semibold">{item.name}</span>
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
                    {props.items.map((item, index) => (
                        <div key={item.id || index} className="flex border-1 rounded-md bg-white">
                            <img
                                src={item.image}
                                loading="lazy"
                                alt="Product Image"
                                className='object-contain h-24 pdt_image'
                            />
                            <p className="font-poppins text-xs flex flex-col">
                                <span className="w-fit mt-2 font-semibold">{item.name}</span>
                                {/*<span className="w-fit flex mt-2"><span className="font-semibold" >Description:</span><span>{item.description}</span></span>*/}
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


// NavBar
const NavBar = ( props ) => {
    const option = props.products;
    const [inputValue, setInputValue] = useState('');
    const [showFav, setShowFav] = useState(false);
    const [showCart, setShowCart] = useState(false);

    return (
        <> 
            {/* Navbar */}
            <div className="flex flex-wrap justify-between align-middle">
                <img src={logo} className="w-40 h-20" alt="Brand Logo" />
                <div className="flex flex-wrap md:gap-10">

                    {/* Search Bar */}
                    <Autocomplete
                        variant="plain"
                        className="mt-5 font-poppins h-6"
                        placeholder="Search"
                        options={option}
                        sx={{ width: 300 }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        getOptionLabel={option => option.name}
                    />
                    <div className="flex  gap-5">
                        <button onClick={() => { setShowCart(!showCart) }} >
                            <Badge badgeContent={props.cart_length} variant="soft" color="success" >
                                <Typography fontSize="xl"><GiShoppingCart className="h-7 w-7" /></Typography>
                            </Badge>
                        </button>
                        <button onClick={() => { setShowFav(!showFav) }}>
                            <Badge badgeContent={props.favourite_length} variant="soft" color="danger">
                                <Typography fontSize="xl"><FaRegHeart className="h-6 w-6" /></Typography>
                            </Badge>
                        </button>
                         
                        -


                    </div>

                </div>
            </div>
            {(showCart || showFav) &&(
             <Side_Content
             showFav={showFav}
             showCart={showCart}
             setShowCart={setShowCart}
             setShowFav={setShowFav}

            //  Items to show in the Side Content
             items={props.cart}
             favourite={props.favourite_items}
              />
              
        )}
        
        </>
    )

}

export default NavBar;