import React from 'react';
import './styles/Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = ({ togglePage, page }) => (
  <div className="nav">
    <div className="inner-box">
      <div className="left-side">
        <span className="nav-apo">A Φ Ω | I Φ</span>
      </div>
      <div onClick={togglePage} className="right-side">
        <NavLink exact to="/" className="nav-link" activeClassName="active">HOME</NavLink>
        <NavLink to="#" className="nav-link" activeClassName="active">ABOUT</NavLink>
        <NavLink to="#" className="nav-link" activeClassName="active">RUSH</NavLink>
        <NavLink to="/calendar" className="nav-link" activeClassName="active">CALENDAR</NavLink>
        <NavLink to="#" className="nav-link" activeClassName="active">LOGIN</NavLink>
      </div>
      <div className="hamburger-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  </div>
);
export default Nav;
