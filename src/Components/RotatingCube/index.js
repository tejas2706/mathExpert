import React from 'react';
import './styles.css';
import pi from '../../assets/pi2.png';
import infinity from '../../assets/infinity.png';
import alpha from '../../assets/alpha.png';
import omega from '../../assets/omega.png';

function RotatingCube({onClick}) {
  return (
    <div className="scene" onClick={onClick}>
      <div className="cube">
        <div className="cube__face cube__face--front">
          <img className="cube__image" alt="pi" src={pi}></img>
        </div>
        <div className="cube__face cube__face--back">
          <img className="cube__image" alt="infinity" src={infinity}></img>
        </div>
        <div className="cube__face cube__face--right">
          <img className="cube__image" alt="alpha" src={alpha}></img>
        </div>
        <div className="cube__face cube__face--left">
          <img className="cube__image" alt="omega" src={omega}></img>
        </div>
        <div className="cube__face cube__face--bottom"></div>
        <div className="cube__face cube__face--top"></div>
      </div>
    </div>
  );
}

export default RotatingCube;
