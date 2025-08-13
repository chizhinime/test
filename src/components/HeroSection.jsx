import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-content">
        <h2>Your Digital Product Marketplace</h2>
        <p>Discover, Download & Dominate the Digital World</p>
        <Link onClick={() => navigate('/chizhi-digital/src/pages/Home')}  className="hero-button">Explore Now</Link>
      </div>
    </div>
  </section>
);

export default Hero;