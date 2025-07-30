import React from 'react';
import img from './blog.png'
const ReportsSection = () => {
  return (
    <div className="bg-dark text-white py-5">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem', color: '#fff' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Reports</h2>
          <div style={{ width: '80px', height: '2px', background: '#444', margin: '0.5rem auto 0' }} />
        </div>

        <div className="row g-4 mt-3">
          {[1, 2, 3].map((item, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100 bg-secondary text-white border-0 rounded-4">
                <img
                  src={img} // Update this path to your actual image
                  className="card-img-top rounded-top-4"
                  alt="Report"
                />
                <div className="card-body bg-black d-flex flex-column justify-content-between">
                  <p className="card-text">
                    Where innovative strategies and data-driven insights converge to unlock
                    consistent market success.
                  </p><p className="card-text mt-4">
                    Where innovative strategies and data-
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

                    <button style={{
                      backgroundColor: '#F4C542', // Gold-yellow color
                      border: 'none',
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                      cursor: 'pointer'
                    }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportsSection;
