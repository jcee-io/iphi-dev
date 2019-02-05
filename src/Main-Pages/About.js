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
          Alpha Phi Omega is a co-ed collegiate community service fraternity that
          strives to develop three cardinal principles: Leadership, Friendship, and Service.
          The Iota Phi chapter at UC Davis is among the largest in the nation, with members
          serving more than 10,000 hours in the Davis community each year.
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
