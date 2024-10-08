import React from 'react';
import slushImage from '../assets/slush.png';
import fortumImage from '../assets/fortum.png';
import natoImage from '../assets/nato.png'
import algoImage from '../assets/algo.png'
import '../Cv.css'; 

const Cv = () => {
  return (
    <div>
      <div className="banner">
        <img src={slushImage} alt="Slush logo" className="banner-image" />
        <img src={natoImage} alt="Nato logo" className="banner-image" />
        <img src={fortumImage} alt="Fortum logo" className="banner-image" />
        <img src={algoImage} alt="Algo logo" className="banner-image" />
      </div>

      <h1>Mitä oon touhunnut elämälläni</h1>
      <p>Tänne tulee cv ja osaamisen kuvaamista sitten kun kerkeää. Ensimmäisenä on tarkoitus kumminkin täyttää opintokornerin sisältöä ja puuhata devaamista.</p>
      
      <p>
        I have experience in software development, working with various technologies such as React, Node.js, and more.
      </p>
    </div>
  );
};

export default Cv;
