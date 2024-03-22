import logo from "../assets/logo.svg"
import Autocomplete from '@mui/joy/Autocomplete';
import{GiShoppingCart} from "react-icons/gi"
import { FaRegHeart } from "react-icons/fa6";
import Badge from '@mui/joy/Badge';
import Typography from '@mui/joy/Typography';
import { useState } from "react";

const Navbar = ({items,favourite,products, showFav,showCarts, setShowCart,setShowFav}) => {

    const option = products;
    const [inputValue, setInputValue] = useState('');
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
                        <button onClick={() =>{setShowCart(!showCarts)}} >
                             <Badge badgeContent={items} variant="soft" color="success" >
                            <Typography fontSize="xl"><GiShoppingCart className="h-7 w-7"  /></Typography>
                        </Badge>
                        </button>
                        <button onClick={() =>{setShowFav(!showFav)}}>
                             <Badge badgeContent={favourite} variant="soft" color="danger">
                            <Typography fontSize="xl"><FaRegHeart className="h-6 w-6"/></Typography>
                        </Badge>
                        </button>
                       
                       
                    </div>

                </div>
            </div>


        </>
    );

}

export default Navbar;