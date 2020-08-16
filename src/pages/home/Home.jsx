import React, { useEffect } from 'react';
import './home.css';

export default function Home({ setIsMounted }) {

  useEffect(() => {
    setIsMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div className="box">
        <h2>Bienvenido</h2>
        <p>Este es mi sito web, soy un desarrollador de tiempo completo, me entusiasma mucho la programacion
          <br />y deseo algun dia poder lograr mis sueños a traves de mis programas
          <br />Aqui dejo unos links para que puedas ver mis trabajos, muchas gracias por visitar mi sitio web!</p>
      </div>
    </section>
  );
}
