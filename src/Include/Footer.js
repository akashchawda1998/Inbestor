import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './finallogo.png'
import { a } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer style={{ background: ' linear-gradient(180deg, #232323 0%, #000000 23.56%, #000000 49.04%, #000000 74.04%, #232323 100%)', color: '#fff', padding: '40px 0', fontSize: '14px' }}>
      <Container>
         <div style={{ marginBottom: '20px' }}>
              <img
                src={logo} // Replace with your logo path
                alt="Inbestors Logo"
                style={{ height: '80px' }}
              />
            </div>


        <div
  style={{
    display: 'flex',
    gap: '4rem',
    flexWrap: 'wrap',
    marginBottom: '30px',
    color: '#fff',
  }}
>
  {/* Left Column (Company Info) */}
  <div style={{ flex: '1 1', width: '100px' }}>
    <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.9' }}>
      <li><strong>BSE Enlistment No.</strong> – 6363</li>
      <li><strong>SEBI Registered RA No.</strong> – INH000018212</li>
      <li><strong>Validity</strong> – Aug 05, 2024 - Perpetual</li>
      <li><strong>Mail</strong> : info@inbestors.in</li>
      <li>
        <strong>SEBI office address:</strong> SEBI Bhavan BKC, Plot No. C4 – A, 'G' Block Bandra <br/> Kurla Complex, Bandra (East), Mumbai – 400051, Maharashtra
      </li>
      
    </ul>
  </div>

 <div style={{ display: 'flex', gap:"20px" }}>
   <div style={{ flex: '1 1 ', minWidth: '' }}>
    <h5 style={{ borderBottom: '1px solid #fff', paddingBottom: '5px', marginBottom: '10px' }}>
      Important as
    </h5>
    <ul style={{ listStyle: 'none', paddingLeft: 0, lineHeight: '2' }}>
      <li>Investor Charter in Respect of RAs</li>
      <li>Complaint Data</li>
      <li>Grievance Redressal</li>
      <li>Compliance Audit</li>
      <li>Do’s And Don’t for Investors</li>
      <li>Services & Plans</li>
      <li>Contact Us</li>
    </ul>
  </div>

  {/* Right Column (Terms & Policies) */}
  <div style={{ flex: '1 1 ', minWidth: '' }}>
    <h5 style={{ borderBottom: '1px solid #fff', paddingBottom: '5px', marginBottom: '10px' }}>
      Terms & Policies
    </h5>
    <ul style={{ listStyle: 'none', paddingLeft: 0, lineHeight: '2' }}>
       <li>
    <a href="/disclaimer" className="hover:underline">
      Disclaimer
    </a>
  </li>
  <li>
    <a href="/disclosure" className="hover:underline">
      Disclosure
    </a>
  </li>
  <li>
    <a
      href="https://smartodr.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      ODR (Online Dispute Resolution)
    </a>
  </li>
  <li>
    <a
      href="https://scores.gov.in/scores/Welcome.html"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      SCORES Login
    </a>
  </li>
  <li>
    <a href="/refund-policy" className="hover:underline">
      Refund Policy
    </a>
  </li>
  <li>
    <a href="/privacy-policy" className="hover:underline">
      Privacy Policy
    </a>
  </li>
  <li>
    <a href="/terms-conditions" className="hover:underline">
      Terms and Conditions & MITC
    </a>
  </li>
    </ul>
  </div>
 </div>
 
</div>


       
      </Container>
    </footer>

     <div className="disclaimer-container">
      <div className="disclaimer-header">
        Disclaimer: Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any), Enlistment with RAAS/BSE and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
      </div>
      <div className="disclaimer-warning">
        Standard Warning: <span>Investments in the securities market are subject to market risks. Please read all related documents carefully before investing.</span>
      </div>
      <hr className="disclaimer-divider" />
      <div className="disclaimer-address-wrapper">
        <div className="disclaimer-address">
          <span className="disclaimer-bold">Our Registered Office address:</span>
          Plot no. 126/127, Scheme no. 113, Vijay Nagar, Indore, Madhya Pradesh (452010)
        </div>
        <div className="disclaimer-address">
          <span className="disclaimer-bold">SEBI office address:</span>
          SEBI Bhavan BKC, Plot No. C4 - A, 'G' Block Bandra - Kurla Complex, Bandra (East), Mumbai - 400051, Maharashtra 
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
