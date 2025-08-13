import React from 'react';
import { useParams } from 'react-router-dom';
import product1Image from '../assets/profilepics.jpg';
import product2Image from '../assets/profilepics.jpg';
import product3Image from '../assets/profilepics.jpg';

const productData = {
  1: {
    title: 'Social Media Planner',
    price: 2000,
    image: product1Image,
    creator: 'Chizhi',
    description: 'A Canva-based planner to organize and schedule your social media content.',
    paystackLink: 'https://paystack.com/buy/rice-pcqzvi' // Replace with your actual Paystack link
  },
  2: {
    title: 'Resume Template',
    price: 1500,
    image: product2Image,
    creator: 'Chizhi',
    description: 'A clean and modern resume template to help you stand out.',
    paystackLink: 'https://paystack.com/buy/rice-pcqzvi' // Replace with your actual Paystack link
  },
  3: {
    title: 'Notion Tracker',
    price: 1000,
    image: product3Image,
    creator: 'Chizhi',
    description: 'A Notion template to track your goals, habits, and productivity.',
    paystackLink: 'https://paystack.com/buy/rice-pcqzvi' // Replace with your actual Paystack link
  },
};

const ProductPage = () => {
  const { id } = useParams();
  const product = productData[id];

  const handleBuyNow = () => {
    if (product && product.paystackLink) {
      window.location.href = product.paystackLink; // Redirect to Paystack payment page
    }
  };

  if (!product) return <div className="container not-found">Product not found</div>;

  return (
    <div className="container product-detail product-page-container">
      <h1 className="page-title">Product Details</h1>
      <div className="product-detail-content">
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-detail-img" 
          loading="lazy"
        />
        <div className="product-detail-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-creator">by {product.creator}</p>
          <p className="product-price">₦{product.price.toLocaleString()}</p>
          <p className="product-description">{product.description}</p>
          <button className="buy-button" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;