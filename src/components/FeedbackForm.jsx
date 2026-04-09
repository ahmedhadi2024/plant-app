import React, { useState, useEffect } from 'react';
import { setCache, getCache, CACHE_KEYS } from '../utils/cache';

/**
 * FeedbackForm Component - User Feedback with Caching
 *
 * JavaScript/React Concepts Demonstrated:
 * - useState: Managing form state and submission status
 * - useEffect: Loading cached submission status on mount
 * - Controlled Components: All inputs bound to state
 * - Event Handlers: onChange, onSubmit with preventDefault
 * - Conditional Rendering: Success message after submission
 * - Form Validation: Required field checks
 * - Object Spread Operator: Immutable state updates
 * - Template Literals: Formatted messages
 * - Date/Time operations: Timestamp for submissions
 *
 * @component
 */
function FeedbackForm() {
  // Form state using useState
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Student',
    usefulness: 4,
    rating: 'Excellent',
    comments: '',
    recommend: 'yes',
    features: []
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  // Load cached data on mount using useEffect
  useEffect(() => {
    const wasSubmitted = getCache(CACHE_KEYS.FEEDBACK_SUBMITTED);
    const count = getCache('feedback_count') || 0;
    setSubmitCount(count);

    if (wasSubmitted) {
      setSubmitted(true);
      console.log('[Feedback] Previous submission detected');
    }
  }, []);

  // Event handler: Handle text/select input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // Event handler: Handle checkbox changes
  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, features: [...prev.features, value] };
      } else {
        return { ...prev, features: prev.features.filter(f => f !== value) };
      }
    });
  };

  // Event handler: Handle range slider
  const handleUsefulnessChange = (e) => {
    setFormData(prev => ({ ...prev, usefulness: parseInt(e.target.value, 10) }));
  };

  // Event handler: Handle form submission
  // Demonstrates: preventDefault, async simulation, caching
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }

    if (!formData.email.trim()) {
      alert('Please enter your email');
      return;
    }

    // Create feedback object with timestamp
    const feedbackData = {
      ...formData,
      submittedAt: new Date().toISOString(),
      submissionNumber: submitCount + 1
    };

    // Log feedback (in real app, this would be sent to server)
    console.log('[Feedback] Submitted:', feedbackData);

    // Cache submission status
    setCache(CACHE_KEYS.FEEDBACK_SUBMITTED, true, 365 * 24 * 60 * 60 * 1000);
    setCache('feedback_count', submitCount + 1, 365 * 24 * 60 * 60 * 1000);
    setCache('last_feedback', feedbackData, 30 * 24 * 60 * 60 * 1000);

    setSubmitted(true);

    // Auto-reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        role: 'Student',
        usefulness: 4,
        rating: 'Excellent',
        comments: '',
        recommend: 'yes',
        features: []
      });
    }, 5000);
  };

  // Helper: Get usefulness label
  const getUsefulnessLabel = (value) => {
    const labels = {
      1: 'Not Useful',
      2: 'Slightly Useful',
      3: 'Moderately Useful',
      4: 'Very Useful',
      5: 'Extremely Useful'
    };
    return labels[value] || '';
  };

  return (
    <div className="feedback-container">
      <h1>Feedback Form</h1>
      <p className="feedback-intro">
        We value your feedback! Your input helps us improve the Plant Classification System
        and create a better learning experience for everyone.
      </p>

      {submitted ? (
        // CONDITIONAL: Show success message after submission
        <div className="success-message">
          <div className="success-icon-large">✓</div>
          <h2>Thank You for Your Feedback!</h2>
          <p>
            Your responses have been recorded. We appreciate you taking the time
            to help us improve.
          </p>
          <p className="submission-info">
            Submission #{submitCount + 1} • {new Date().toLocaleDateString()}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="secondary-btn"
          >
            Submit Another Response
          </button>
        </div>
      ) : (
        // FORM: Using onSubmit event
        <form onSubmit={handleSubmit} className="feedback-form">
          {/* User Information Section */}
          <fieldset className="feedback-section">
            <legend>User Information</legend>

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">You are a *</label>
              <select
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="input"
              >
                <option value="Student">Student</option>
                <option value="Faculty">Faculty/Teacher</option>
                <option value="Researcher">Researcher</option>
                <option value="Visitor">General Visitor</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </fieldset>

          {/* Feedback Section */}
          <fieldset className="feedback-section">
            <legend>Your Feedback</legend>

            <div className="form-group">
              <label htmlFor="usefulness">
                How useful was this website? ({getUsefulnessLabel(formData.usefulness)})
              </label>
              <input
                type="range"
                id="usefulness"
                min="1"
                max="5"
                value={formData.usefulness}
                onChange={handleUsefulnessChange}
                className="range-slider"
              />
              <div className="range-labels">
                <span>Not Useful</span>
                <span>Extremely Useful</span>
              </div>
              {/* Visual meter display */}
              <div className="meter-display">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`meter-segment ${level <= formData.usefulness ? 'filled' : ''}`}
                  >
                    {level}
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="rating">Overall Rating</label>
              <select
                id="rating"
                value={formData.rating}
                onChange={handleChange}
                className="input"
              >
                <option>Excellent</option>
                <option>Very Good</option>
                <option>Good</option>
                <option>Average</option>
                <option>Below Average</option>
                <option>Poor</option>
              </select>
            </div>

            <div className="form-group">
              <label>Would you recommend this website?</label>
              <div className="radio-group horizontal">
                <label className="option-label">
                  <input
                    type="radio"
                    name="recommend"
                    value="yes"
                    onChange={handleChange}
                    checked={formData.recommend === 'yes'}
                  />
                  <span>Yes, definitely!</span>
                </label>
                <label className="option-label">
                  <input
                    type="radio"
                    name="recommend"
                    value="maybe"
                    onChange={handleChange}
                    checked={formData.recommend === 'maybe'}
                  />
                  <span>Maybe</span>
                </label>
                <label className="option-label">
                  <input
                    type="radio"
                    name="recommend"
                    value="no"
                    onChange={handleChange}
                    checked={formData.recommend === 'no'}
                  />
                  <span>Not really</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Most Useful Features</label>
              <div className="checkbox-group">
                {[
                  'Plant Gallery',
                  'Interactive Quiz',
                  'Classification Guide',
                  'Visual Examples',
                  'Search Functionality'
                ].map((feature) => (
                  <label key={feature} className="option-label">
                    <input
                      type="checkbox"
                      value={feature}
                      onChange={handleFeatureChange}
                      checked={formData.features.includes(feature)}
                    />
                    <span>{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="comments">Your Comments & Suggestions</label>
              <textarea
                id="comments"
                value={formData.comments}
                onChange={handleChange}
                className="input textarea"
                rows="5"
                placeholder="Share your thoughts, suggestions for improvement, or any issues you encountered..."
              />
              <p className="field-hint">
                Optional: Tell us what you liked, what could be improved, or any bugs you found.
              </p>
            </div>
          </fieldset>

          <button type="submit" className="primary-btn submit-btn">
            Submit Feedback
          </button>
        </form>
      )}

      {/* Information Box */}
      <details className="info-details">
        <summary>Why is your feedback important?</summary>
        <div className="details-content">
          <p>
            Feedback helps us improve the website in several ways:
          </p>
          <ul>
            <li><strong>Usability:</strong> Your input guides interface improvements</li>
            <li><strong>Content Quality:</strong> We can enhance educational material based on your suggestions</li>
            <li><strong>Bug Detection:</strong> You help us identify and fix technical issues</li>
            <li><strong>Feature Planning:</strong> Your requests shape our development roadmap</li>
          </ul>
          <p>
            All feedback is reviewed by our team and used to make data-driven decisions
            about the platform's future development.
          </p>
        </div>
      </details>

      {/* Privacy Notice */}
      <div className="privacy-notice">
        <p>
          🔒 Your privacy matters. Email addresses are only used to follow up on
          feedback if needed. We never share your information with third parties.
        </p>
      </div>
    </div>
  );
}

export default FeedbackForm;
