import React from 'react';
import { withRouter } from "react-router-dom";

import {CardDeck, Card, CardImg, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap';


const RecipesItem = ({ title, description, image, date, history, linkUrl, match }) => (
     <CardDeck>
       <Card className="recipesCard__main" onClick={() => history.push(`${match.url}${linkUrl}`)}>
         <CardImg className="recipesCard__img" src={image} />
         <CardBody>
           <CardTitle className="recipesCard__heading">
             {title}
           </CardTitle>
           <CardText className="recipesCard__text">{description}</CardText>
         </CardBody>
         <CardFooter>
           <small className="text-muted">Last updated: {date}</small>
         </CardFooter>
           
       </Card>
     </CardDeck>
);

export default withRouter(RecipesItem);


