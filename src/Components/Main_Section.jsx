import { IoMdHeartEmpty } from "react-icons/io";
import { RiCloseCircleLine } from "react-icons/ri";
import { useState } from "react";



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
    }else{
        Content =(
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

//Card Component
const Product = (props) => {
    return (
        <div className='cards md:w-[20%] rounded-md shadow-md pb-5'>
            <div className="relative">
                <img
                    src={props.image}
                    loading="lazy"
                    alt="Product Image"
                    className='pdt_image object-contain h-56'

                />
                <IoMdHeartEmpty className="favourite h-7 w-7 absolute top-2 right-2" onClick={props.favClick} />
            </div>

            <div>
                <p className="font-poppins text-sm font-semibold text-left pl-2">{props.name}</p>
                <p className='text-sm font-poppins'>{props.description}</p>
            </div>
            <button className='font-semibold text-white px-5 py-3 bg-emerald-600 rounded-md mt-4 md:ml-20' onClick={props.click}>
                Add To Cart
            </button>


        </div>


    );
}
const Main = ({ favourite, setFavourite, items, setItems, products, showFav, showCarts, setShowCart, setShowFav }) => {

    const handleFavClick = (product) => {
        const index = favourite.findIndex((likedProduct) => likedProduct.id === product.id);
        if (index !== -1) {
            // If the product is already liked, remove it from the liked products list
            const updatedLikedProducts = [...favourite];
            updatedLikedProducts.splice(index, 1);
            setFavourite(updatedLikedProducts);

        } else {
            // If the product is not liked, add it to the liked products list
            setFavourite([...favourite, product]);
        }
    }
    const handleItems = (product) => {
        const index = items.findIndex(item => item.id === product.id);
        if (index !== -1) {
            const updatedItems = [...items];
            updatedItems[index].quantity += 1;
            setItems(updatedItems);
        } else {
            setItems([...items, { ...product, quantity: 1 }]);
        }
    };
    return (
        <>
      
        {(showCarts || showFav) &&(
             <Side_Content
             showFav={showFav}
             showCarts={showCarts}
             setShowCart={setShowCart}
             setShowFav={setShowFav}
             items={items}
             favourite={favourite}
              />
        )}
        

           
            <nav className="grid grid-cols-5 divide-x divide-black md:w-2/3 mx-auto text-xs font-poppins bg-orange-200 mt-5 rounded-sm">
                <a className="py-2" href="#">All</a>
                <a className="py-2" href="#">Fresh Produce</a>
                <a className="py-2" href="#">Animal Products</a>
                <a className="py-2" href="#">Baked Goods</a>
                <a className="py-2" href="#">Beverages</a>
            </nav>
            <div className='container w-full mx-auto flex gap-5 flex-wrap mt-5 pl-7 z-20'>
                {products.map((product) => (
                    <Product
                        key={product.id}
                        name={product.name}
                        image={product.image}
                        description={product.description}
                        click={() => handleItems(product)}
                        favClick={() => handleFavClick(product)}
                    />
                ))}

            </div>

        </>
    );
}

export default Main;