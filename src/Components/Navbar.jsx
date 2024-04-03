import logo from "../assets/logo.svg"
import Autocomplete from '@mui/joy/Autocomplete';
import { GiShoppingCart } from "react-icons/gi"
import { FaRegHeart } from "react-icons/fa6";
import Badge from '@mui/joy/Badge';
import Typography from '@mui/joy/Typography';

const Navbar = ({ items, favourite, showFav, showCarts, setShowCart, setShowFav }) => {

    const options = []; // You need to specify the options for the Autocomplete component

    const handleCartClick = () => {
        setShowCart(!showCarts);
    };

    const handleFavClick = () => {
        setShowFav(!showFav);
    };

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
                        options={options}
                        sx={{ width: 300 }}
                        getOptionLabel={option => option.name}
                    />

                    <div className="flex gap-5">
                        <button onClick={handleCartClick}>
                            <Badge badgeContent={items} variant="soft" color="success">
                                <Typography fontSize="xl"><GiShoppingCart className="h-7 w-7" /></Typography>
                            </Badge>
                        </button>
                        <button onClick={handleFavClick}>
                            <Badge badgeContent={favourite} variant="soft" color="danger">
                                <Typography fontSize="xl"><FaRegHeart className="h-6 w-6" /></Typography>
                            </Badge>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Navbar;