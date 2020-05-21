import React from 'react';
import { Link } from 'react-router-dom';

const Social = () => (
    <div className="social">
        <div className="social__icon">
            <Link to='http://facebook.com/' className="social__icon-1 btn-social-icon-facebook">
                <i className="fa fa-facebook fa-lg"></i>
            </Link>
            <Link to='http://twitter.com/' className="social__icon-1 btn-social-icon-twitter">
                <i className="fa fa-twitter fa-lg"></i>
            </Link>
            <Link to='http://youtube.com/' className="social__icon-1 btn-social-icon-youtube">
                <i className="fa fa-youtube-play fa-lg"></i>
            </Link>
            <Link to='http://instagram.com/' className="social__icon-1">
                <i className="fa fa-instagram fa-lg "></i>
            </Link>
        </div>
    </div>

)

export default Social;