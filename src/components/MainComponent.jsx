import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Header from './header/Header.component';
import Sidebar from './sidebar/sidebar.component';
import Footer from './footer/footer.component';
import Home from './home/homepage.component';
import Social from './socialMedia/social.component';
import Newsletters from './home/newsletters.component';
import Recipes from './recipesComponent/recipesComponent';
import About from './about/AboutComponent';
import Contact from './contact/ContactComponent';


class Main extends Component {
    render() {
        return (
          <div className="container-food">
            <Header />
            <div className="content">
              <Sidebar />
              <div className="food-view">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/recipes" component={Recipes} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Redirect to="/" />
                </Switch>
                <Social />
                <Newsletters />
                <Footer />
              </div>
            </div>
          </div>
        );
    }
}

export default Main;
