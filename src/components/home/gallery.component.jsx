import React from 'react';
import { GALLERY } from "../shared/gallery";

// import './gallery.styles.scss';


const Gallery = () => {
    return (
      <div className="gallery">
        <div className="gallery__item">
          {GALLERY.map((gallery) => (
            <img
              key={gallery.galleryId}
              src={gallery.image}
              alt={gallery.name}
              className="gallery__item--photo"
            />
          ))}
        </div>
      </div>
    );

}

export default Gallery;

