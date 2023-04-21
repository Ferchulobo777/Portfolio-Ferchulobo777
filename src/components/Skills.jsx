import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div data-aos="fade-right" data-aos-anchor-placement="top-center"
    data-aos-duration="1000"   className="skills-container">
      <section className="skills-section">
        <h1 className="about-title">Habilidades</h1>
        <div className="skills">
          <div className="skill html">
            <div className="container-icon">
              <i className="fa-brands fa-html5"></i>
            </div>
            <p className="title-skill">HTML5</p>
            <p className="text-skill">Lenguaje de marcado para la elaboración de páginas web.</p>
          </div>
          <div className="skill css">
            <div className="container-icon">
              <i className="fa-brands fa-css3-alt"></i>
            </div>
            <p className="title-skill">CSS3</p>
            <p className="text-skill">Lenguaje de hojas de estilo en cascada para la elaboración de páginas web.</p>
          </div>
          <div className="skill tailwind">
            <div className="container-icon">
            <img src="./images/tailwind-css-logo.webp" alt="" />
            </div>
            <p className="title-skill">Tailwind css</p>
            <p className="text-skill">Framework de CSS que proporciona clases predefinidas para facilitar la construcción de interfaces de usuario personalizadas y responsivas.</p>
          </div>
          <div className="skill js">
            <div className="container-icon">
              <i className="fa-brands fa-js-square"></i>
            </div>
            <p className="title-skill">JavaScript</p>
            <p className="text-skill">Lenguaje de programación interpretado, dialecto del estándar ECMAScript.</p>
          </div>
          <div className="skill react">
            <div className="container-icon">
              <i className="fa-brands fa-react"></i>
            </div>
            <p className="title-skill">React</p>
            <p className="text-skill">Librería de JavaScript de código abierto que permite crear interfaces de usuario dinámicas y atractivas mediante un enfoque basado en componentes y un modelo de programación declarativo.</p>
          </div>
          <div className="skill vite">
            <div className="container-icon">
              <img src="/images/vite.svg" alt="" />
            </div>
            <p className="title-skill">Vite</p>
            <p className="text-skill">Herramienta de construcción de aplicaciones web rápida y fácil de usar, que utiliza tecnologías modernas y permite el desarrollo en tiempo real de proyectos con configuraciones sencillas.</p>
          </div>
          <div className="skill git">
            <div className="container-icon">
              <i className="fa-brands fa-git-alt"></i>
            </div>
            <p className="title-skill">Git</p>
            <p className="text-skill">Sistema de control de versiones distribuido que permite gestionar y controlar cambios en archivos y proyectos de software.</p>
          </div>
          <div className="skill github">
            <div className="container-icon">
              <i class="fa-brands fa-github"></i>
            </div>
            <p className="title-skill">Git Hub</p>
            <p className="text-skill">Plataforma web basada en Git que permite alojar, compartir y colaborar en proyectos de código abierto y privados.</p>
          </div>
          <div className="skill npm">
            <div className="container-icon">
              <i className="fa-brands fa-npm"></i>
            </div>
            <p className="title-skill">NPM</p>
            <p className="text-skill">Administrador de paquetes para Node.js que permite la instalación, actualización y gestión de paquetes de software reutilizables de manera eficiente y sencilla.</p>
          </div>
          <div className="skill redux">
            <div className="container-icon">
              <img src="./images/redux.svg" alt="" />
            </div>
            <p className="title-skill">Redux Toolkit</p>
            <p className="text-skill">Librería de gestión de estado que utiliza un patrón de flujo de datos unidireccional para actualizar y acceder al estado de la aplicación de manera consistente y centralizada en aplicaciones JavaScript.</p>
          </div>
          <div className="skill framer">
            <div className="container-icon">
              <img src="./images/framer.svg" alt="" />
            </div>
            <p className="title-skill">Framer Motion</p>
            <p className="text-skill">Libreria de animación para React que permite crear animaciones fluidas y sofisticadas mediante la definición de componentes de animación declarativos y personalizables utilizando la sintaxis de JSX.</p>
          </div>
          <div className="skill framer">
            <div className="container-icon">
              <img src="./images/howlericon.svg" alt="" />
            </div>
            <p className="title-skill">Howler.js</p>
            <p className="text-skill">Librería de audio para aplicaciones web que permite cargar y reproducir archivos de audio en múltiples formatos, y brinda funciones avanzadas como el control de volumen y efectos espaciales.</p>
          </div>
          <div className="skill framer">
            <div className="container-icon">
              <img src="/images/python.svg" alt="" />
            </div>
            <p className="title-skill">Python</p>
            <p className="text-skill">Lenguaje de programación interpretado, versátil y fácil de usar, que se utiliza en diversos campos como la ciencia de datos y el desarrollo web. Su amplia biblioteca de módulos y frameworks lo hace una herramienta potente y su sintaxis clara y legible lo hace ideal para principiantes y expertos.</p>
          </div>
          <div className="skill framer">
            <div className="container-icon">
              <img src="/images/mysql.svg" alt="" />
            </div>
            <p className="title-skill">MySql</p>
            <p className="text-skill">Sistema de gestión de bases de datos relacionales, de código abierto y ampliamente utilizado. Es conocido por ser rápido, confiable y escalable, y cuenta con una gran comunidad de usuarios y desarrolladores en todo el mundo.</p>
          </div>
          <div className="skill framer">
            <div className="container-icon">
              <img src="/images/nodejs.svg" alt="" />
            </div>
            <p className="title-skill">Node js</p>
            <p className="text-skill">Entorno de tiempo de ejecución de JavaScript en el lado del servidor para construir aplicaciones escalables y rápidas en la web y en la nube, basado en eventos y de código abierto.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
