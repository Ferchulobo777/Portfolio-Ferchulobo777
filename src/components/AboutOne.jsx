import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutOne = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  
  return (
    <div id="about" data-aos="fade-right"
    data-aos-anchor-placement="top-center"
    data-aos-duration="1000"  className="about-conatiner">
      <section className="about">
        <div className="about-text">
          <h1   className="about-title">Sobre Mi</h1>
          <div>
            <p>
            Hola mundo! Mi nombre es Fernando Rodriguez y soy originario de Argentina. Soy un desarrollador web especializado en Front-end, apasionado por la programación, el diseño web y disfruto de una buena taza de café mientras trabajo. Me encanta crear experiencias de usuario atractivas y funcionales mediante la implementación de tecnologías de vanguardia y técnicas de diseño innovadoras. ¡Estoy emocionado de seguir aprendiendo y creciendo en este emocionante campo!
            </p>
            <p>
            Nunca es tarde para adquirir nuevos conocimientos y nunca es demasiado tarde para ayudar a los demás, especialmente si se trata de programación.
            </p>
            <p>
            Creo firmemente que la programación es una de las maravillas modernas del mundo y que tiene el poder de transformar la vida de las personas y de las sociedades enteras. Como herramienta de resolución de problemas, la programación nos permite abordar desafíos complejos de manera creativa y eficaz. Estoy convencido de que, con el poder de la programación, podemos crear soluciones innovadoras y cambiar el mundo para mejor.
            </p>
            <p>
            Además de mi pasión por la programación, disfruto de otras actividades como leer libros enriquecedores y estudiar nuevas tecnologías y técnicas de programación. Me encanta mantenerme actualizado y aprender continuamente para poder aplicar nuevas ideas y conocimientos en mi trabajo. También disfruto de sumergirme en mundos virtuales a través de videojuegos, ver series y películas interesantes, y relajarme con la música. Definitivamente, combinar estas actividades con la programación es la mejor experiencia que hay para mí. Me permite ser más creativo y encontrar soluciones innovadoras en mi trabajo.
            </p>
          </div>
        </div>
        <div className="about-logo">
          <div className="bgColor"></div>
          <div className="logo-container">
            <h1 className="logo">Ferchulobo777</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutOne;
