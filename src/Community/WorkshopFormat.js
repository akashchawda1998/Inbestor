import React from 'react';
import calender from './calender.svg'
import watch from './watch.svg'
import leature from './leacture.svg'
const WorkshopFormat = () => {
  return (
    <div className="bg-dark text-white py-5">
      <div className="container text-center">
        {/* Title */}
        <h2 className="fw-bold mb-5" style={{ fontSize: '40px', fontWeight: 700, marginBottom: '40px' }}>
          <span className="text-warning">Workshop</span> Format
        </h2>

        {/* 3 Info Cards */}
        <div className="row justify-content-center g-4">
          {/* Days Card */}
         <div className="col-md-3 d-flex justify-content-center">
  <div
    className="bg-black text-white rounded-4 text-center h-100"
    style={{
       width: '220px',
       height: '220px',
       padding: '20px',
       boxShadow: '0px 4px 4px 0px #FFFFFF40',
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center'
     }}
  >
    <div className="mb-3 fs-2">
      <img src={calender} className="img-fluid" />
    </div>
    <div className="fw-bold" style={{color:"#FFD95E", fontSize:"16px"}}>Days:</div>
    <div>Saturday & Sunday</div>
  </div>
</div>

<div className="col-md-3 d-flex justify-content-center">
  <div
    className="bg-black text-white p-4 rounded-4 text-center h-100"
    style={{
       width: '220px',
       height: '220px',
       padding: '20px',
       boxShadow: '0px 4px 4px 0px #FFFFFF40',
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center'
     }}
  >
    <div className="mb-3 fs-2">
      <img src={watch} className="img-fluid" />
    </div>
    <div className="fw-bold" style={{color:"#FFD95E", fontSize:"16px"}}>Sessions:</div>
    <div>4 (3 hours each)</div>
  </div>
</div>

<div className="col-md-3 d-flex justify-content-center">
  <div
    className="bg-black text-white p-4 rounded-4 text-center h-100"
    style={{
       width: '220px',
       height: '220px',
       padding: '20px',
       boxShadow: '0px 4px 4px 0px #FFFFFF40',
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center'
     }}
  >
    <div className="mb-3 fs-2">
      <img src={leature} className="img-fluid" />
    </div>
    <div className="fw-bold" style={{color:"#FFD95E", fontSize:"16px"}}s>Mode:</div>
    <div>Offline</div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default WorkshopFormat;
