
import { useState } from 'react';

export const useProgressiveImageArray = (urls) => {

  const loadedElements = [];
  const [sourceLoaded, setSourceLoaded] = useState(false)

  const checkNextPictureToLoad = (data) => {
    const targetURL = data.target.src;
    if (!loadedElements.find((src) => src === targetURL)) {
      loadedElements.push(targetURL);
    }

    if (loadedElements.length >= urls.length) {
      setSourceLoaded(true);
    }
  };

  urls.forEach(url => {
    const img = new Image()
    img.src = url
    img.onload = checkNextPictureToLoad;
  });

  return sourceLoaded
}