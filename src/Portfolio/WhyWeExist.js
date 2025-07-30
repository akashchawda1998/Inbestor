import React from 'react';
import icon1 from '../assets/existIcon1.png';
import icon2 from '../assets/existIcon3.png';
import icon3 from '../assets/existIcon2.png';

const WhyWeExist = () => {
  const promises = [
    { img: icon1, title: 'Clarity over chaos' },
    { img: icon2, title: 'Confidence through community' },
    { img: icon3, title: 'Progress with purpose' },
  ];

  return (
    <div className="why-we-exist-container">
      <h2 className="why-we-exist-heading">
        Why We <span className="highlight">Exist</span>
      </h2>


      <p className="why-we-exist-subtitle">
        Traders don’t need more noise. They need structure, support, and self-belief.
      </p>

      <div className="divider" />

      <div className="promise-label">We promise:</div>
<br></br>
      <div className="promises-wrapper mt-5">
        {promises.map((item, index) => (
          <div key={index} className="promise-card">
            <div className="icon-wrapper">
              <img src={item.img} alt="" className="promise-icon" />
            </div>
            <div className="promise-title">{item.title}</div>
          </div>
        ))}
      </div>

      <p className="final-message">
        Because this isn’t just about profits — it’s about becoming a better version of yourself.
      </p>
    </div>
  );
};

export default WhyWeExist;
