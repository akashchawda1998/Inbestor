import React from 'react';

import adani from '../../src/assets/adani.png';
import microsoft from '../../src/assets/microsoft.png';
import icici from '../../src/assets/icici.png';
import nvidia from '../../src/assets/nvidia.png';
import apple from '../../src/assets/apple.png';

const stockList = [
  { name: 'ICICIBANK', full: 'ICICI BANK LTD.', logo: icici },
  { name: 'ADANIENT', full: 'ADANI ENTERPRISES LTD.', logo: adani },
  { name: 'NVIDIA', full: 'NVIDIA LTD.', logo: nvidia },
  { name: 'MICROSOFT', full: 'MICROSOFT LTD.', logo: microsoft },
  { name: 'APPLE', full: 'APPLE', logo: apple, disabled: true },
];

const VelocityPortfolio = () => {
  return (
    <div className="velocity-portfolio">
      {/* Heading & CTA */}
      <div className="velocity-header">
        <div className="velocity-text">
          <div className="velocity-title">VELOCITY 30</div>
          <div className="velocity-subtitle">
            30 stock <span>portfolio</span>
          </div>
        </div>

        <button className="unlock-btn">TAP TO UNLOCK →</button>
      </div>

      {/* Stock Cards */}
      <div className="stock-grid">
        {stockList.map((stock, idx) => (
          <div
            key={idx}
            className={`stock-card ${stock.disabled ? 'disabled' : ''}`}
          >
            <img src={stock.logo} alt={stock.name} className="stock-logo" />
            <div className="stockname">
              <div className="stock-symbol">{stock.name}</div>
              <div className="stock-full">{stock.full}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="stock-footer">27 more stocks..</div>
    </div>
  );
};

export default VelocityPortfolio;
