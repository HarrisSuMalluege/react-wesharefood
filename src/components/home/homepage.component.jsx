import React from 'react'

import Sidebar from '../sidebar/sidebar.component';
import RenderGallery from './gallery.component';
import Overviews from "./overview.component";
import Main from './description.component';
import Reserver from "./reserver.component";
import Social from '../socialMedia/social.component';
import Newsletters from './newsletters.component';
import Footer from '../footer/footer.component';



const Homepage = () => (
  <div className="content">
    <Sidebar />
    <main className="food-view">
      <RenderGallery />
      <Overviews />
      <Main />
      <Reserver />
      <Social />
      <Newsletters />
      <Footer />
    </main>
  </div>
);


export default Homepage;