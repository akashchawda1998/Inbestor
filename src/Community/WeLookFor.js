import React from 'react';
import icon1 from '../assets/lookFor1.png';
import icon2 from '../assets/lookFor2.png';
import icon3 from '../assets/lookFor3.png';
import icon4 from '../assets/lookFor2.png';

const traits = [
  {
    title: 'Mindset',
    subtitle: 'of a consistent and confident trader',
    img: icon1,
  },
  {
    title: 'Learnability',
    subtitle: 'open to feedback and improvement',
    img: icon2,
  },
  {
    title: 'Responsibility',
    subtitle: 'ownership of your own growth',
    img: icon3,
  },
  {
    title: 'Commitment',
    subtitle: 'to the process, the practice, and the tribe',
    img: icon4,
  },
];

const WhatWeLookFor = () => (
  <div className="what-we-look-for">
    <h2>
      <span className="highlight">What We</span> Look For In You
    </h2>
    <p className="description">This is not for everyone. We’re looking for:</p>
    <div className="divider" />
    <div className="traits-grid">
      {traits.map((trait, i) => (
        <div key={i} className="trait-card">
          <img src={trait.img} alt={trait.title} />
          <div className="trait-text">
            <div className="trait-title">{trait.title}</div>
            <div className="trait-subtitle">{trait.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default WhatWeLookFor;
