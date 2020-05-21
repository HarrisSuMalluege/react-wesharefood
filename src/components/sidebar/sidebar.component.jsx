import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../icon';

// import './sidebar.styles.scss';


const SideBar = () => (
  
    <div className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <Link to="/" className="side-nav__link">
            <Icon name="home" width={32} fill="true" className="side-nav__icon" />
            <span>Home</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/recipes" className="side-nav__link">
            <Icon
              name="spoonKnife"
              width={32}
              fill="true"
              className="side-nav__icon"
            />
            <span>Recipes</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/neighbors" className="side-nav__link">
            <Icon name="compass" width={32} fill="true" className="side-nav__icon" />
            <span>Neighbors</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/about" className="side-nav__link">
            <Icon name="about" width={32} fill="true" className="side-nav__icon" />
            <span>About</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/contact" className="side-nav__link">
            <Icon name="map" width={32} fill="true" className="side-nav__icon" />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      <div className="legal">
        &copy; 2020 by Portfolio. All rights reserved.
      </div>
    </div>
);


export default SideBar;
