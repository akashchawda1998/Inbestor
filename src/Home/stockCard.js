import React from "react";
import '../App.css'

const StockCard = ({ logo, title, subtitle, price, change }) => {
  return (
    <div className="bg-transparent text-white p-3 mx-2 hide-scrollbar" style={{
    border: "0.8px solid #5E5E5E",
     minWidth: "200px" ,
      borderRadius: "12px",
    borderImageSlice: 1,
  }}>
      <div className="d-flex align-items-center mb-2">
        <img src={logo} alt={title} height={30} className="me-2" />
        <div>
          <div className="fw-bold mb-0" style={{ lineHeight: "1" }}>{title}</div>
          <small style={{ color: "#989898", fontSize: "10px" }}>{subtitle}</small>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="text-white-50">{price} <small className="text-muted">INR</small></div>
        <div className="text-success fw-semibold">{change}</div>
      </div>
    </div>
  );
};

export default StockCard;
