import React, { useState } from 'react'
import Home from './pages/home/Home'
import { useProgressiveImage } from './hooks/useProgressiveImage';
import backgroundImage from './img/adeole_yosemite.jpg'
import Loading from './pages/loading/Loading';

export default function App() {
  const loaded = useProgressiveImage(backgroundImage);
  const [mounted, setIsMounted] = useState(false);

  return (
    <Loading loaded={loaded} mounted={mounted}>
      <Home setIsMounted={setIsMounted} />
    </Loading>
  )
}

