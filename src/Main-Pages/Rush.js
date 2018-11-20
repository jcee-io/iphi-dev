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
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex
      </div>
    </div>
  </div>
);


export default Rush;
