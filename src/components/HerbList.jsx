import React, { useState, useEffect } from 'react';
import { setCache, getCache, CACHE_KEYS } from '../utils/cache';

/**
 * HerbList Component - Interactive Herb Display with Search and Filtering
 *
 * JavaScript/React Concepts Demonstrated:
 * - useState: Managing display state, search term, filter category
 * - useEffect: Loading cached expanded state on mount
 * - map(): Rendering herb items from array
 * - Conditional Rendering: Show/hide list, filtered results
 * - Event Handlers: onClick for toggle, onInput for search
 * - Array Methods: filter(), includes(), toLowerCase()
 * - Template Literals: Dynamic class names and messages
 * - String Methods: toLowerCase(), includes(), trim()
 *
 * @component
 */
function HerbList() {
  // Extended herb data with botanical information
  const herbs = [
    {
      id: 1,
      name: 'Mint',
      scientificName: 'Mentha',
      family: 'Lamiaceae',
      uses: ['Culinary', 'Medicinal', 'Aromatic'],
      description: 'Mint is a perennial herb with highly aromatic leaves. It has been used for thousands of years in cooking, medicine, and religious ceremonies. The plant spreads aggressively through underground rhizomes.',
      growingConditions: 'Partial shade, moist soil',
      nativeRegion: 'Europe, Asia, Africa',
      category: 'culinary'
    },
    {
      id: 2,
      name: 'Coriander',
      scientificName: 'Coriandrum sativum',
      family: 'Apiaceae',
      uses: ['Culinary', 'Medicinal', 'Essential Oil'],
      description: 'Coriander, also known as cilantro in its fresh form, is one of the most widely used herbs globally. All parts of the plant are edible, including leaves, stems, seeds, and roots.',
      growingConditions: 'Full sun, well-drained soil',
      nativeRegion: 'Southern Europe, North Africa',
      category: 'culinary'
    },
    {
      id: 3,
      name: 'Spinach',
      scientificName: 'Spinacia oleracea',
      family: 'Amaranthaceae',
      uses: ['Culinary', 'Nutritional'],
      description: 'Spinach is a leafy green vegetable rich in iron, vitamins, and antioxidants. It was cultivated in ancient Persia and introduced to Europe in the Middle Ages. Popeye\'s favorite food is packed with nutrients.',
      growingConditions: 'Cool weather, fertile soil',
      nativeRegion: 'Central Asia, Persia',
      category: 'vegetable'
    },
    {
      id: 4,
      name: 'Basil',
      scientificName: 'Ocimum basilicum',
      family: 'Lamiaceae',
      uses: ['Culinary', 'Medicinal', 'Religious'],
      description: 'Basil is a tender annual herb with distinctive aroma. It is sacred in many cultures and is a key ingredient in Italian pesto and Thai cuisine. The plant has been associated with royalty and sacred rituals.',
      growingConditions: 'Full sun, warm temperatures',
      nativeRegion: 'Central Africa, Southeast Asia',
      category: 'culinary'
    },
    {
      id: 5,
      name: 'Tulsi (Holy Basil)',
      scientificName: 'Ocimum tenuiflorum',
      family: 'Lamiaceae',
      uses: ['Medicinal', 'Religious', 'Aromatic'],
      description: 'Tulsi is revered in Hinduism as an incarnation of the goddess Lakshmi. It has been used in Ayurvedic medicine for over 3,000 years and is considered an adaptogen that helps the body cope with stress.',
      growingConditions: 'Full sun, moderate water',
      nativeRegion: 'Indian Subcontinent',
      category: 'medicinal'
    },
    {
      id: 6,
      name: 'Parsley',
      scientificName: 'Petroselinum crispum',
      family: 'Apiaceae',
      uses: ['Culinary', 'Medicinal', 'Garnish'],
      description: 'Parsley is a biennial herb commonly used as a garnish and flavoring agent. It was used in ancient Greece for medicinal purposes and to crown victors at athletic contests. Rich in vitamins A, C, and K.',
      growingConditions: 'Partial shade, moist soil',
      nativeRegion: 'Central Mediterranean',
      category: 'culinary'
    },
    {
      id: 7,
      name: 'Oregano',
      scientificName: 'Origanum vulgare',
      family: 'Lamiaceae',
      uses: ['Culinary', 'Medicinal'],
      description: 'Oregano is a flowering plant in the mint family. Its leaves are one of the most popular herbs in Mediterranean and Mexican cuisines. The name comes from Greek words meaning "joy of the mountain."',
      growingConditions: 'Full sun, well-drained soil',
      nativeRegion: 'Europe, Mediterranean',
      category: 'culinary'
    },
    {
      id: 8,
      name: 'Thyme',
      scientificName: 'Thymus vulgaris',
      family: 'Lamiaceae',
      uses: ['Culinary', 'Medicinal', 'Essential Oil'],
      description: 'Thyme is an evergreen perennial herb with small, highly aromatic leaves. Ancient Egyptians used it for embalming, Greeks for incense, and Romans to flavor cheese. It has strong antimicrobial properties.',
      growingConditions: 'Full sun, dry soil',
      nativeRegion: 'Southern Europe, Mediterranean',
      category: 'culinary'
    },
    {
      id: 9,
      name: 'Rosemary',
      scientificName: 'Rosmarinus officinalis',
      family: 'Lamiaceae',
      uses: ['Culinary', 'Medicinal', 'Aromatic'],
      description: 'Rosemary is a woody, perennial herb with fragrant, evergreen needle-like leaves. Its name means "dew of the sea." It has been associated with memory and remembrance since ancient times.',
      growingConditions: 'Full sun, well-drained soil',
      nativeRegion: 'Mediterranean region',
      category: 'culinary'
    },
    {
      id: 10,
      name: 'Sage',
      scientificName: 'Salvia officinalis',
      family: 'Lamiaceae',
      uses: ['Culinary', 'Medicinal', 'Ritual'],
      description: 'Sage is a perennial herb with grayish-green leaves and purple flowers. The name comes from Latin "salvere" meaning "to save." It has been used for centuries to treat digestive and cognitive disorders.',
      growingConditions: 'Full sun, well-drained soil',
      nativeRegion: 'Mediterranean region',
      category: 'medicinal'
    },
    {
      id: 11,
      name: 'Dill',
      scientificName: 'Anethum graveolens',
      family: 'Apiaceae',
      uses: ['Culinary', 'Medicinal'],
      description: 'Dill is an annual herb with soft, feathery leaves. Both the leaves and seeds are used in cooking. The name comes from Old Norse "dilla" meaning "to lull," referring to its calming properties.',
      growingConditions: 'Full sun, moist soil',
      nativeRegion: 'Mediterranean, Asia',
      category: 'culinary'
    },
    {
      id: 12,
      name: 'Fennel',
      scientificName: 'Foeniculum vulgare',
      family: 'Apiaceae',
      uses: ['Culinary', 'Medicinal', 'Aromatic'],
      description: 'Fennel is a flowering herb with yellow flowers and feathery leaves. All parts are edible and have a mild anise flavor. Ancient Romans believed it could ward off evil spirits.',
      growingConditions: 'Full sun, well-drained soil',
      nativeRegion: 'Mediterranean region',
      category: 'culinary'
    },
    {
      id: 13,
      name: 'Lavender',
      scientificName: 'Lavandula',
      family: 'Lamiaceae',
      uses: ['Aromatic', 'Medicinal', 'Ornamental'],
      description: 'Lavender is a flowering plant known for its distinctive purple flowers and calming fragrance. It has been used for centuries in perfumes, aromatherapy, and as a sleep aid.',
      growingConditions: 'Full sun, dry soil',
      nativeRegion: 'Mediterranean, Arabia, India',
      category: 'aromatic'
    },
    {
      id: 14,
      name: 'Chives',
      scientificName: 'Allium schoenoprasum',
      family: 'Amaryllidaceae',
      uses: ['Culinary', 'Ornamental'],
      description: 'Chives are the smallest species of the onion family. They have hollow, tubular leaves that provide a mild onion flavor. The plant produces edible purple flowers in summer.',
      growingConditions: 'Full sun to partial shade',
      nativeRegion: 'Europe, Asia, North America',
      category: 'culinary'
    },
    {
      id: 15,
      name: 'Lemongrass',
      scientificName: 'Cymbopogon',
      family: 'Poaceae',
      uses: ['Culinary', 'Medicinal', 'Aromatic'],
      description: 'Lemongrass is a tropical grass with a distinctive lemon scent. It is a staple in Southeast Asian cuisine and traditional medicine. The plant contains citral, which has antimicrobial properties.',
      growingConditions: 'Full sun, warm climate',
      nativeRegion: 'Southeast Asia, Australia',
      category: 'culinary'
    }
  ];

  // State management
  const [showList, setShowList] = useState(false);
  const [expandedHerb, setExpandedHerb] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayCount, setDisplayCount] = useState(0);

  // Load cached state on mount using useEffect
  useEffect(() => {
    const cachedExpanded = getCache('herb_expanded');
    if (cachedExpanded) {
      setExpandedHerb(cachedExpanded);
    }
  }, []);

  // Cache expanded herb state
  useEffect(() => {
    if (expandedHerb) {
      setCache('herb_expanded', expandedHerb, 60 * 60 * 1000);
    }
  }, [expandedHerb]);

  // Event handler: Toggle list visibility
  const handleToggle = () => {
    const newState = !showList;
    setShowList(newState);
    if (newState) {
      setDisplayCount(herbs.length);
    }
  };

  // Event handler: Toggle herb detail expansion
  const handleExpand = (herbId) => {
    setExpandedHerb(expandedHerb === herbId ? null : herbId);
  };

  // Event handler: Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Event handler: Handle category filter
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter herbs based on search and category
  // Demonstrates: array filter, string methods, logical operators
  const filteredHerbs = herbs.filter(herb => {
    const matchesSearch = herb.name.toLowerCase().includes(searchTerm) ||
                         herb.scientificName.toLowerCase().includes(searchTerm) ||
                         herb.description.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === 'all' || herb.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories for filter
  const categories = ['all', ...new Set(herbs.map(h => h.category))];

  // Capitalize first letter helper
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="herb-list-container">
      <p className="herb-intro">
        Explore our comprehensive collection of herbs. Each herb includes botanical
        information, growing conditions, and traditional uses. Use the search and
        filter options to find specific herbs.
      </p>

      {/* CONTROL BUTTON */}
      <button onClick={handleToggle} className="primary-btn toggle-btn">
        {showList ? 'Hide Herb List' : `Display ${herbs.length} Herbs`}
      </button>

      {/* CONDITIONAL: Show list only when toggled */}
      {showList && (
        <div className="herb-list-wrapper">
          {/* Search and Filter Controls */}
          <div className="herb-controls">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search herbs by name..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="clear-search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="category-filter">
              <span>Filter:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {capitalize(cat)}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="results-count">
            Showing {filteredHerbs.length} of {herbs.length} herbs
            {searchTerm && ` matching "${searchTerm}"`}
          </p>

          {/* LISTS: Map filtered herbs to cards */}
          {filteredHerbs.length > 0 ? (
            <div className="herb-cards">
              {filteredHerbs.map((herb) => (
                <div
                  key={herb.id}
                  className={`herb-card ${expandedHerb === herb.id ? 'expanded' : ''}`}
                >
                  <div className="herb-card-header" onClick={() => handleExpand(herb.id)}>
                    <h3 className="herb-name">{herb.name}</h3>
                    <span className="expand-icon">
                      {expandedHerb === herb.id ? '−' : '+'}
                    </span>
                  </div>
                  <p className="herb-scientific"><em>{herb.scientificName}</em></p>
                  <p className="herb-family">Family: {herb.family}</p>

                  {/* CONDITIONAL: Show details when expanded */}
                  {expandedHerb === herb.id && (
                    <div className="herb-details">
                      <div className="detail-section">
                        <h4>Description</h4>
                        <p>{herb.description}</p>
                      </div>

                      <div className="detail-row">
                        <div className="detail-item">
                          <strong>Native Region:</strong>
                          <span>{herb.nativeRegion}</span>
                        </div>
                        <div className="detail-item">
                          <strong>Growing Conditions:</strong>
                          <span>{herb.growingConditions}</span>
                        </div>
                      </div>

                      <div className="detail-section">
                        <h4>Uses</h4>
                        <div className="uses-tags">
                          {herb.uses.map((use) => (
                            <span key={use} className="use-tag">{use}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No herbs found matching your criteria.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                className="secondary-btn"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HerbList;
