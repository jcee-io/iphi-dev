import React from 'react';
import '../styles/Rush.css';
import image from '../images/rush-image.jpg';

const Rush = props => (
  <div className="Rush">
    <div className="images">
      <img src={image} />
    </div>
    <div className="description">
      <div className="header">
        COME RUSH WITH US!
      </div>
      <div className="body">
        If you're interested in making friends and making a difference in the Davis community,
        come to our RUSH week events! During RUSH week, you'll be able to meet the brothers and 
        hangout with us in a series of fun and games.
      </div>
    </div>
  </div>
);


export default Rush;
