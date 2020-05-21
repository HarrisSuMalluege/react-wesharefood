import React from 'react';

import { REVIEWS } from '../shared/userReviews';

const RenderUserReviews = ({ name, imgUrl, comment, rating, date }) => (
  <React.Fragment>
    <figure className="review">
      <blockquote className="review__text">{comment}</blockquote>
      <figcaption className="review__user">
        <img src={imgUrl} alt={name} className="review__photo" />
        <div className="review__user-box">
          <p className="review__user-name">{name}</p>
          <p className="review__user-date">{date}</p>
        </div>
        <div className="review-rating">{rating}</div>
      </figcaption>
    </figure>
    
  </React.Fragment>
);



const UserReviews = () => {
    return (
      <div className="user-reviews">
        {REVIEWS.map(({ reviewId, ...otherReviewsProps }) => (
          <RenderUserReviews key={reviewId} {...otherReviewsProps} />
        ))}
        <button className="btn-inline">
          Show all <span>&rarr;</span>
        </button>
      </div>
    );
}



export default UserReviews;