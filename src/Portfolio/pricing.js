import React from 'react';
import logo from '../Home/planicon.png'; // Replace with your logo path

const cardData = [
    {
        title: 'Quaterly Plan',
        investment: '20,000',
        benefits: [
            'PMS built to outperform public markets',
            'Invest in promising startups',
            'High quality debt with stable returns',
        ],
        buttonClass: 'outline',
    },
    {
        title: 'Annual Plan',
        investment: '50,000',
        benefits: [
            'Long term mutual fund portfolios.',
            'Expert rebalancing recommendations.',
            'Human support when you need it.',
        ],
        buttonClass: 'highlight',
    },
];

export default function Pricing() {
    return (
        <section className="investment-section py-5 text-white">
            <div style={{ textAlign: 'center', marginBottom: '3rem', color: '#fff' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Pricing</h2>
                <p style={{ color: '#FFFFFF', lineHeight: 1.6, margin: '0.5rem 0' }}>
                    No hidden charges. No other commissions. Just pure,<br />
                    transparent research.
                </p>
                <div style={{ width: '80px', height: '2px', background: '#444', margin: '0.5rem auto 0' }} />
            </div>



            <div className="container-fluid">
                <div className="row g-5 justify-content-center">
                    {cardData.map((card, index) => (
                        <div key={index} className="col-md-4">
                            <div className={`card-custom ${card.buttonClass === 'highlight' ? 'card-highlight' : 'card-dark'}`}>
                                <img src={logo} alt="INvestors" className="mb-3" />
                                <h4 className="card-heading">{card.title}</h4>
                                <p className="card-subtitle">Min. Investment: {card.investment}</p>
                                <hr className="divider-30" />
                                <p className="card-note">What you get:</p>
                                <ul className="benefits-list ">
                                    {card.benefits.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <button
                                    className={`mt-4 w-100 explore-btn ${card.buttonClass === 'highlight' ? 'btn-yellow' : 'btn-outline text-white'}`}
                                >
                                    EXPLORE  &nbsp;&nbsp;

                                    {card.buttonClass === 'highlight' ? <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.15521 0.90918L6.77259 2.25509L12.2442 7.591H0.310547V9.50009H12.2442L6.77259 14.836L8.15521 16.1819L15.9999 8.54554L8.15521 0.90918Z" fill="black" />
                                    </svg> : <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.15521 0.90918L6.77259 2.25509L12.2442 7.591H0.310547V9.50009H12.2442L6.77259 14.836L8.15521 16.1819L15.9999 8.54554L8.15521 0.90918Z" fill="white" />
                                    </svg>}


                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
