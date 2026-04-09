import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import HerbsPage from './pages/HerbsPage';
import GalleryPage from './pages/GalleryPage';
import RegisterPage from './pages/RegisterPage';
import FeedbackPage from './pages/FeedbackPage';
import QuizPage from './pages/QuizPage';
import AboutPage from './pages/AboutPage';

/**
 * Main App Component
 *
 * Demonstrates:
 * - React Router for page routing
 * - Component composition
 * - Page-specific styling
 */
function App() {
  return (
    <div className="app">
      <Navigation />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/herbs" element={<HerbsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            Plant Classification System - Built with React
          </p>
          <p className="footer-links">
            <span>Demonstrating: </span>
            <span className="tech-tags">
              <span className="tech-tag">JSX</span>
              <span className="tech-tag">Components</span>
              <span className="tech-tag">Props</span>
              <span className="tech-tag">State</span>
              <span className="tech-tag">Hooks</span>
              <span className="tech-tag">Events</span>
              <span className="tech-tag">Forms</span>
              <span className="tech-tag">Caching</span>
              <span className="tech-tag">Router</span>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
