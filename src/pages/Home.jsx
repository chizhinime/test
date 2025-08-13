import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import product1Image from '../assets/profilepics.jpg'; // Update path as needed
import product2Image from '../assets/profilepics.jpg'; // Update path as needed
import product3Image from '../assets/profilepics.jpg'; // Update path as needed

const dummyProducts = [
  {
    id: 1,
    title: 'Social Media Planner',
    price: 2000,
    image: product1Image, // Using imported image
    creator: 'Chizhi',
  },
  {
    id: 2,
    title: 'Resume Template',
    price: 1500,
    image: product2Image, // Using imported image
    creator: 'Chizhi',
  },
  {
    id: 3,
    title: 'Notion Tracker',
    price: 1000,
    image: product3Image, // Using imported image
    creator: 'Chizhi',
  },
  {
    id: 1,
    title: 'Social Media Planner',
    price: 2000,
    image: product1Image, // Using imported image
    creator: 'Chizhi',
  },
  {
    id: 2,
    title: 'Resume Template',
    price: 1500,
    image: product2Image, // Using imported image
    creator: 'Chizhi',
  },
  {
    id: 3,
    title: 'Notion Tracker',
    price: 1000,
    image: product3Image, // Using imported image
    creator: 'Chizhi',
  },
  {
    id: 1,
    title: 'Social Media Planner',
    price: 2000,
    image: product1Image, // Using imported image
    creator: 'Chizhi',
  },
  {
    id: 2,
    title: 'Resume Template',
    price: 1500,
    image: product2Image, // Using imported image
    creator: 'Chizhi',
  },
  {
    id: 3,
    title: 'Notion Tracker',
    price: 1000,
    image: product3Image, // Using imported image
    creator: 'Chizhi',
  },
  {
    id: 1,
    title: 'Social Media Planner',
    price: 2000,
    image: product1Image, // Using imported image
    creator: 'Chizhi',
  },
  {
    id: 2,
    title: 'Resume Template',
    price: 1500,
    image: product2Image, // Using imported image
    creator: 'Chizhi',
  },
  {
    id: 3,
    title: 'Notion Tracker',
    price: 1000,
    image: product3Image, // Using imported image
    creator: 'Chizhi',
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-grid">
            {dummyProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                id={product.id}
                title={product.title}
                price={product.price}
                imageUrl={product.image} // Passing imported image
                creator={product.creator}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;