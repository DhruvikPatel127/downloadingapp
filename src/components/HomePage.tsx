import React from 'react';
import { Link } from 'react-router-dom';
import { apps, App } from '../data/apps';

const HomePage: React.FC = () => {
  const categories = [
    { id: 'games', name: 'Games', icon: '🎮' },
    { id: 'social', name: 'Social', icon: '👥' },
    { id: 'productivity', name: 'Productivity', icon: '⚡' },
    { id: 'education', name: 'Education', icon: '📚' },
  ];

  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">App Store</Link>
          <nav className="nav-links">
            <a href="#featured" className="nav-link">Featured</a>
            <a href="#categories" className="nav-link">Categories</a>
            <a href="#about" className="nav-link">About</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-animation">
            <div className="floating-icon">📱</div>
            <div className="floating-icon">🎮</div>
            <div className="floating-icon">⚡</div>
            <div className="floating-icon">💡</div>
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section id="featured" className="featured-section">
        <div className="content-wrapper">
          <h2>Featured Apps</h2>
          <div className="apps-grid">
            {apps.map((app: App) => (
              <Link to={`/app/${app.id}`} key={app.id} className="app-card">
                <div className="app-info">
                  <h3>{app.name}</h3>
                  <p>{app.description}</p>
                  <div className="app-meta">
                    <span className="rating">⭐ {app.rating}</span>
                    <span className="downloads">{app.downloads}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="categories-section">
        <div className="content-wrapper">
          <h2>Categories</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-card">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 App Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 