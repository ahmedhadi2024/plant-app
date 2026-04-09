import React, { useState, useEffect } from 'react';
import { setCache, getCache, removeCache, CACHE_KEYS } from '../utils/cache';

/**
 * RegistrationForm Component - User Registration with Validation
 *
 * JavaScript/React Concepts Demonstrated:
 * - useState: Managing form state for multiple fields
 * - useEffect: Loading cached form data on mount
 * - Controlled Components: All inputs bound to state
 * - Event Handlers: onChange, onClick with preventDefault
 * - Conditional Rendering: Error messages, success states
 * - Form Validation: Pattern matching, length checks, age validation
 * - Object Spread Operator: Updating state immutably
 * - Template Literals: Success messages with variable interpolation
 * - Regular Expressions: Email validation pattern
 * - Math operations: Random ID generation
 *
 * @component
 */
function RegistrationForm() {
  // Form state using useState - each field is a controlled component
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    dob: '',
    gender: '',
    subjects: [],
    website: '',
    phone: '',
    favoriteColor: '#1b5e20',
    rating: 5,
    comments: ''
  });

  // UI state for validation results and submission status
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Load cached form data on mount using useEffect
  useEffect(() => {
    const cachedData = getCache(CACHE_KEYS.FORM_DATA);
    if (cachedData) {
      setFormData(prev => ({ ...prev, ...cachedData }));
      console.log('[Registration] Loaded cached form data');
    }

    // Track visit count using cache
    const visitCount = getCache(CACHE_KEYS.VISIT_COUNT) || 0;
    setCache(CACHE_KEYS.VISIT_COUNT, visitCount + 1, 7 * 24 * 60 * 60 * 1000);
  }, []);

  // Cache form data on every change (debounced in production)
  useEffect(() => {
    const { password, confirmPassword, ...dataToCache } = formData;
    setCache(CACHE_KEYS.FORM_DATA, dataToCache, 7 * 24 * 60 * 60 * 1000);
  }, [formData]);

  // Event handler: Handle text/select input changes
  // Uses computed property names and spread operator
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));

    // Clear error when user starts typing (validation on the fly)
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: null }));
    }
  };

  // Event handler: Handle blur for touched state
  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
  };

  // Event handler: Handle radio button changes
  const handleRadioChange = (e) => {
    setFormData(prev => ({ ...prev, gender: e.target.value }));
  };

  // Event handler: Handle checkbox changes
  // Demonstrates: array manipulation, filter, spread operator
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, subjects: [...prev.subjects, value] };
      } else {
        return { ...prev, subjects: prev.subjects.filter(s => s !== value) };
      }
    });
  };

  // Event handler: Handle range slider
  const handleRangeChange = (e) => {
    setFormData(prev => ({ ...prev, rating: parseInt(e.target.value, 10) }));
  };

  // Validation helper functions
  // Demonstrates: pure functions, regex, string methods
  const validateName = (name) => {
    if (!name || name.trim().length < 3) {
      return 'Name must be at least 3 characters';
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return 'Name can only contain letters and spaces';
    }
    return null;
  };

  const validateEmail = (email) => {
    // RFC 5322 compliant email regex (simplified)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return 'Please enter a valid email address';
    }
    return null;
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one number';
    }
    return null;
  };

  const validateAge = (age) => {
    const ageNum = Number(age);
    if (isNaN(ageNum)) {
      return 'Please enter a valid age';
    }
    if (ageNum < 18) {
      return 'You must be at least 18 years old';
    }
    if (ageNum > 120) {
      return 'Please enter a valid age';
    }
    return null;
  };

  // Event handler: Main form validation and submission
  // Demonstrates: object methods, early return, error aggregation
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate each field
    const nameError = validateName(formData.name);
    if (nameError) newErrors.name = nameError;

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    const ageError = validateAge(formData.age);
    if (ageError) newErrors.age = ageError;

    if (!formData.gender) {
      newErrors.gender = 'Please select your gender';
    }

    // CONDITIONAL: If errors exist, display them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Mark all fields as touched to show errors
      setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      // Scroll to first error
      const firstErrorField = Object.keys(newErrors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    // Generate unique user ID using Math.random
    // Demonstrates: Math operations, string concatenation
    const userID = 'USR' + Date.now().toString(36).toUpperCase() +
                   Math.floor(Math.random() * 10000).toString().padStart(4, '0');

    // Create success result object
    const successData = {
      success: true,
      userId: userID,
      name: formData.name,
      email: formData.email,
      registrationDate: new Date().toLocaleString(),
      subjectsCount: formData.subjects.length
    };

    // Cache the successful registration
    setCache('last_registration', successData, 30 * 24 * 60 * 60 * 1000);
    setResult(successData);

    // Clear sensitive form data but keep non-sensitive for convenience
    setFormData(prev => ({
      ...prev,
      password: '',
      confirmPassword: '',
      comments: ''
    }));
  };

  // Helper: Determine if field should show error
  const shouldShowError = (field) => {
    return errors[field] && (touched[field] || result === null);
  };

  // Helper: Get input class based on validation state
  const getInputClass = (field) => {
    if (shouldShowError(field)) return 'input error';
    if (touched[field] && !errors[field]) return 'input valid';
    return 'input';
  };

  return (
    <div className="form-container">
      <h1>User Registration</h1>
      <p className="form-description">
        Create your account to access premium features, track your quiz progress,
        and save your learning journey. All fields marked with * are required.
      </p>

      <form onSubmit={handleSubmit} className="registration-form" noValidate>
        {/* Personal Information Section */}
        <fieldset className="form-section">
          <legend>Personal Information</legend>

          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClass('name')}
              placeholder="Enter your full name"
              autoComplete="name"
            />
            {shouldShowError('name') && (
              <span className="error-text" role="alert">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClass('email')}
              placeholder="your.email@example.com"
              autoComplete="email"
            />
            {shouldShowError('email') && (
              <span className="error-text" role="alert">{errors.email}</span>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass('password')}
                placeholder="Min 8 characters"
                autoComplete="new-password"
              />
              {shouldShowError('password') && (
                <span className="error-text" role="alert">{errors.password}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password *</label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass('confirmPassword')}
                placeholder="Re-enter password"
                autoComplete="new-password"
              />
              {shouldShowError('confirmPassword') && (
                <span className="error-text" role="alert">{errors.confirmPassword}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age *</label>
              <input
                type="number"
                id="age"
                value={formData.age}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass('age')}
                placeholder="18"
                min="18"
                max="120"
              />
              {shouldShowError('age') && (
                <span className="error-text" role="alert">{errors.age}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                className="input"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Gender *</label>
            <div className="radio-group">
              {['Male', 'Female', 'Other', 'Prefer not to say'].map((option) => (
                <label key={option} className="option-label">
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    onChange={handleRadioChange}
                    checked={formData.gender === option}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {errors.gender && (
              <span className="error-text" role="alert">{errors.gender}</span>
            )}
          </div>
        </fieldset>

        {/* Academic Information Section */}
        <fieldset className="form-section">
          <legend>Academic Information</legend>

          <div className="form-group">
            <label>Subjects Known</label>
            <div className="checkbox-group">
              {['Botany', 'Biology', 'Agriculture', 'Ecology', 'Environmental Science'].map((subject) => (
                <label key={subject} className="option-label">
                  <input
                    type="checkbox"
                    value={subject}
                    onChange={handleCheckboxChange}
                    checked={formData.subjects.includes(subject)}
                  />
                  <span>{subject}</span>
                </label>
              ))}
            </div>
            <p className="field-hint">Select all that apply</p>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="website">Personal Website</label>
              <input
                type="url"
                id="website"
                value={formData.website}
                onChange={handleChange}
                className="input"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
        </fieldset>

        {/* Preferences Section */}
        <fieldset className="form-section">
          <legend>Preferences</legend>

          <div className="form-group">
            <label htmlFor="favoriteColor">Favorite Color</label>
            <div className="color-picker-wrapper">
              <input
                type="color"
                id="favoriteColor"
                value={formData.favoriteColor}
                onChange={handleChange}
                className="color-input"
              />
              <span className="color-value">{formData.favoriteColor}</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rate This Website: {formData.rating}/10</label>
            <input
              type="range"
              id="rating"
              min="1"
              max="10"
              value={formData.rating}
              onChange={handleRangeChange}
              className="range-slider"
            />
            <div className="range-labels">
              <span>Poor</span>
              <span>Average</span>
              <span>Excellent</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="comments">Additional Comments</label>
            <textarea
              id="comments"
              value={formData.comments}
              onChange={handleChange}
              className="input textarea"
              rows="4"
              placeholder="Share your thoughts, suggestions, or questions..."
            />
          </div>
        </fieldset>

        <button type="submit" className="primary-btn submit-btn">
          Create Account
        </button>
      </form>

      {/* CONDITIONAL: Show success message after successful submission */}
      {result && (
        <div className="result-box success">
          <div className="success-icon">✓</div>
          <h3>Registration Successful!</h3>
          <p>Welcome, <strong>{result.name}</strong>!</p>
          <p>Your User ID: <code>{result.userId}</code></p>
          <p>Registered on: {result.registrationDate}</p>
          <p className="success-hint">
            You can now access all features including quiz tracking and progress reports.
          </p>
        </div>
      )}

      {/* Cache Info Display */}
      <div className="cache-info">
        <p className="cache-hint">
          💡 Your form data is automatically saved. If you leave and come back,
          your information will be restored.
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm;
