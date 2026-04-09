import React from 'react';
import { Link } from 'react-router-dom';
import SectionCard from '../components/SectionCard';

/**
 * AboutPage Component - Comprehensive Documentation
 *
 * Contains extensive documentation about the React concepts
 * demonstrated in this application and JavaScript usage throughout.
 */
function AboutPage() {
  // JavaScript concepts with detailed explanations
  const javascriptConcepts = [
    {
      category: 'Variables and Data Types',
      locations: [
        { file: 'All components', description: 'const and let declarations for component definitions, state variables, and helper functions' },
        { file: 'cache.js', description: 'const for module-level constants (CACHE_PREFIX, DEFAULT_EXPIRY)' },
        { file: 'Quiz.jsx', description: 'const for questions array with objects containing id, text, options, correct, explanation' }
      ],
      examples: `// const - block-scoped immutable binding
const CACHE_PREFIX = 'plant_app_';
const herbs = ["Mint", "Coriander", "Spinach"];

// let - block-scoped mutable binding
let score = 0;
let grade = 'Average';

// Data types used:
// - Strings: "Plant Classification", 'Herbs'
// - Numbers: 18, 100, 3.14
// - Booleans: true, false
// - Arrays: [1, 2, 3], herbs.map(...)
// - Objects: { name: 'Mint', family: 'Lamiaceae' }
// - null/undefined: for absent values`
    },
    {
      category: 'Functions (Arrow and Regular)',
      locations: [
        { file: 'cache.js', description: 'Exported functions: setCache, getCache, removeCache, clearAllCache, getCacheStats' },
        { file: 'All components', description: 'Event handlers as arrow functions: handleChange, handleSubmit, handleClick' },
        { file: 'Quiz.jsx', description: 'Helper functions: getOptionStyle, getStatusIcon' }
      ],
      examples: `// Arrow function with implicit return
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Arrow function with block body
const handleToggle = () => {
  setShowList(!showList);
  if (!showList) {
    setDisplayCount(herbs.length);
  }
};

// Function with parameters
const getCacheKey = (key) => \`\${CACHE_PREFIX}\${key}\`;

// Callback functions in array methods
herbs.filter(herb => herb.category === selectedCategory);`
    },
    {
      category: 'Array Methods',
      locations: [
        { file: 'HerbList.jsx', description: 'filter() for search/category filtering, map() for rendering cards' },
        { file: 'Quiz.jsx', description: 'forEach() for score calculation, map() for rendering questions' },
        { file: 'Navigation.jsx', description: 'map() for rendering navigation links' },
        { file: 'PlantGallery.jsx', description: 'find() for locating current plant, map() for gallery items' }
      ],
      examples: `// map() - transform each element
herbs.map((herb, index) => (
  <div key={index}>{herb.name}</div>
));

// filter() - keep elements matching condition
const filtered = herbs.filter(h => h.category === 'culinary');

// find() - get first matching element
const plant = plants.find(p => p.type === selectedType);

// forEach() - iterate with side effects
questions.forEach((q) => {
  if (answers[q.id] === q.correct) score++;
});

// includes() - check if value exists
if (formData.subjects.includes('Botany')) { ... }`
    },
    {
      category: 'Object Operations',
      locations: [
        { file: 'RegistrationForm.jsx', description: 'Spread operator for immutable state updates: { ...prev, [id]: value }' },
        { file: 'All components', description: 'Destructuring props: function Component({ title, children })' },
        { file: 'cache.js', description: 'Object.keys() for cache statistics' }
      ],
      examples: `// Spread operator - shallow copy/merge
setFormData(prev => ({ ...prev, [id]: value }));

// Destructuring - extract properties
function Navigation({ links, activePage, onNavigate }) { ... }

// Computed property names
const key = 'name';
const obj = { [key]: 'value' }; // { name: 'value' }

// Object.keys() - get property names
const keys = Object.keys(localStorage);`
    },
    {
      category: 'Template Literals',
      locations: [
        { file: 'cache.js', description: 'String interpolation for cache keys and log messages' },
        { file: 'Quiz.jsx', description: 'Dynamic messages with variable insertion' },
        { file: 'HerbList.jsx', description: 'Search result messages' }
      ],
      examples: `// Basic interpolation
const message = \`Welcome, \${formData.name}!\`;

// Multi-line strings
const content = \`
  This is a long string
  spanning multiple lines
  without concatenation
\`;

// Expressions in templates
const result = \`Score: \${score} / \${total} (\${percentage}%)\`;`
    },
    {
      category: 'Conditional Logic',
      locations: [
        { file: 'All components', description: 'Ternary operators for inline conditions' },
        { file: 'Quiz.jsx', description: 'if/else chains for grade determination' },
        { file: 'HerbList.jsx', description: 'Logical AND (&&) for conditional rendering' }
      ],
      examples: `// Ternary operator
{showList ? <HerbList /> : <p>Click to show</p>}

// Logical AND - render if truthy
{selectedType && <InfoBox type={selectedType} />}

// if/else statement
if (score >= 13) {
  grade = 'Excellent';
  color = '#2e7d32';
} else if (score >= 9) {
  grade = 'Good';
  color = '#1565c0';
}

// Optional chaining (not used but available in modern JS)
const name = user?.profile?.name;`
    },
    {
      category: 'Regular Expressions',
      locations: [
        { file: 'RegistrationForm.jsx', description: 'Email validation pattern, name character validation' },
        { file: 'HerbList.jsx', description: 'Case-insensitive search matching' }
      ],
      examples: `// Email validation regex
const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+\$/;
if (!emailPattern.test(email)) { /* invalid */ }

// Name validation - letters and spaces only
if (!/^[a-zA-Z\\s]+\$\d/.test(name)) { /* invalid */ }

// Test method returns boolean
/^[A-Z]/.test(password); // true if contains uppercase`
    },
    {
      category: 'DOM and Browser APIs',
      locations: [
        { file: 'cache.js', description: 'localStorage API for persistence' },
        { file: 'PlantGallery.jsx', description: 'window.addEventListener for keyboard navigation' },
        { file: 'RegistrationForm.jsx', description: 'document.getElementById for focus management' }
      ],
      examples: `// localStorage - persistent storage
localStorage.setItem('key', JSON.stringify(data));
const data = JSON.parse(localStorage.getItem('key'));

// Event listeners
window.addEventListener('keydown', handleKeyDown);
window.removeEventListener('keydown', handleKeyDown);

// DOM manipulation
document.getElementById(fieldId)?.focus();

// Date/Time
const now = Date.now();
const timestamp = new Date().toISOString();`
    },
    {
      category: 'React Hooks',
      locations: [
        { file: 'All components', description: 'useState for component state management' },
        { file: 'Quiz.jsx, RegistrationForm.jsx, etc.', description: 'useEffect for side effects and lifecycle' }
      ],
      examples: `// useState - state management
const [count, setCount] = useState(0);
const [formData, setFormData] = useState({ name: '', email: '' });

// useEffect - side effects
useEffect(() => {
  const cached = getCache('key');
  if (cached) setState(cached);
}, []); // Empty deps = run once on mount

useEffect(() => {
  setCache('key', value);
}, [value]); // Run when value changes

// State updater pattern
setAnswers(prev => ({ ...prev, [questionId]: answer }));`
    },
    {
      category: 'ES6+ Features',
      locations: [
        { file: 'All files', description: 'import/export modules, destructuring, spread operator' },
        { file: 'cache.js', description: 'Module exports: export const, export default' }
      ],
      examples: `// ES6 Modules
import React, { useState, useEffect } from 'react';
import { setCache, getCache } from '../utils/cache';
export const functionName = () => { ... };
export default Component;

// Default parameters
function greet(name = 'Guest') { ... }

// Rest parameters (not heavily used but available)
function sum(...numbers) { ... }`
    }
  ];

  const fileStructure = [
    { path: 'src/utils/cache.js', purpose: 'Caching utility module with localStorage operations' },
    { path: 'src/components/Navigation.jsx', purpose: 'Reusable navigation component with props and event handling' },
    { path: 'src/components/Hero.jsx', purpose: 'Hero banner component with conditional backgroundImage' },
    { path: 'src/components/SectionCard.jsx', purpose: 'Content wrapper component with customizable accent color' },
    { path: 'src/components/HerbList.jsx', purpose: 'Interactive herb display with search, filter, and expand functionality' },
    { path: 'src/components/PlantGallery.jsx', purpose: 'Image gallery with grid/list views, lightbox, and caching' },
    { path: 'src/components/RegistrationForm.jsx', purpose: 'Complex form with validation, controlled components, and caching' },
    { path: 'src/components/FeedbackForm.jsx', purpose: 'Feedback collection with conditional submission state' },
    { path: 'src/components/Quiz.jsx', purpose: 'Assessment with answer feedback, scoring, and explanation display' },
    { path: 'src/pages/HomePage.jsx', purpose: 'Landing page with extensive botanical and React content' },
    { path: 'src/pages/HerbsPage.jsx', purpose: 'Comprehensive herb education with interactive explorer' },
    { path: 'src/pages/GalleryPage.jsx', purpose: 'Visual documentation page with botanical photography content' },
    { path: 'src/pages/RegisterPage.jsx', purpose: 'Registration page with form validation educational content' },
    { path: 'src/pages/FeedbackPage.jsx', purpose: 'Feedback page with UX research content' },
    { path: 'src/pages/AboutPage.jsx', purpose: 'Documentation of all JavaScript concepts and locations' },
    { path: 'src/App.jsx', purpose: 'Main app component with routing logic and page configuration' },
    { path: 'src/main.jsx', purpose: 'Application entry point with React root rendering' },
    { path: 'src/index.css', purpose: 'Global styles with CSS variables and responsive design' }
  ];

  return (
    <>
      <div className="page-header" style={{ background: 'linear-gradient(90deg, #006064, #00bcd4)' }}>
        <h1>About This Project</h1>
        <p>Complete documentation of React concepts and JavaScript usage</p>
      </div>

      <div className="container">
        {/* Project Overview */}
        <SectionCard title="Project Overview" accentColor="#00838f">
          <p>
            This Plant Classification System demonstrates modern React development by converting
            a traditional multi-page HTML website into a component-based single-page application.
            The transformation showcases how React's declarative paradigm simplifies UI development
            while creating more engaging, interactive user experiences.
          </p>
          <p>
            The application contains over 5,000 words of botanical educational content distributed
            across multiple pages, each demonstrating different React patterns. From simple
            component composition on the Home page to complex state management in the Quiz and
            Registration forms, this project serves as a comprehensive React learning resource.
          </p>
          <p>
            Below you'll find detailed documentation of every JavaScript concept used throughout
            the application, with specific file locations and code examples. This reference can
            guide your exploration of the codebase or serve as a checklist for React learning.
          </p>
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            <strong>Quick Navigation:</strong>{' '}
            <Link to="/" style={{ marginLeft: '0.5rem', color: '#80deea', textDecoration: 'underline' }}>Home</Link>
            <Link to="/herbs" style={{ marginLeft: '0.5rem', color: '#80deea', textDecoration: 'underline' }}>Herbs</Link>
            <Link to="/gallery" style={{ marginLeft: '0.5rem', color: '#80deea', textDecoration: 'underline' }}>Gallery</Link>
            <Link to="/quiz" style={{ marginLeft: '0.5rem', color: '#80deea', textDecoration: 'underline' }}>Quiz</Link>
          </div>
        </SectionCard>

        {/* File Structure */}
        <SectionCard title="Application File Structure" accentColor="#00838f">
          <div className="file-structure">
            {fileStructure.map((file) => (
              <div key={file.path} className="file-item">
                <code className="file-path">{file.path}</code>
                <span className="file-purpose">{file.purpose}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* JavaScript Concepts */}
        {javascriptConcepts.map((concept, index) => (
          <SectionCard key={index} title={concept.category} accentColor="#00838f">
            <div className="concept-section">
              <h4>Used In:</h4>
              <ul className="locations-list">
                {concept.locations.map((loc, idx) => (
                  <li key={idx}>
                    <code>{loc.file}</code> — {loc.description}
                  </li>
                ))}
              </ul>

              <h4>Code Examples:</h4>
              <pre className="code-block">{concept.examples}</pre>
            </div>
          </SectionCard>
        ))}

        {/* React Concepts Summary */}
        <SectionCard title="React Concepts Summary" accentColor="#00838f">
          <div className="concepts-summary">
            <table className="concepts-table">
              <thead>
                <tr>
                  <th>Concept</th>
                  <th>Primary Files</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>JSX</strong></td>
                  <td>All .jsx files</td>
                  <td>HTML-like syntax embedded in JavaScript, compiled to React.createElement calls</td>
                </tr>
                <tr>
                  <td><strong>Components</strong></td>
                  <td>components/, pages/</td>
                  <td>Reusable UI building blocks that accept props and return JSX</td>
                </tr>
                <tr>
                  <td><strong>Props</strong></td>
                  <td>All components</td>
                  <td>Read-only data passed from parent to child components for configuration</td>
                </tr>
                <tr>
                  <td><strong>State (useState)</strong></td>
                  <td>Interactive components</td>
                  <td>Internal component data that triggers re-renders when changed</td>
                </tr>
                <tr>
                  <td><strong>Effects (useEffect)</strong></td>
                  <td>Components with caching</td>
                  <td>Side effects that run after render (data loading, subscriptions)</td>
                </tr>
                <tr>
                  <td><strong>Events</strong></td>
                  <td>All interactive elements</td>
                  <td>Handlers for user actions: onClick, onChange, onSubmit, onBlur</td>
                </tr>
                <tr>
                  <td><strong>Conditional Rendering</strong></td>
                  <td>All components</td>
                  <td>Display content based on state using && and ternary operators</td>
                </tr>
                <tr>
                  <td><strong>Lists (map)</strong></td>
                  <td>All list displays</td>
                  <td>Render arrays using .map() with unique key props</td>
                </tr>
                <tr>
                  <td><strong>Forms</strong></td>
                  <td>RegistrationForm, FeedbackForm</td>
                  <td>Controlled components with state-bound inputs and validation</td>
                </tr>
                <tr>
                  <td><strong>Caching</strong></td>
                  <td>cache.js, all forms</td>
                  <td>localStorage persistence for user data and preferences</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionCard>

        {/* Learning Path */}
        <SectionCard title="Suggested Learning Path" accentColor="#00838f">
          <p>
            If you're learning React through this codebase, we recommend exploring files in this order:
          </p>
          <ol className="learning-path">
            <li>
              <strong>Navigation.jsx</strong> — Start here. Simple component demonstrating props,
              map() for lists, and event handlers.
            </li>
            <li>
              <strong>Hero.jsx, SectionCard.jsx</strong> — Pure presentation components showing
              component composition and prop passing.
            </li>
            <li>
              <strong>HerbList.jsx</strong> — Introduces useState for toggle state, filter() for
              search, and nested conditional rendering.
            </li>
            <li>
              <strong>PlantGallery.jsx</strong> — More complex state management, view mode toggling,
              lightbox modal, and keyboard navigation.
            </li>
            <li>
              <strong>FeedbackForm.jsx</strong> — Form handling basics with controlled components
              and submission state.
            </li>
            <li>
              <strong>RegistrationForm.jsx</strong> — Advanced forms with validation, error handling,
              and comprehensive caching.
            </li>
            <li>
              <strong>Quiz.jsx</strong> — Most complex component combining arrays, state, effects,
              scoring logic, and detailed feedback display.
            </li>
            <li>
              <strong>cache.js</strong> — Utility module showing module patterns, localStorage API,
              and error handling.
            </li>
          </ol>
        </SectionCard>

        {/* Summary */}
        <SectionCard title="Summary: JavaScript Throughout the Application" accentColor="#00838f">
          <p>
            This application demonstrates that modern React development is fundamentally JavaScript
            development. While React provides the component model and rendering engine, the logic
            within components relies on core JavaScript: arrays for data, objects for state,
            functions for behavior, and expressions for transformation.
          </p>
          <p>
            The concepts documented here—variables, functions, array methods, object operations,
            template literals, conditionals, regular expressions, and browser APIs—form the
            foundation that makes React applications possible. Mastering these JavaScript
            fundamentals will make you a better React developer.
          </p>
          <p>
            Use this documentation as a reference when exploring the codebase. When you encounter
            unfamiliar syntax, consult the relevant section above. When you want to implement a
            similar feature in your own projects, find the component that demonstrates it and
            study the implementation.
          </p>
          <p className="final-note">
            The best way to learn is by doing. After studying these examples, try modifying them:
            add new herbs to the list, create additional quiz questions, extend the form validation,
            or implement new caching features. Active experimentation transforms passive reading
            into genuine understanding.
          </p>
        </SectionCard>
      </div>
    </>
  );
}

export default AboutPage;
