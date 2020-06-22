import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardDeck } from 'reactstrap'; 
import { Link } from "react-router-dom";

import Reserver from "../home/reserver.component";


class Recipes extends React.Component {
  render() {
    return (
        <div className="recipesCard">
        <Reserver />
          <div className="breadcrumbBar">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Recipes</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
    );
  }
}

export default Recipes;