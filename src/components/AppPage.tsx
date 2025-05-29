import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { apps, App } from '../data/apps';

const AppPage: React.FC = () => {
  const { appId } = useParams<{ appId: string }>();
  const app = apps.find((a: App) => a.id === appId);

  if (!app) {
    return <div>App not found</div>;
  }

  return (
    <div className="app-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">App Store</Link>
          <nav className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#screenshots" className="nav-link">Screenshots</a>
            <a href="#download" className="nav-link">Download</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main-content">
        <div className="content-wrapper">
          <div className="app-hero">
            <div className="app-info">
              <h1>{app.name}</h1>
              <p className="app-description">{app.description}</p>
              
              <div className="app-meta">
                <div className="meta-item">
                  <span className="meta-label">Rating</span>
                  <span className="meta-value">⭐ {app.rating}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Downloads</span>
                  <span className="meta-value">{app.downloads}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Size</span>
                  <span className="meta-value">{app.size}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Category</span>
                  <span className="meta-value">{app.category}</span>
                </div>
              </div>

              <div className="download-buttons">
                <a 
                  href={app.playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary"
                >
                  Download on Google Play
                </a>
                {app.appStoreLink && (
                  <a 
                    href={app.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-secondary"
                  >
                    Download on App Store
                  </a>
                )}
              </div>
            </div>

            <div className="app-screenshots">
              {app.screenshots.map((screenshot: string, index: number) => (
                <img 
                  key={index}
                  src={screenshot}
                  alt={`${app.name} screenshot ${index + 1}`}
                  className="screenshot"
                />
              ))}
            </div>
          </div>

          {/* Features Section */}
          <section id="features" className="features-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              {app.features.map((feature: { icon: string; title: string; description: string }, index: number) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Info */}
          <section className="additional-info">
            <div className="info-card">
              <h3>Additional Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Age Rating</span>
                  <span className="info-value">{app.ageRating}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Last Updated</span>
                  <span className="info-value">{app.lastUpdated}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

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

export default AppPage; 