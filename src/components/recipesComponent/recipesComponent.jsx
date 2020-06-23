import React from "react";
import { Breadcrumb, BreadcrumbItem, } from 'reactstrap'; 
import { Link } from "react-router-dom";

import Reserver from "../home/reserver.component";
import RecipesItem from "./recipesItemComponent";


import { RECIPES } from '../shared/recipes';



class Recipes extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            recipes: RECIPES,
        }
    }
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
          {this.state.recipes.map(({ id, ...otherRecipesProps }) => (
            <RecipesItem key={id} {...otherRecipesProps} />
          ))}
        </div>
      );
    }
}



export default Recipes;
