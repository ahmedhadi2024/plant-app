import React from 'react';

// COMPONENT: Hero displays the main banner
// PROPS: title and subtitle are customizable
function Hero({ title, subtitle, backgroundImage }) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`
          : 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))'
      }}
    >
      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}

export default Hero;
