import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import MathExpertLogo from '../../assets/mainLogo.svg';

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__inner__container">
        <div className="footer__company__details">
          <div className="footer__company__logo">
            <img src={MathExpertLogo} />
          </div>
          <div className="footer__company__description">
            <p> Every topic explained with clear, concise videos.</p>
            <p>Helps you in your next big examination.</p>
          </div>
        </div>
        <div className="footer__company__links">
          <div className="footer__company__social">
            <h2>Follow Us</h2>
            <a className="footer_link" href="#">
              Instagram{' '}
            </a>
            <a className="footer_link" href="#">
              Facebook{' '}
            </a>
            <a className="footer_link" href="#">
              Linkedin
            </a>
          </div>
          <div className="footer__support__details">
            <h2>Support</h2>
            <a className="footer_link" href="#">
                Contact Us{' '}
            </a>
            <a className="footer_link" href="#">
              About Us{' '}
            </a>
            <a className="footer_link" href="#">
              FAQ
            </a>
          </div>
          <div className="footer__legal__details">
            <h2>Legal</h2>
            <a className="footer_link" href="#">
              Disclaimer{' '}
            </a>
            <a className="footer_link" href="#">
              Privacy Policy{' '}
            </a>
            <a className="footer_link" href="#">
              Terms &   Conditions
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copyrights">
        <p>Copyright © 2020-2040 OlympExpert, All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
