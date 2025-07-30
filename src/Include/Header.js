import React from 'react';
import { Link } from 'react-router-dom';
import logo from './finallogo.png';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Investors" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/coming-soon">Research</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/coming-soon">Learnings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/community">Community</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/coming-soon">Insights</Link>
            </li>
          </ul>

          <div className="d-flex">
            <a href="#" className="btn btn-invest">
              INVEST WITH US
              <span className="arrow">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.15521 0.90918L6.77259 2.25509L12.2442 7.591H0.310547V9.50009H12.2442L6.77259 14.836L8.15521 16.1819L15.9999 8.54554L8.15521 0.90918Z" fill="black" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
