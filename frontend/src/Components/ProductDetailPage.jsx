import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetailPage.css';

const ProductDetailPage = ({ products, cart_items, setItems }) => {
    let { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);

    
    useEffect(() => {
        
        const foundProduct = products.find(p => p._id === productId);
        setProduct(foundProduct);    
    }, [productId, products]);

    if (!product) {
        return <div>Product not found</div>;
    }
   const handleItems = (product) => {
            const index = cart_items.findIndex((item) => item._id === product._id);
            if (index !== -1) {
              // If the item already exists in the cart, increase its quantity by 1
              const updatedItems = [...cart_items];
              updatedItems[index].quantity += 1;
              setItems(updatedItems);
            } else {
              // If the item is not in the cart, add it with quantity 1
              setItems([...cart_items, { ...product, quantity: 1 }]);
            }
          };
    const addToCart = (product) => {
       handleItems(product)     
    };
    return (
      <> 
 <div className="product-detail-page">
            <h1 className="product-title">{product.name}</h1>
            <img src={product.image} alt={product.name} className="product-image" onClick={() => navigate(-1)} />
            <p className="product-description">{product.description}</p>
            <button className="add-to-cart-btn" onClick={()=>addToCart(product)}>Add to Cart</button>
            <button className="go-back-btn" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </>
       
    );
};

export default ProductDetailPage;
