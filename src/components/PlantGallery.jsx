import React, { useState, useEffect } from 'react';
import { setCache, getCache, CACHE_KEYS } from '../utils/cache';

/**
 * PlantGallery Component - Interactive Image Gallery with Lightbox
 *
 * JavaScript/React Concepts Demonstrated:
 * - useState: Managing selected image, zoom state, view mode
 * - useEffect: Loading cached selection on mount
 * - map(): Rendering gallery images from data array
 * - Conditional Rendering: Show info box, lightbox modal
 * - Event Handlers: onClick for selection, keyboard navigation
 * - Array Methods: find(), filter() for gallery operations
 * - Object destructuring: Extracting properties from plant objects
 * - Template Literals: Dynamic class names, formatted text
 *
 * @component
 */
function PlantGallery() {
  // Extended plant data with detailed botanical information
  const plants = [
    {
      id: 1,
      src: 'herbs.jpg',
      type: 'Herb',
      alt: 'Herb - Soft-stemmed plant',
      title: 'Herbs - The Soft-Stemmed Wonders',
      description: 'Herbs are herbaceous plants with soft, tender stems that lack woody tissue. They form the foundation of global agriculture and include many medicinal and culinary plants.',
      characteristics: ['Soft green stems', 'Short life cycle', 'Rapid growth', 'Fibrous roots'],
      examples: ['Mint', 'Coriander', 'Spinach', 'Basil', 'Wheat', 'Rice'],
      ecologicalRole: 'Primary producers, soil stabilizers, food source for herbivores',
      economicImportance: 'Food crops, medicine, cosmetics, essential oils'
    },
    {
      id: 2,
      src: 'shrub.jpg',
      type: 'Shrub',
      alt: 'Shrub - Woody plant with multiple stems',
      title: 'Shrubs - The Medium Woody Plants',
      description: 'Shrubs are perennial woody plants with multiple stems arising from the base. They are larger than herbs but smaller than trees, typically ranging from 1 to 6 meters in height.',
      characteristics: ['Multiple woody stems', 'Medium height (1-6m)', 'Perennial', 'Bushy growth'],
      examples: ['Rose', 'Hibiscus', 'Jasmine', 'Lavender', 'Azalea', 'Bougainvillea'],
      ecologicalRole: 'Wildlife habitat, erosion control, nitrogen fixation',
      economicImportance: 'Ornamental horticulture, pharmaceuticals, perfumes'
    },
    {
      id: 3,
      src: 'tree.jpg',
      type: 'Tree',
      alt: 'Tree - Large woody plant with single trunk',
      title: 'Trees - The Giants of the Plant Kingdom',
      description: 'Trees are large perennial plants with a single woody trunk supporting branches and leaves. They are the tallest and longest-living organisms on Earth, playing crucial roles in ecosystems.',
      characteristics: ['Single thick trunk', 'Extensive root system', 'Secondary growth', 'Long lifespan'],
      examples: ['Oak', 'Banyan', 'Pine', 'Mango', 'Neem', 'Coconut'],
      ecologicalRole: 'Oxygen production, carbon sequestration, habitat creation',
      economicImportance: 'Timber, fruit production, climate regulation'
    },
    {
      id: 4,
      src: 'climber.jpg',
      type: 'Climber',
      alt: 'Climber - Plant requiring support structure',
      title: 'Climbers - The Vertical Growers',
      description: 'Climbers are plants with weak stems that cannot support their own weight. They use specialized structures like tendrils, twining stems, or aerial roots to climb upward on supports.',
      characteristics: ['Weak flexible stems', 'Specialized climbing organs', 'Vertical growth habit', 'Rapid elongation'],
      examples: ['Grapevine', 'Pea', 'Bean', 'Cucumber', 'Passion flower', 'Honeysuckle'],
      ecologicalRole: 'Forest canopy access, vertical space utilization',
      economicImportance: 'Fruit crops, ornamental gardening, traditional medicine'
    },
    {
      id: 5,
      src: 'creeper.jpg',
      type: 'Creeper',
      alt: 'Creeper - Plant spreading along ground',
      title: 'Creepers - The Ground Spreaders',
      description: 'Creepers are plants that grow horizontally along the ground surface. They produce roots at nodes where they touch the soil, allowing them to cover large areas effectively.',
      characteristics: ['Horizontal growth', 'Roots at nodes', 'Ground coverage', 'Spreading habit'],
      examples: ['Pumpkin', 'Watermelon', 'Strawberry', 'Money plant', 'Sweet potato'],
      ecologicalRole: 'Soil erosion prevention, ground cover, moisture retention',
      economicImportance: 'Vegetable crops, ornamental ground cover, weed suppression'
    }
  ];

  // State management using useState hook
  const [selectedType, setSelectedType] = useState(null);
  const [showInfo, setShowInfo] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load cached state on mount using useEffect
  useEffect(() => {
    const cachedSelection = getCache('gallery_selection');
    if (cachedSelection) {
      setSelectedType(cachedSelection.selectedType);
      setShowInfo(cachedSelection.showInfo);
      setViewMode(cachedSelection.viewMode || 'grid');
    }

    // Track gallery visits
    const galleryVisits = getCache('gallery_visits') || 0;
    setCache('gallery_visits', galleryVisits + 1, 7 * 24 * 60 * 60 * 1000);
  }, []);

  // Cache gallery state changes
  useEffect(() => {
    setCache('gallery_selection', {
      selectedType,
      showInfo,
      viewMode
    }, 24 * 60 * 60 * 1000);
  }, [selectedType, showInfo, viewMode]);

  // Event handler: Handle image/plant selection
  const handlePlantClick = (plantType) => {
    if (selectedType === plantType) {
      // Toggle off if already selected
      setSelectedType(null);
    } else {
      setSelectedType(plantType);
      setLightboxOpen(true);
      setCurrentIndex(plants.findIndex(p => p.type === plantType));
    }
  };

  // Event handler: Navigate lightbox
  const navigateLightbox = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = plants.length - 1;
    if (newIndex >= plants.length) newIndex = 0;
    setCurrentIndex(newIndex);
    setSelectedType(plants[newIndex].type);
  };

  // Event handler: Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Event handler: Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentIndex]);

  // Get current plant for lightbox
  const currentPlant = plants.find(p => p.type === selectedType);

  // Get plant by ID for grid rendering
  const getPlantById = (id) => plants.find(p => p.id === id);

  return (
    <div className="gallery-container">
      <p className="gallery-intro">
        Explore our visual documentation of plant classifications. Click on any plant
        image to view detailed botanical information, characteristics, and ecological
        significance. Use the view toggle to switch between grid and list layouts.
      </p>

      {/* View Mode Toggle */}
      <div className="gallery-controls">
        <div className="view-toggle">
          <button
            onClick={() => setViewMode('grid')}
            className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
            title="Grid View"
          >
            ⊞ Grid
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
            title="List View"
          >
            ☰ List
          </button>
        </div>

        <button
          onClick={() => setShowInfo(!showInfo)}
          className="info-toggle"
        >
          {showInfo ? '📋 Hide Info' : '📋 Show Info'}
        </button>
      </div>

      {/* GALLERY: Conditional rendering based on view mode */}
      {viewMode === 'grid' ? (
        // GRID VIEW
        <div className="gallery-grid">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className={`gallery-item ${selectedType === plant.type ? 'selected' : ''}`}
              onClick={() => handlePlantClick(plant.type)}
            >
              <div className="image-wrapper">
                <img
                  src={plant.src}
                  alt={plant.alt}
                  className={`gallery-img ${selectedType === plant.type ? 'zoomed' : ''}`}
                  loading="lazy"
                />
                {selectedType === plant.type && (
                  <div className="selection-indicator">✓ Selected</div>
                )}
              </div>
              <div className="plant-label">
                <span className="plant-type">{plant.type}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // LIST VIEW
        <div className="gallery-list">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className={`list-item ${selectedType === plant.type ? 'selected' : ''}`}
              onClick={() => handlePlantClick(plant.type)}
            >
              <img
                src={plant.src}
                alt={plant.alt}
                className="list-img"
                loading="lazy"
              />
              <div className="list-content">
                <h3>{plant.type}</h3>
                <p>{plant.description.substring(0, 150)}...</p>
                <div className="list-characteristics">
                  {plant.characteristics.map((char, idx) => (
                    <span key={idx} className="char-tag">{char}</span>
                  ))}
                </div>
              </div>
              {selectedType === plant.type && (
                <span className="selected-badge">✓</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* CONDITIONAL: Show info box when a plant is selected */}
      {showInfo && selectedType && currentPlant && (
        <div className="plant-info-panel">
          <div className="info-header">
            <h2>{currentPlant.title}</h2>
            <button onClick={() => setSelectedType(null)} className="close-info">✕</button>
          </div>

          <div className="info-content">
            <div className="info-section">
              <h3>Description</h3>
              <p>{currentPlant.description}</p>
            </div>

            <div className="info-grid">
              <div className="info-card">
                <h4>Key Characteristics</h4>
                <ul>
                  {currentPlant.characteristics.map((char, idx) => (
                    <li key={idx}>✓ {char}</li>
                  ))}
                </ul>
              </div>

              <div className="info-card">
                <h4>Common Examples</h4>
                <ul>
                  {currentPlant.examples.map((ex, idx) => (
                    <li key={idx}>• {ex}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="info-section">
              <h3>Ecological Role</h3>
              <p>{currentPlant.ecologicalRole}</p>
            </div>

            <div className="info-section">
              <h3>Economic Importance</h3>
              <p>{currentPlant.economicImportance}</p>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL - Full screen image viewer */}
      {lightboxOpen && currentPlant && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>✕</button>

            <button
              className="lightbox-nav prev"
              onClick={() => navigateLightbox(-1)}
            >
              ‹
            </button>

            <div className="lightbox-image-wrapper">
              <img
                src={currentPlant.src}
                alt={currentPlant.alt}
                className="lightbox-img"
              />
            </div>

            <button
              className="lightbox-nav next"
              onClick={() => navigateLightbox(1)}
            >
              ›
            </button>

            <div className="lightbox-info">
              <h3>{currentPlant.title}</h3>
              <p>{currentPlant.description}</p>
              <div className="lightbox-meta">
                <span>Plant {currentIndex + 1} of {plants.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Statistics */}
      <div className="gallery-stats">
        <p>
          <strong>{plants.length}</strong> plant categories documented |
          Click any image to explore |
          Press <kbd>←</kbd> <kbd>→</kbd> to navigate in lightbox
        </p>
      </div>
    </div>
  );
}

export default PlantGallery;
