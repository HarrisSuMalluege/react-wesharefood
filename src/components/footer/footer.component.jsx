import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer__menu">
    <ul className="footer__menu-bar">
      <li className="footer__menu-bar-item">
        <Link to="/faq">FAQ</Link>
      </li>
      <li className="footer__menu-bar-item">
        <Link to="/financing">Financing</Link>
      </li>
      <li className="footer__menu-bar-item">
        <Link to="/privacy">Privacy</Link>
      </li>
      <li className="footer__menu-bar-item">
        <Link to="/terms">Terms of use</Link>
      </li>
      <li className="footer__menu-bar-item">
        <Link to="blog">Blog</Link>
      </li>
      <li className="footer__menu-bar-item">
        <Link to="career">Career</Link>
      </li>
    </ul>
  </div>
); 

export default Footer;