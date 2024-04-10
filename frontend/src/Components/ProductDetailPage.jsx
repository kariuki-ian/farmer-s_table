import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetailPage.css';

const ProductDetailPage = ({ products, handleItems }) => {
    let { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    
    useEffect(() => {
        
        const foundProduct = products.find(p => p._id === productId);
        
        setProduct(foundProduct);
    }, [productId, products]);

    if (!product) {
        return <div>Product not found</div>;
    }

    const addToCart = () => {
       handleItems(product);
       alert('Added to cart!!')
    };
    return (
        <div className="product-detail-page">
            <h1 className="product-title">{product.name}</h1>
            <img src={product.image} alt={product.name} className="product-image" onClick={() => navigate(-1)} />
            <p className="product-description">{product.description}</p>
            <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
            <button className="go-back-btn" onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default ProductDetailPage;
