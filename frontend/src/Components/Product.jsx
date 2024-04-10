import { useNavigate } from "react-router-dom";
import { VscHeartFilled } from "react-icons/vsc";
import { useState } from "react";

const Product = (props) => {
    const { product } = props;
    const navigate = useNavigate()
    const [textColor, setTextColor]= useState('text-slate-500');
   
    const changeColor= () =>
    {         
        setTextColor(textColor === 'text-slate-500'?'text-red-500':'text-slate-500');     
        props.favClick();
    }

    

    
    const navigateToDetailPage = () => {
        navigate(`/product/${product._id}`);
    }
    return (
        <>
        {console.log(textColor)}
         <div className='cards md:w-[20%] rounded-md shadow-md pb-5'>
            <div className="relative">
                <img
                    src={props.image}
                    loading="lazy"
                    alt="Product"
                    className='pdt_image object-contain h-56'
                    onClick={navigateToDetailPage}
                />
             
                <VscHeartFilled className={`${textColor} favourite h-7 w-7 absolute top-2 right-2`} onClick={changeColor} />
            </div>
            <div>
                <p className="font-poppins text-sm font-semibold text-left pl-2">{props.name}</p>
                {/* <p className='text-sm font-poppins'>{props.description}</p>*/}
            </div>
            <button className='font-semibold text-white px-5 py-3 bg-emerald-600 rounded-md mt-4 md:ml-20' onClick={props.click}>
                Add To Cart
            </button>
        </div>  

        </>
       

    );
   
  };

  const navigateToDetailPage = () => {
    navigate(`/product/${product._id}`);
  };
  return (
    <>
      <div className="cards md:w-[18%] rounded-md shadow-md pb-5 relative">
        <div className="h-4/5">
          <div className="relative">
            <img
              src={props.image}
              loading="lazy"
              alt="Product"
              className="pdt_image object-contain h-56"
              onClick={navigateToDetailPage}
            />

            <VscHeartFilled
              className={`${textColor} favourite h-7 w-7 absolute top-2 right-2  bg-white rounded-full  hover:bg-red-300 transition duration-300 ease-in-out p-1  `}
              onClick={changeColor}
            />
          </div>
          <div>
            <p className="font-poppins text-sm font-semibold text-left pl-2">
              {props.name}
            </p>
            <p className="text-sm font-poppins">{props.description}</p>
          </div>
        </div>
        <button
          className="font-semibold text-white px-5 py-3 bg-emerald-600 rounded-md mt-4 mx-2 hover:bg-emerald-700 transition duration-300 ease-in-out"
          onClick={props.click}
        >
          Add To Cart
        </button>
      </div>
    </>
  );


export default Product;
