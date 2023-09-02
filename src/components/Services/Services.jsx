import React, { useEffect, useState } from 'react';
import { preloadImages } from '../imagePreloader'; 

import Branding from './ServiceSections/Branding'
import Digital from './ServiceSections/Digital'
import Events from './ServiceSections/Events'
import Media from './ServiceSections/Media'
import Pr from './ServiceSections/Pr'
import Social from './ServiceSections/Social'
import Stratergy from './ServiceSections/Stratergy'
import Video from './ServiceSections/Video'


export default function Services() {
  const [isImagesPreloaded, setIsImagesPreloaded] = useState(false);
  useEffect(() => {
    const imageUrls = [
      '/images/Chess.png', // Replace with the actual image paths
      '/images/social.jpg',
      '/images/mike.jpg',
      '/images/tv.jpg',
      '/images/event.jpg',
    ];

    preloadImages(imageUrls)
      .then(() => {
        setIsImagesPreloaded(true);
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
      });
  }, []);

  return (
    <div>
      {isImagesPreloaded ? (
        <>
          <Stratergy id="service-stratergy" />
          <Branding id="service-branding" />
          <Social id="service-social" />
          <Digital id="service-digital" />
          <Video id="service-video" />
          <Pr id="service-pr" />
          <Media id="service-media" />
          <Events id="service-events" />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
