import { useState } from 'react';

export const useProgressiveImage = src => {
  const [sourceLoaded, setSourceLoaded] = useState(false)

  const img = new Image()

  img.src = src
  img.onload = (data) => {
    if (!sourceLoaded) {
      setSourceLoaded(true);
    }
  }

  return sourceLoaded
}
