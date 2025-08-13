import React from 'react';
import '../styles/variables.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, price, imageUrl, creator }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="product-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-creator">by {creator}</p>
        <p className="product-price">₦{price.toLocaleString()}</p>
        <Link to={`/product/${id}`} className="product-link">
          <button className="view-button">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;