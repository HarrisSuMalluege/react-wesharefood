import React from 'react'

import Sidebar from '../sidebar/sidebar.component';
import RenderGallery from '../gallery/gallery.component';
import RenderOverviews from "../overview/overview.component";
import Main from '../description/description.component';
import Reserver from "../reserver/reserver.component";
import Social from '../socialMedia/social.component';
import Newsletters from '../newsletters/newsletters.component';
import Footer from '../footer/footer.component';



const Homepage = () => (
  <div className="content">
    <Sidebar />
    <main className="food-view">
      <RenderGallery />
      <RenderOverviews />
      <Main />
      <Reserver />
      <Social />
      <Newsletters />
      <Footer />
    </main>
  </div>
);


export default Homepage;