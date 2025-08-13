import aboutImage from '../assets/profilepics.jpg'; 

const About = () => (
  <section className="about-section">
    <div className="container">
      <div className="about-content">
        <h2 className="about-title">About <span className="highlight">ChizhiDigital</span></h2>
        <div className="about-grid">
          <div className="about-text">
            <p className="about-description">
              We specialize in premium digital products designed to empower creators, entrepreneurs, and tech enthusiasts. 
              Our collection includes beautifully crafted templates, insightful eBooks, productivity trackers, 
              and innovative tools to streamline your workflow and boost your online presence.
            </p>
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">📊</div>
                <h3>Templates</h3>
                <p>Professional designs for resumes, social media, and more</p>
              </div>
              <div className="feature">
                <div className="feature-icon">📚</div>
                <h3>eBooks</h3>
                <p>Knowledge-packed guides for digital success</p>
              </div>
              <div className="feature">
                <div className="feature-icon">⏱️</div>
                <h3>Trackers</h3>
                <p>Tools to monitor your progress and habits</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src={aboutImage} 
              alt="ChizhiDigital team working" 
              className="about-img" 
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;