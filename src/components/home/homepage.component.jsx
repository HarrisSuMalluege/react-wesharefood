import React from 'react'

// import Sidebar from '../sidebar/sidebar.component';
import Gallery from "./GalleryCarousel.Component";
import Overviews from "./overview.component";
import Main from './description.component';
import Reserver from "./reserver.component";





const Home = () => (
    <main className="food-view">
      <Gallery />
      <Overviews />
      <Main />
      <Reserver />
    </main>
);


export default Home;