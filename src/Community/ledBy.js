import React from 'react';
import ledby1 from '../assets/ledby1.png'
import ledby2 from '../assets/ledby2.png'
import ledby3 from '../assets/ledby3.png'
import ledby4 from '../assets/ledby4.png'

const cardsData = [
  {
    name: "Anant Agrawal",
    image: ledby1, // or imported if local: import johnImg from './assets/john.png'
    // desc: "19 years in Research & Market Strategy",
  },
  {
    name: "Vinay Verma",
    image: ledby2,
    // desc: "Aggressive short-term trader",
  },
  {
    name: "Yash Thange",
    image: ledby3,
    // desc: "Ensuring world-class execution and member experience",
  },
  {
    name: "Tanu Dubey",
    image: ledby4,
    // desc: "Ensuring world-sclass execution and member experience",
  },
];


const LedBy = () => {
  return (
    <div className="bg-dark text-white py-5">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem', color: '#fff' }}>
          <h2 style={{ fontSize: '4rem', fontWeight: '500' }}>Led By</h2>
          <div style={{ width: '80px', height: '2px', background: '#444', margin: '0.5rem auto 0' }} />
        </div>

        <div className="row g-4 mt-3">
          {cardsData.map((item, idx) => (
            <div className="col-md-3" key={idx}>
              <div className="card h-100 bg-secondary text-white border-0 ">
                <img
                  src={item.image} // Update this path to your actual image
                  className="card-img-top "
                  alt="Report"
                  style={{ filter: 'grayscale(220%)' }}
                />
                <div className="card-body bg-black d-flex flex-column justify-content-between">
                  <p className="card-text">
                   {item.name}
                  </p><p className="card-text ">
                   {item.desc}
                  </p>

                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

       <div  className="container"
        style={{
          marginTop: '80px',
          background: 'linear-gradient(90deg, #1C1C1C 0%, #000 100%)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          padding: '30px 50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div style={{ fontWeight: '600', fontSize: '18px' }}>
          if you're ready to grow, evolve, and trade with structure and soul.
        </div>
        <button
          style={{
            padding: '10px 38px',
            background: 'linear-gradient(90deg, #F9D342, #E0BE50)',
            border: 'none',
            borderRadius: '30px',
            color: '#000',
            fontWeight: 600,
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          JOIN US
        </button>
      </div>
    </div>
  );
};

export default LedBy;
