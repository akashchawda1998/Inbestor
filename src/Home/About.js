import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Slider from 'react-slick';
import '../App.css';

import mockupImg from '../Home/mob.png';
import StockCard from './stockCard';
import iciciLogo from "../assets/icici.png";
import adaniLogo from "../assets/adani.png";

gsap.registerPlugin(ScrollTrigger);

const stocks = [
  {
    logo: iciciLogo,
    title: "ICICIBANK",
    subtitle: "ICICI BANK LTD.",
    price: "1,425.40",
    change: "+0.17%",
  },
  {
    logo: adaniLogo,
    title: "ADANIENT",
    subtitle: "ADANI ENTERPRISES LTD",
    price: "2,597.50",
    change: "+0.36%",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } }
  ]
};

export default function About() {
  const sectionRef = useRef(null);
  const stepRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = stepRefs.map(ref => ref.current);

      gsap.set(steps, { autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${steps.length * 50}%`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      steps.forEach((step, index) => {
        tl.to(step, {
          autoAlpha: 1,
          duration: 0.7,
          onStart: () => {
            steps.forEach((s, i) => {
              if (i !== index) gsap.set(s, { autoAlpha: 0 });
            });
          },
        }, index); // Align each step with scroll
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const duplicatedStocks = [...stocks, ...stocks];

  return (
    <>
      {/* Hero Section with Steps */}
      <section ref={sectionRef} className="hero-section text-white overflow-hidden">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left Fixed Content */}
            <div className="col-lg-6 hero-sticky position-relative">
              <div className="hero-steps position-relative">
                <div ref={stepRefs[0]} className="step-content step-1 position-absolute w-100">
                   <h1 className="hero-title text-white">
                  Learnings that turns market chaos into Clarity

                  </h1>
              
                  <button className="hero-btn mt-4">
                   Explore Now
                  </button>
                </div>
                <div ref={stepRefs[1]} className="step-content step-2 position-absolute w-100">
                   <h1 className="hero-title text-white">
                Portfolios that turns fear into Confidence
                  </h1>
                  {/* <p className="hero-subtext">Join a growing network of smarter investors</p> */}
                      <p className="hero-subtext">Portfolios that turns fear into Confidence
</p>
                  <button className="hero-btn mt-4">
                    REVIEW MY PORTFOLIO
                  </button>
                </div>
                <div ref={stepRefs[2]} className="step-content step-3 position-absolute w-100">
                  <h1 className="hero-title text-white">
                  Community that turns Investors into Inbestors
                  </h1>
                  <p className="hero-subtext">Join a growing network of smarter investors</p>
                  <button className="hero-btn mt-4">
                   Explore Now
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center">
              <img src={mockupImg} alt="App mockup" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Stock Slider Section */}
      <section className="stockcard-section bg-dark text-white py-4 px-3">
        <Slider {...settings}>
          {duplicatedStocks.map((stock, idx) => (
            <div key={idx} className="px-2">
              <StockCard {...stock} />
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}
