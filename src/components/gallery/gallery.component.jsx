import React from 'react';
import { GALLERY } from "../shared/gallery";

// import './gallery.styles.scss';


const RenderGallery = () => {
    return (
      
        <div className="gallery">
          <div className="gallery__item">
            {GALLERY.map((gallery) => (
              <img
                key={gallery.id}
                src={gallery.image}
                alt={gallery.name}
                className="gallery__item--photo"
              />
            ))}
          </div>
        </div>
    );

}

export default RenderGallery;

