import React from 'react';
import './home.css';
import { useProgressiveImage } from './../../shared/useProgressiveImage';
import backgroundPic from './../../img/adeole_yosemite.jpg';

export default function Home() {
  const loaded = useProgressiveImage(`${backgroundPic}`);

  return (
    <React.Fragment>
      {!loaded && <div>Loading...</div>}
      {loaded && <section>
        <div className="box">
          <h2>Bienvenido</h2>
          <p>Este es mi sito web, soy un desarrollador de tiempo completo, me entusiasma mucho la programacion
          <br />y deseo algun dia poder lograr mis sueños a traves de mis programas
          <br />Aqui dejo unos links para que puedas ver mis trabajos, muchas gracias por visitar mi sitio web!</p>
        </div>
      </section>}
    </React.Fragment>

  );
}
