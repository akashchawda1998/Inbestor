import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import clientImg from '../../src/assets/trustedCLient.png';

const TrustedClients = () => {
 const settings = {
  dots: true,         // ✅ Show pagination dots
  arrows: false,      // ❌ Hide left/right arrows
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};


  const clients = [1, 2, 3, 4, 5]; // Add more than 3 to see slider in action

  return (
    <div style={{ backgroundColor: '#000', padding: '60px 20px', color: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '50px', fontWeight: '700' }}>Trusted By 10,000 Client</h2>
      <hr style={{
        width: '120px',
        margin: '16px auto 40px',
        border: 'none',
        height: '2px',
        backgroundColor: '#fff',
        opacity: 0.2
      }} />

      <div style={{ padding: '0 20px' }}>
        <Slider {...settings}>
          {clients.map((item, index) => (
            <div key={index}>
              <div style={{
                background: 'linear-gradient(180deg, #E0BE50 0%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: '12px',
                width: '90%',
                margin: 'auto',
                padding: '24px',
                textAlign: 'left',
                color: '#fff'
              }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={clientImg}
                    alt="user"
                    style={{
                      width: '150px',
                      objectFit: 'cover',
                      marginBottom: '12px'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '184px',
                    textAlign: 'left'
                  }}>
                    <div style={{ fontWeight: '600', fontSize: '18px', color: 'black' }}>Name – surname</div>
                    <div style={{ fontSize: '12px', color: '#212121', fontWeight: "700" }}>Portfolio</div>
                  </div>
                </div>

                <div style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1' }}>
                  <p style={{ fontWeight: '600', fontSize: '13px', color: 'black' }}>PMS built to outperform public markets</p>
                  <p style={{ fontWeight: '600', fontSize: '13px', color: 'black' }}>Invest in promising startups</p>
                  <p style={{ fontWeight: '600', fontSize: '13px', color: 'black' }}>High quality debt with stable returns</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrustedClients;
