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
          <div className="container-about">
            <p className="parapher">
            ¡Hola!, mi nombre es Fernando Rodriguez,  Soy un apasionado Full Stack Developer con amplia experiencia en el desarrollo de aplicaciones web y soluciones tecnológicas. Con una sólida formación en programación y una mentalidad orientada a resultados, me esfuerzo por crear productos de alta calidad que cumplan con los requisitos del cliente y superen sus expectativas.
            Mi experiencia abarca tanto el desarrollo del lado del cliente como del servidor, lo que me permite crear soluciones completas y eficientes. Utilizo tecnologías modernas y frameworks como HTML5, CSS3, JavaScript, React, Node.js y MongoDB para crear interfaces intuitivas y funcionales, así como potentes aplicaciones web.
            Además de mis habilidades técnicas, también valoro la comunicación efectiva y el trabajo en equipo. Me enorgullezco de mi capacidad para colaborar estrechamente con los clientes y los miembros del equipo, comprendiendo sus necesidades y ofreciendo soluciones eficientes. También estoy constantemente aprendiendo y actualizando mis conocimientos para mantenerme al día con las últimas tendencias y mejores prácticas en el mundo del desarrollo web.
            En mi portfolio, encontrarás una selección de proyectos destacados que he completado, demostrando mi capacidad para crear soluciones creativas y funcionales. Estoy listo para enfrentar nuevos desafíos y colaborar en emocionantes proyectos. Si estás buscando un Full Stack Developer profesional y comprometido, estaré encantado de hablar contigo y explorar cómo puedo ayudar a materializar tus ideas y objetivos en realidad.
            </p>
          </div>
        </div>
        <div className="about-logo">
          <div className="bgColor"></div>
          <div className="logo-container">
            <h1 className="logo">ferchulobo777</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutOne;
