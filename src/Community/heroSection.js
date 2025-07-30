import React from 'react';

const HeroSection = () => (
  <div
    style={{
      background: 'radial-gradient(ellipse at center, #0d0d0d 0%, #000000 100%)',
      color: '#fff',
      height: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 20px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <h1 style={{ fontSize: '55px', fontWeight: 400, color: '#ccc', margin: 0 }}>
      Explore
    </h1>
    <h2 style={{ fontSize: '48px', fontWeight: '700', color: '#FFD762', margin: '10px 0 30px' }}>
      Investors Community
    </h2>
    <button
      style={{
        background: 'linear-gradient(90deg, #FFD762 0%, #FFCB47 100%)',
        color: '#000',
        border: 'none',
        borderRadius: '999px',
        padding: '12px 24px',
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        
      }}
    >
      WATCH NOW
      <span style={{ fontSize: '16px' }}>➝</span>
    </button>

    {/* Optional: Decorative Lines (for visual accuracy) */}
    <div style={{ position: 'absolute', top: '20%', left: "30%", height: '1px', width: '100px', background: 'linear-gradient(to right, #fff, transparent)' }} />
    <div style={{ position: 'absolute', top: '10%', right: '30%', width: '1px', height: '80px', background: 'linear-gradient(to bottom, #fff, transparent)' }} />
    <div style={{ position: 'absolute', bottom: '10%', right: '30%', height: '1px', width: '100px', background: 'linear-gradient(to left, #fff, transparent)' }} />
  </div>
);

export default HeroSection;
