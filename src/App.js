import React from 'react'
import Home from './pages/home/Home'
import { useProgressiveImage } from './hooks/useProgressiveImage';
import backgroundImage from './img/adeole_yosemite.jpg'
import Loading from './pages/loading/Loading';

export default function App() {
  const loaded = useProgressiveImage(backgroundImage);

  return (
    <Loading loaded={loaded}>
      <Home />
    </Loading>
  )
}

