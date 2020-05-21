import React from 'react';
import { Link } from 'react-router-dom';

import { MENUS } from '../shared/menu';
import { RECOMMENDS } from '../shared/recommends';
import UserReviews from "./userReviews.component";



const Main = () => (
  <div className="detail">
    <div className="description">
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quam
        doloribus modi repellat officiis eveniet accusamus voluptatum voluptates
        dolore?
      </p>
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quam
        doloribus modi repellat officiis eveniet accusamus voluptatum voluptates
        dolore?
      </p>
      <ul className="list">
        {MENUS.map((menu) => (
          <Link to="/" className="list__link" key={menu.menuId}>
            <li className="list__item">{menu.name}</li>
          </Link>
        ))}
      </ul>
      <div className="recommend">
        <p className="recommend__count">
          John and 3 other friends recommend this food.
        </p>
        <div className="recommend__friends">
          {RECOMMENDS.map((recommend) => (
            <img
              className="recommend__photo"
              key={recommend.recommendId}
              src={recommend.imgUrl}
              alt={recommend.name}
            />
          ))}
        </div>
      </div>
    </div>
    <UserReviews />
  </div>
);

export default Main;