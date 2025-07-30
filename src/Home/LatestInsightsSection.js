import React from 'react'
import img1 from './step1.png';
export default function LatestInsightsSection() {
  return (
   <section class="insights-section py-5 px-4">
    <div class="container-fluid">
      <div class="row mb-4">
        <div class="col-lg-12">
          <h2 class="insights-title text-center fw-bold">
            Inbestor <span class="highlight"> Insights</span>
          </h2>
          <p class="insights-subtitle text-center ">
Our Nifty 500-based strategy first filters growth-focused quality stocks using fundamental parameters.          </p>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-4">
          <div class="insight-card">
            <img src={img1} alt="Portfolio" class="img-fluid rounded-3" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="insight-card">
            <img src={img1} alt="3 Questions" class="img-fluid rounded-3 " />
          </div>
        </div>
        <div class="col-md-4">
          <div class="insight-card">
            <img src={img1} alt="What You Asked For" class="img-fluid rounded-3 " />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
