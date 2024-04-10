import logo from "../assets/logo.svg";
import Autocomplete from "@mui/joy/Autocomplete";
import { GiShoppingCart } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa6";
import Badge from "@mui/joy/Badge";
import Typography from "@mui/joy/Typography";
import Tooltip from "@mui/joy/Tooltip";
import { RiCloseCircleLine } from "react-icons/ri";
import { useState } from "react";
import { Link, RouterProvider } from "react-router-dom";

// SideBar Content
const Side_Content = (props) => {
  let Content;

  if (props.showFav) {
    Content = (
      // Show Favourite Itemss
      <>
        <h2 className="font-poppins w-fit text-sm font-semibold mt-2 ml-2 mb-4">
          Favourite Items
        </h2>
        <div className="flex flex-col gap-4">
          {props.favourite.map((item) => (
            <div
              key={item.image}
              className="flex border-1 rounded-md bg-white relative"
            >
              <img
                src={item.image}
                loading="lazy"
                alt="Product Image"
                className="object-contain h-24 pdt_image"
              />
              <p className="font-poppins text-xs">
                <span className="w-fit x mt-2 font-semibold">{item.name}</span>
                <span className="w-fit flex flex-row flex-wrap mt-2">
                  <span className="font-semibold h-fit w-fit">Description:</span>
                  <span>{item.description}</span>
                </span>
              </p>
              {/* Remove Favourite */}
              <RiCloseCircleLine
                color="red"
                size={20}
                className="absolute top-0 right-0 bg-white rounded-full hover:bg-red-300 transition duration-300 ease-in-out p-1"
                onClick={() => {
                  const index = props.favourite.findIndex(
                    (likedProduct) => likedProduct.image === item.image
                  );
                  if (index !== -1) {
                    const updatedLikedProducts = [...props.favourite];
                    updatedLikedProducts.splice(index, 1);
                    props.setFavourite(updatedLikedProducts);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </>
    );
  } else {
    Content = (
      // Show Shopping Cart
      <>
        <h2 className="font-poppins w-fit text-sm font-semibold mt-2 ml-2 mb-4">
          Shopping Cart
        </h2>
        <div className="flex flex-col gap-4">
          {props.items.map((item) => (
            <div
              key={item.image}
              className="flex border-1 rounded-md bg-white relative"
            >
              <img
                src={item.image}
                loading="lazy"
                alt="Product Image"
                className="object-contain h-24 pdt_image"
              />
              <p className="font-poppins text-xs flex flex-col">
                <span className="w-fit mt-2 font-semibold">{item.name}</span>
                <span className="w-fit flex mt-2">
                  <span className="font-semibold">Description:</span>
                  <span>{item.description}</span>
                </span>
                <span className="w-fit flex gap-2">
                  <span className="font-semibold">Quantity:</span>
                  {item.quantity}
                </span>
              </p>
              {/* Remove Item from Cart */}
              <RiCloseCircleLine
                color="red"
                size={20}
                className="absolute top-0 right-0 w-6 h-6 bg-white rounded-full hover:bg-red-300 transition duration-300 ease-in-out p-1"
                onClick={() => {
                  const index = props.items.findIndex(
                    (cartItem) => cartItem._id === item._id
                  );
                  if (index !== -1) {
                    const updatedItems = [...props.items];
                    updatedItems.splice(index, 1);
                    props.setItems(updatedItems);
                  }
                }}
              />
            </div>
          ))}
          {/* Go Shopping to checkout*/}
          <Link
            to="/checkout"
            className="bg-emerald-600 text-white font-semibold rounded-md p-2 mt-4 ml-2 hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Go Checkout
          </Link>
        </div>

      </>
    );
  }

  return (
    <div className="fixed right-0 bottom-0 h-full  w-[350px] backdrop-blur z-10 shadow-2xl ">
      <div>
        <button
          className="pl-64 w-full pt-2"
          onClick={() => {
            props.showFav ? props.setShowFav(false) : props.setShowCart(false);
          }}
        >
          <RiCloseCircleLine color="green" size={30} />
        </button>
        {Content}
      </div>
    </div>
  );
};

// NavBar
const NavBar = (props) => {
  const option = props.products;

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
            inputValue={props.inputValue}
            onInputChange={(event, newInputValue) => {
              props.setInputValue(newInputValue);
            }}
            getOptionLabel={(option) => option.name}
          />
          <div className="flex  gap-5">
            <Tooltip title="View Shopping Cart" color="success" variant="outlined" placement="top">
              <button
                onClick={() => {
                  setShowCart(!showCart);
                }}
              >
                <Badge
                  badgeContent={props.cart_length}
                  variant="soft"
                  color="success"
                >
                  <Typography fontSize="xl">
                    <GiShoppingCart className="h-7 w-7" />
                  </Typography>
                </Badge>
              </button>
            </Tooltip>
            <Tooltip title="View Favourites" color="danger" variant="outlined" placement="top">
              <button
              onClick={() => {
                setShowFav(!showFav);
              }}
            >
              <Badge
                badgeContent={props.favourite_length}
                variant="soft"
                color="danger"
              >
                <Typography fontSize="xl">
                  <FaRegHeart className="h-6 w-6" />
                </Typography>
              </Badge>
            </button>
            </Tooltip>            
          </div>
        </div>
      </div>
      {(showCart || showFav) && (
        <Side_Content
          showFav={showFav}
          showCart={showCart}
          setShowCart={setShowCart}
          setShowFav={setShowFav}
          //  Items to show in the Side Content
          items={props.cart}
          favourite={props.favourite_items}
          setFavourite={props.setFavourite}
          setItems={props.setItems}
        />
      )}
    </>
  );
};

export default NavBar;
