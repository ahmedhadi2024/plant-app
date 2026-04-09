import React from 'react';

// COMPONENT: SectionCard wraps content with consistent styling
// PROPS: title, children, and accentColor are passed from parent
function SectionCard({ title, children, accentColor = '#66bb6a' }) {
  return (
    <div className="section-card">
      {title && (
        <h2 style={{ borderLeftColor: accentColor }}>{title}</h2>
      )}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default SectionCard;
