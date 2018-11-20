import React from 'react';
import '../styles/About.css';
import image1 from '../images/about-image1.jpg';
import image2 from '../images/about-image2.jpg';
import Rush from './Rush';

const About = props => (
  <div className="About">
    <div className="container">
      <div className="description">
        <span className="header">ABOUT ALPHA PHI OMEGA</span>
        <span className="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum
        </span>
      </div>
      <div className="images">
        <img src={image1} />
        <img className="image2" src={image2} />
      </div>
    </div>
    <Rush />
  </div>
);


export default About;
