import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './index';

const IconList = () => (
  <div>
    <Icon name="logo" width={32} />
    Logo
    <Link to="/">
      <Icon name="search" width={32} fill="true" /> Search
    </Link>
    <Link to="/">
      <Icon name="home" width={32} fill="true" />
      Home
    </Link>
    <Link to="/">
      <Icon name="spoonKnife" width={32} fill="true" />
      Recipes
    </Link>
    <Link to="/">
      <Icon name="compass" width={32} fill="true" />
      Neighbors
    </Link>
    <Link to="/">
      <Icon name="about" width={32} fill="true" />
      About
    </Link>
    <Link to="/">
      <Icon name="map" width={32} fill="true" />
      Contact
    </Link>
    <Link to="/">
      <Icon name="bookmarks" width={32} fill="true" />
      bookmakrs
    </Link>
    <Link to="/">
      <Icon name="bubbles" width={32} fill="true" />
      bubbles
    </Link>
    <Link to="/">
      <Icon name="fullStar" width={32} fill="true" />
      fullStar
    </Link>
    <Link to="/">
      <Icon name="halfStar" width={32} fill="true" />
      halfstar
    </Link>
    <Link to="/">
      <Icon name="location" width={32} fill="true" />
      location
    </Link>
  </div>
);


export default IconList;