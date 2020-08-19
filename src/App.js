import React from 'react'
import Home from './pages/home/Home'
import Loading from './pages/loading/Loading';
import { useProgressiveImageArray } from './hooks/useProgressiveImageArray';
import backgroundImage from './img/background.webp'
import avatar from './img/nico.png'

export default function App() {
  const loaded = useProgressiveImageArray([backgroundImage, avatar]);

  return (
    <Loading loaded={loaded}>
      <Home />
    </Loading>
  )
}

