import React from 'react';
import { OVERVIEWS } from '../shared/overviews';
import Icon from '../icon';

const RenderOverview =({ name, rating, city, state, ratingAverage, ratingCount }) => (
    <div className='overview'>
        <h1 className="overview__heading">Most Popular Food: {name}</h1>
        <div className='overview__stars'>
            <Icon name="fullStar" width={32} fill="true" className="overview__icon-star" />
            <Icon name="fullStar" width={32} fill="true" className="overview__icon-star" />
            <Icon name="fullStar" width={32} fill="true" className="overview__icon-star" />
            <Icon name="fullStar" width={32} fill="true" className="overview__icon-star" />
            <Icon name="halfStar" width={32} fill="true" className="overview__icon-star" />
        </div>
        <div className="overview__location">
            <Icon name='location' width={32} fill="true" className="overview__icon-location" />
            <button className="btn-inline"> {city}, {state}</button>
        </div>
        <div className='overview__rating'>
            <div className="overview__rating-average">{ratingAverage}</div>
            <div className="overview__rating-count">{ratingCount} votes</div>
        </div>
    </div>

)




const Overviews = () => {
    return (
        <div className='overview_rating'>
            {OVERVIEWS.map(({id, ...otherOverviews}) => (
                <RenderOverview key={id} {...otherOverviews} />
            ))}
        </div>
    )
}

export default Overviews;