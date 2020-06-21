import React from 'react';

import Search from './search';
import Phone from './phone';
import Compass from './compass';
import Home from './home';
import About from './about';
import Map from './map';
import SpoonKnife from './spoonKnife';
import Bookmarks from './bookmarks';
import Bubbles from './bubbles';
import Fullstar from './fullStar';
import Halfstar from './halfStar';
import Location from './location';

const Icon = props => {
    switch (props.name) {
        case 'search':
            return <Search {...props} />
        case 'phone':
            return <Phone {...props} />
        case 'compass':
            return <Compass {...props} />
        case 'home':
            return <Home {...props} />
        case 'about':
            return <About {...props} />
        case 'map':
            return <Map {...props} />
        case 'spoonKnife':
            return <SpoonKnife {...props} />
        case 'bookmarks':
            return <Bookmarks {...props} />
        case 'bubbles':
            return <Bubbles {...props} />
        case 'fullStar':
            return <Fullstar {...props} />
        case 'halfStar':
            return <Halfstar {...props} />
        case 'location':
            return <Location {...props} />
    
        default:
            return;
    }
};

export default Icon;