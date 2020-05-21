import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/wsf.svg';
// import './header.styles.scss';

import Icon from '../icon';




const Header = () => (
  
    <div className="header">
        <Link to='/'><Logo className='logo' /></Link>
        <form className='search'>
            <input type="text" className="search__input" placeholder="Tell me your favorite" />
            <button className="search__button">
                <Icon name="search" width={25} fill className='search__icon' />
            </button>
        </form>
        <nav className="user-nav">
            <div className="user-nav__icon-box">
                <Icon name="bookmarks" width={32} fill className='user-nav__icon' />
                <span className="user-nav__notification">6</span>
            </div>
            <div className="user-nav__icon-box">
                <Icon name="bubbles" width={32} fill className='user-nav__icon' />
                <span className="user-nav__notification">18</span>
            </div>
            <div className="user-nav__user">
                <img alt='user photo' className='user-nav__user-photo' />
                <span className="user-nav__user-name">Emily</span>
            </div>
        </nav>
    </div>

)

 

export default Header;