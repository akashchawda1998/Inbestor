import React from 'react'
import mockupImg from '../assets/mockup.png';
import bgEffect from '../assets/bg-effect-2.png';
import video from './videoabout.mp4'

export default function Compare() {
  return (
  <section
  className="insights-section py-5 px-3 px-md-5"
  style={{
    backgroundImage: `url(${bgEffect})`,
    backgroundSize: '600px',
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="container-fluid">
    <div className="row mb-4">
      <div className="col-12">
        <h2 className="insights-title text-center fw-bold">
          <span className="highlight">Inbestor</span> {">"} Insights
        </h2>
      </div>
    </div>

  <div className="row align-items-center py-5">
  {/* Left Text */}
  <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
    <h5
      className="text-uppercase fw-semibold mb-3"
      style={{
        fontSize: '1rem',
        letterSpacing: '0.05em',
        color: '#ccc',
      }}
    >
      Because instinct isn't a strategy.
    </h5>

    <p
      className="hero-subtext"
      style={{
        fontSize: '1.5rem',
        lineHeight: 1.6,
        paddingRight: '1rem',
      }}
    >
      Real results aren't driven by gut feelings. They’re built through informed
      portfolios, disciplined checklists, and confident decisions.
    </p>

    <ul
      className="list-unstyled mt-3 mb-4"
      style={{ fontSize: '1rem', lineHeight: 1.5 }}
    >
      <li>👉 No noise.</li>
      <li>👉 No guesswork.</li>
      <li>
        Just a proven system, a clear checklist, and a portfolio with purpose.
      </li>
    </ul>

   <button class="hero-btn mt-4">Explore Now</button>
  </div>

  {/* Right Video */}
  <div className="col-lg-6 text-center">
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{ maxWidth: '100%', borderRadius: '12px' }}
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

  </div>
</section>

  )
}
