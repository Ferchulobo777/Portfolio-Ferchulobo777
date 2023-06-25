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
            <p className="parapher">
            Soy Fernando Rodriguez, un desarrollador Full-stack de Argentina. Me apasiona la programación y el diseño web, y disfruto creando experiencias de usuario atractivas y funcionales mediante la implementación de tecnologías de vanguardia y técnicas de diseño innovadoras. Soy experto tanto en el Front-end como en el Back-end, y me encanta trabajar en proyectos desafiantes y emocionantes que me permitan seguir aprendiendo y creciendo en mi carrera profesional. Cuando no estoy codeando, me gusta relajarme con una buena taza de café y actualizar mis conocimientos.
            </p>
            <p className="parapher">
            Creo firmemente que la programación es una de las maravillas modernas del mundo y que tiene el poder de transformar la vida de las personas y de las sociedades enteras. Como herramienta de resolución de problemas, la programación nos permite abordar desafíos complejos de manera creativa y eficaz. Estoy convencido de que, con el poder de la programación, podemos crear soluciones innovadoras y cambiar el mundo para mejor.
            </p>
            <p className="parapher">
            Además de mi pasión por la programación, disfruto de otras actividades como leer libros enriquecedores y estudiar nuevas tecnologías y técnicas de programación. Me encanta mantenerme actualizado y aprender nuevos lenguajes para poder aplicar nuevas ideas y conocimientos en mi trabajo. También disfruto de sumergirme en mundos virtuales a través de videojuegos, ver series, películas interesantes, y relajarme con la música.
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
