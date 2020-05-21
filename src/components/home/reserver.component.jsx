import React from 'react';

const Reserver = () => (
    <div className="cta">
      <h2 className="cta__book-now">
        Good news! We have 4 free courses incoming days!
      </h2>
      <button className="btn">
        <span className="btn__visible">Book now</span>
        <span className="btn__invisible">Only 4 seats left</span>
      </button>
    </div>
);

export default Reserver;