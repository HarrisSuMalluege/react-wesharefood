import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

class About extends Component {
    render() {
        return (
          <div className="ourStory">
            <div className="breadcrumbBar">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>About Us</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className="ourStory__intro">
              <h1 className="ourStory__intro--header">Story about us</h1>
              <div className="ourStory__intro--dec">
                <img
                  src="images/our story.jpg"
                  alt="Story about us"
                  className="ourStory__intro--dec-img"
                />
                <div className="ourStory__intro--dec-content">
                  <h3 className="ourStory__intro--dec-content-headering">
                    Who are we?
                  </h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Esse eum fuga ipsum vel maiores soluta sunt quaerat quos
                    unde. Deserunt neque aut debitis tempore dicta vel tempora
                    cum, distinctio quam.
                  </p>
                </div>
              </div>

              <div className="ourStory__intro--dec">
                <div className="ourStory__intro--dec-content">
                  <h3 className="ourStory__intro--dec-content-headering">
                    Inspiration
                  </h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Esse eum fuga ipsum vel maiores soluta sunt quaerat quos
                    unde. Deserunt neque aut debitis tempore dicta vel tempora
                    cum, distinctio quam.
                  </p>
                </div>
                <img
                  src="images/inspiration.jpg"
                  alt="Story about us"
                  className="ourStory__intro--dec-img"
                />
              </div>

              <div className="ourStory__intro--provenance">
                <h1 className="ourStory__intro--dec-content-headering">
                  Provenance & transparency
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus id ipsam aspernatur consequuntur, facere ad
                  fugiat pariatur at consectetur sit unde soluta aliquam
                  facilis! Et expedita obcaecati cum aspernatur fuga?
                </p>
                <button className="btn-inline">
                  {" "}
                  Explore More <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        );
    }
}

export default About;