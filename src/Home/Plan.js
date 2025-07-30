import React from 'react';
import logo from '../Include/finallogo.png'; // Replace with your logo path

const cardData = [
  {
    title: 'Learning',
    // investment: '20,000',
    benefits: [
      'Step by step learning with practical examples and real world application.',
      'Learn at your own pace with anytime access.',
      'Expert support by SEBI registered Research Analyst.',
    ],
    buttonClass: 'outline',
  },
  {
    title: 'Portfolios',
    // investment: '50,000',
    benefits: [
      'Research Backed, Rule based portfolio',
      'Weekly rebalancing every Monday.',
      'Full transparency and Control',
    ],
    buttonClass: 'highlight',
  },
  {
    title: 'Community',
    // investment: '50 Lakhs',
    benefits: [
      'Comprehensive learning, exclusive resources & mentorship.',
      'Ongoing support by SEBI RA',
      'Access to active community of like minded traders.',
    ],
    buttonClass: 'outline',
  },
];

export default function InvestmentCards() {
  return (
    <section className="investment-section py-5 text-white">
      <div className="container-fluid text-center mb-5">
  <h2 className="clarity-title d-flex flex-wrap justify-content-center align-items-center gap-2">
    <span className="text-text">
      <span className="text-hightlight">C</span>larity
    </span>
    <span className="text-white">•</span>
    <span className="text-text">
      <span className="text-hightlight">C</span>onfidence
    </span>
    <span className="text-white">•</span>
    <span className="text-text">
      <span className="text-hightlight">C</span>ommunity
    </span>
  </h2>
</div>


     <div className="container-fluid px-2 px-sm-3 px-md-4">
  <div className="row gy-3 gx-2 gx-sm-3 gx-md-4">
    {cardData.map((card, index) => (
      <div key={index} className="col-12 col-sm-6 col-md-4">
        <div className={`card-custom ${card.buttonClass === 'highlight' ? 'card-highlight' : 'card-dark'}`}>
          <img src={logo} alt="Investors" className="mb-3" width={150} />
          <h4 className="card-heading">{card.title}</h4>
          {/* <p className="card-subtitle">{card.investment}</p> */}
          <hr className="divider-30" />
          <p className="card-note">What you get:</p>
          <ul className="benefits-list">
            {card.benefits.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <button
            className={`mt-4 w-100 explore-btn ${card.buttonClass === 'highlight' ? 'btn-yellow' : 'btn-outline text-white'}`}
          >
            EXPLORE &nbsp;&nbsp;
            {card.buttonClass === 'highlight' ? (
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M8.15521 0.90918L6.77259 2.25509L12.2442 7.591H0.310547V9.50009H12.2442L6.77259 14.836L8.15521 16.1819L15.9999 8.54554L8.15521 0.90918Z" fill="black" />
              </svg>
            ) : (
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M8.15521 0.90918L6.77259 2.25509L12.2442 7.591H0.310547V9.50009H12.2442L6.77259 14.836L8.15521 16.1819L15.9999 8.54554L8.15521 0.90918Z" fill="white" />
              </svg>
            )}
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}
