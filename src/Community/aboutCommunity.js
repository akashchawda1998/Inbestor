import React from 'react';
import aboutCom from './about.png';

const AboutCommunity = () => (
  <div className="about-container">
    <h2 className="about-heading">About the Community</h2>

    <div className="about-flex">
      <div className="about-text">
        <p className="about-description">
          Inbestors is India's first invite-only, offline-first trading community designed
          for serious traders who want to grow with structure, mentorship, and accountability.
          <br /><br />
          We don’t believe in market noise. We believe in clarity, confidence, and community.
        </p>

        <h3 className="about-subheading">What You Get:</h3>

        <div className="about-points">
          <p>
            <strong>1. Equity Masterclass</strong> (2-Day Workshop)<br />
            • Mandatory starting point for all members<br />
            • 12 hours of offline learning (6 hrs/day)<br />
            • Builds your foundation and aligns you with our mindset
          </p>

          <p>
            <strong>2. Welcome Kit</strong><br />
            • Curated resources to kickstart your journey
          </p>

          <p>
            <strong>3. 6 Advanced Learning Sessions (Offline)</strong><br />
            • Twice a month | Saturday 7:30 AM – 10:00 AM<br />
            • Expert-led sessions + activities, games, and networking
          </p>

          <p>
            <strong>4. One-on-One Mentorship</strong><br />
            • 6 personal sessions each quarter<br />
            • Portfolio, strategy, and query discussions
          </p>
        </div>
      </div>

      <div className="about-image">
        <img src={aboutCom} alt="Community members" />
      </div>
    </div>
  </div>
);

export default AboutCommunity;
