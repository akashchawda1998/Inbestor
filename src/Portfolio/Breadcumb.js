import React from 'react';

import sec1img from '../../src/assets/portf-section1-img.png'
import bgImg from '../../src/assets/port-section1-bg.png'
const Breadcumb = () => {
  return (
    <section id="bgvelocity">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-7 mb-4 mb-md-0 text-md-start text-center">
              <h2 className="breadcumb-heading"> Velocity 30?</h2>
              <p className="breadcumb-text">
                Velocity 30 is our flagship equity model portfolio built for the modern investor.
                It's a research-backed, rule-driven strategy to help you grow wealth while
                protecting capital during uncertain markets.
              </p>
              <a href="#contact" className="btn btn-warning explore-btn">
                Contact Form &nbsp;
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.15521 0.90918L6.77259 2.25509L12.2442 7.591H0.310547V9.50009H12.2442L6.77259 14.836L8.15521 16.1819L15.9999 8.54554L8.15521 0.90918Z"
                    fill="black" />
                </svg>
              </a>
            </div>

            {/* Image Section */}
            <div className="col-md-5 text-center">
              <img
                src={sec1img}
                alt="Velocity 30"
                className="img-fluid breadcumb-image"
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default Breadcumb;
