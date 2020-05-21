import React from 'react';
import { Link } from 'react-router-dom';

import { USERPROFILES } from '../shared/userProfile';
import { ReactComponent as Logo } from '../../assets/wsf.svg';
// import './header.styles.scss';

import Icon from '../icon';




const RenderHeader = ({ userID, name, profileImg, bookMark, notification }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <form className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Tell me your favorite"
      />
      <button className="search__button">
        <Icon name="search" width={25} fill="true" className="search__icon" />
      </button>
    </form>
    <nav className="user-nav">
      <div className="user-nav__icon-box">
        <Icon
          name="bookmarks"
          width={32}
          fill="true"
          className="user-nav__icon"
        />
        <span className="user-nav__notification">{bookMark}</span>
      </div>
      <div className="user-nav__icon-box">
        <Icon
          name="bubbles"
          width={32}
          fill="true"
          className="user-nav__icon"
        />
        <span className="user-nav__notification">{notification}</span>
      </div>
      <div className="user-nav__user">
        <img src={profileImg} alt={name} className="user-nav__user-photo" />
        <span className="user-nav__user-name">{name}</span>
      </div>
    </nav>
  </div>
);

const Header = () => {
  return (
    <div>
      {USERPROFILES.map(
        ({ userId, ...otherUserProfilesProps }) => (
            <RenderHeader key={userId} {...otherUserProfilesProps} />
        )
      )}
    </div>
  );
};

 

export default Header;