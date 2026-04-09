import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionCard from '../components/SectionCard';

/**
 * HomePage Component - Main Landing Page
 *
 * Contains extensive educational content about plant classification
 * and the React concepts demonstrated in this application.
 *
 * JavaScript Concepts Used:
 * - JSX syntax for component structure
 * - Component composition (Hero, SectionCard)
 * - Template literals for content
 * - Object literals for inline styles
 * - Array methods for rendering lists
 */
function HomePage() {
  const navigate = useNavigate();

  // Content sections as data arrays - demonstrates separation of content and presentation
  const classificationTypes = [
    {
      title: 'Herbs',
      description: 'Soft-stemmed plants with short life cycles',
      examples: 'Mint, Coriander, Spinach, Basil, Wheat',
      characteristics: 'Tender green stems, fibrous roots, rapid growth'
    },
    {
      title: 'Shrubs',
      description: 'Medium-sized woody plants with multiple stems',
      examples: 'Rose, Hibiscus, Jasmine, Lavender, Azalea',
      characteristics: 'Multiple woody stems, 1-6m height, perennial'
    },
    {
      title: 'Trees',
      description: 'Large plants with single thick trunk',
      examples: 'Oak, Banyan, Pine, Mango, Neem, Coconut',
      characteristics: 'Single trunk, extensive roots, secondary growth'
    },
    {
      title: 'Climbers',
      description: 'Plants requiring support for vertical growth',
      examples: 'Grapevine, Pea, Bean, Cucumber, Passion flower',
      characteristics: 'Weak stems, tendrils, vertical habit'
    },
    {
      title: 'Creepers',
      description: 'Plants spreading horizontally along ground',
      examples: 'Pumpkin, Watermelon, Strawberry, Sweet potato',
      characteristics: 'Horizontal growth, roots at nodes, ground cover'
    }
  ];

  const reactConcepts = [
    {
      name: 'JSX (JavaScript XML)',
      description: 'A syntax extension that allows writing HTML-like code in JavaScript. JSX makes component code more readable and enables the compiler to catch errors early.',
      example: 'Instead of createElement(), write <div className="card">Content</div>'
    },
    {
      name: 'Components',
      description: 'Reusable, independent building blocks of UI. Components can be functional (as in this app) or class-based. They receive props and return JSX.',
      example: 'Navigation, Hero, SectionCard are all reusable components used across pages'
    },
    {
      name: 'Props',
      description: 'Short for "properties" - data passed from parent to child components. Props are read-only and enable component reusability and configuration.',
      example: '<Hero title="Welcome" subtitle="Learn about plants" />'
    },
    {
      name: 'State (useState)',
      description: 'Internal component data that can change over time. When state changes, React automatically re-renders the component. This is the foundation of interactivity.',
      example: 'const [count, setCount] = useState(0) - creates a counter variable'
    },
    {
      name: 'Event Handlers',
      description: 'Functions that respond to user interactions like clicks, input changes, and form submissions. React uses camelCase naming (onClick, onChange).',
      example: '<button onClick={handleClick}>Click me</button>'
    },
    {
      name: 'Conditional Rendering',
      description: 'Displaying content based on conditions. React uses JavaScript operators like && (logical AND) and ternary operators (condition ? A : B).',
      example: '{isLoggedIn ? <Dashboard /> : <Login />}'
    },
    {
      name: 'Lists (map)',
      description: 'Rendering arrays of data using the Array.map() method. Each item needs a unique "key" prop for React\'s reconciliation algorithm.',
      example: '{items.map(item => <li key={item.id}>{item.name}</li>)}'
    },
    {
      name: 'Forms',
      description: 'Controlled components where form data is handled by React state. Every input has a value tied to state and an onChange handler to update it.',
      example: '<input value={name} onChange={(e) => setName(e.target.value)} />'
    },
    {
      name: 'Effects (useEffect)',
      description: 'Side effects that run after render - fetching data, subscriptions, DOM manipulation. Replaces lifecycle methods from class components.',
      example: 'useEffect(() => { fetchData() }, [dependency])'
    }
  ];

  return (
    <>
      <Hero
        title="Plant Classification & Identification System"
        subtitle="An academic integration of botanical science and interactive web technologies powered by React"
        backgroundImage="plants.jpg"
      />

      <div className="container">
        {/* Introduction Section */}
        <SectionCard title="Introduction to Plant Classification">
          <p>
            Plant classification, scientifically known as plant taxonomy, represents one of humanity's oldest
            systematic approaches to understanding the natural world. This discipline involves the identification,
            naming, and grouping of plants based on shared characteristics, evolutionary relationships, and
            genetic similarities. The importance of plant classification extends far beyond academic curiosity—it
            forms the foundation of agricultural productivity, ecological conservation, pharmaceutical research,
            and biodiversity preservation.
          </p>
          <p>
            The modern system of plant classification traces its roots to Carl Linnaeus, the 18th-century Swedish
            botanist who established the binomial nomenclature system still in use today. Under this system, each
            plant species receives a two-part Latin name consisting of the genus and species identifier. For
            example, the scientific name for mint is <em>Mentha</em>, while the rose belongs to the genus <em>Rosa</em>.
          </p>
          <p>
            Plants can be classified through multiple approaches. Morphological classification focuses on observable
            physical characteristics such as stem structure, leaf shape, flower arrangement, and root systems.
            Genetic classification, a more recent development enabled by DNA sequencing technology, groups plants
            based on their evolutionary relationships and shared ancestry. Ecological classification considers
            the habitats and environmental roles that plants occupy within ecosystems.
          </p>
          <p>
            The structural classification system used in this educational platform divides plants into five primary
            categories based on growth form and stem characteristics: herbs, shrubs, trees, climbers, and creepers.
            This approach is particularly valuable for students and beginners because it relies on easily observable
            features rather than requiring microscopic examination or genetic analysis.
          </p>
        </SectionCard>

        {/* Classification Types Section */}
        <SectionCard title="The Five Major Plant Categories">
          <p>
            Understanding the five major plant categories provides a foundation for botanical literacy and
            environmental awareness. Each category represents distinct evolutionary adaptations to different
            ecological niches and environmental pressures.
          </p>

          <div className="classification-grid">
            {classificationTypes.map((type, index) => (
              <div
                key={index}
                className="classification-card"
                onClick={() => navigate('/herbs')}
                style={{ cursor: 'pointer' }}
              >
                <h3>{type.title}</h3>
                <p className="classification-desc">{type.description}</p>
                <p><strong>Examples:</strong> {type.examples}</p>
                <p><strong>Key Features:</strong> {type.characteristics}</p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '20px' }}>
            These categories are not rigid boxes but rather points along a spectrum of plant diversity. Some
            plants exhibit characteristics of multiple categories, and certain species may transition between
            categories as they mature. For instance, some plants begin as herbaceous seedlings and develop
            woody stems as they age. Understanding these nuances is essential for accurate plant identification
            and appreciation of botanical diversity.
          </p>
        </SectionCard>

        {/* Educational Integration Section */}
        <SectionCard title="Educational and Technological Integration">
          <p>
            This platform represents a deliberate fusion of botanical education and modern web development
            practices. By leveraging React—a leading JavaScript library for building user interfaces—we
            transform static educational content into an interactive, engaging learning experience.
          </p>
          <p>
            The traditional approach to educational websites involved creating separate HTML files for each
            page, with content hardcoded into the markup. Updates required editing multiple files, and user
            interactions were limited to basic hyperlinks and form submissions. React revolutionizes this
            approach through component-based architecture and state-driven rendering.
          </p>
          <p>
            Each page within this system demonstrates specific programming constructs alongside botanical
            content. The Herbs page utilizes arrays and loops to display herb information dynamically. The
            Gallery page demonstrates object usage and event handling for interactive image selection. The
            Registration form implements controlled components with comprehensive validation logic. The
            Assessment module calculates scores using conditional statements and provides immediate feedback.
          </p>
          <p>
            This integration serves dual educational purposes. First, it teaches botanical classification
            through well-organized, visually appealing content. Second, it demonstrates how modern programming
            concepts can be applied to create engaging educational experiences. Students studying computer
            science can examine the code to understand React principles in action, while botany students
            benefit from the interactive features that reinforce their learning.
          </p>
        </SectionCard>

        {/* React Concepts Section */}
        <SectionCard title="React Concepts Demonstrated in This Application">
          <p>
            This application serves as a comprehensive demonstration of modern React development practices.
            Below is a detailed explanation of each concept implemented throughout the platform:
          </p>

          <div className="concepts-list">
            {reactConcepts.map((concept, index) => (
              <div key={index} className="concept-item">
                <h3>{concept.name}</h3>
                <p>{concept.description}</p>
                <div className="concept-example">
                  <strong>Example:</strong> {concept.example}
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '20px' }}>
            Beyond these core concepts, the application also implements several advanced patterns and best
            practices. Custom hooks encapsulate reusable logic for caching and data persistence. Component
            composition allows complex UIs to be built from simple, focused building blocks. The use of
            CSS variables enables consistent theming across all pages. Accessibility considerations include
            semantic HTML, keyboard navigation support, and screen reader compatibility.
          </p>
        </SectionCard>

        {/* Importance Section */}
        <SectionCard title="The Importance of Plant Classification in Modern Science">
          <p>
            Plant classification remains critically relevant in the 21st century, addressing challenges
            ranging from food security to climate change. Agricultural scientists rely on accurate plant
            identification to develop improved crop varieties, manage pests and diseases, and optimize
            cultivation practices. Conservation biologists use classification systems to document
            biodiversity, identify endangered species, and prioritize habitat protection efforts.
          </p>
          <p>
            The pharmaceutical industry continues to discover new medicinal compounds from plants, with
            traditional knowledge often guiding researchers toward promising species. Accurate classification
            ensures that the correct plants are studied and that findings can be reliably replicated and
            applied. The discovery of artemisinin from sweet wormwood (<em>Artemisia annua</em>), which
            earned the Nobel Prize for its malaria treatment, exemplifies the ongoing importance of
            botanical knowledge.
          </p>
          <p>
            Climate change research depends on understanding plant distributions and responses to
            environmental shifts. Classification provides the framework for tracking how species migrate,
            adapt, or face extinction as temperatures rise and precipitation patterns change. This
            information informs conservation strategies and helps predict ecosystem-level consequences
            of global change.
          </p>
          <p>
            Education plays a crucial role in preserving and expanding botanical knowledge. By making
            plant classification accessible and engaging through interactive technology, this platform
            contributes to a broader understanding of the natural world. Whether you are a student
            beginning your botanical studies, an educator seeking teaching resources, or simply a
            curious learner, we hope this system enhances your appreciation of plant diversity and
            demonstrates the power of modern web technologies.
          </p>
        </SectionCard>
      </div>
    </>
  );
}

export default HomePage;
