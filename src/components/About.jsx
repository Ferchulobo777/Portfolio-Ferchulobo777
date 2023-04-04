import React, { useState } from "react";
import { Link } from "react-router-dom";
import gameData from "./game.jsx";

const About = ({isDark, handleDark }) => {
  const [skillsData, setSkillsData] = useState(
    gameData.sort(() => Math.random() - 0.5)
  );
  const [prevIndexCard, setPrevIndexCard] = useState(-1);
  const [isGame, setIsGame] = useState(false);

  console.log(skillsData);

  const selectCard = (e, index) => {
    if (
      skillsData[index].status !== "selected" &&
      skillsData[index].status !== "up"
    ) {
      skillsData[index].status = "selected";
      setSkillsData([...skillsData]);
      if (prevIndexCard === -1) {
        setPrevIndexCard(index);
      } else {
        // En la segunda tarjeta seleccionada
        validateCards(index);
      }
    }
  };

  const validateCards = (newIndexCard) => {
    setTimeout(() => {
      const prev = skillsData[prevIndexCard];
      const current = skillsData[newIndexCard];
      if (prev.name === current.name) {
        prev.status = "up";
        current.status = "up";
      } else {
        prev.status = "down";
        current.status = "down";
      }
      setSkillsData([...skillsData]);
      setPrevIndexCard(-1);
    }, 500);
  };

  const isGameToggle = () => setIsGame(!isGame);

  return (
    <div className="about">
      {/* <nav className="about-nav">
        <div>
          <h1>JD</h1>
        </div>
        <div>
        <button onClick={handleDark} className="icon">
          {
            isDark ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>
          }
        </button>
        </div>
      </nav> */}
      <div className="about-container">
        <div className="content box1">
          
          <section className="about-text">
          
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
          </section>
          <section className="about-text-rigth">
            <div className="ball">
              <h2>About</h2>
            </div>
          </section>
        </div>

        <div className="content">
          {/* zona de habilidades web skills */}
          <h2 className="title">Skills</h2>
          <button className="isGame-button" onClick={isGameToggle}>
            {isGame ? "cerrar" : "Quieres Jugar?"}
          </button>
          {isGame && <h2 className="title">Juego de Memoria</h2>}
          <div className="skills">
            {isGame ? (
              <>
                {skillsData
                  .filter((e) => e !== undefined)
                  .map((e, i) => (
                    <div
                      key={e.id}
                      onClick={() => selectCard(e.status, i)}
                      className={`skill ${e.status}`}
                    >
                      {e.status !== "down" && e.skill}
                    </div>
                  ))}
              </>
            ) : (
              <>
                <div className="skill html">
                    <i className="fa-brands fa-html5"></i>
                    <p>HTML5</p>
                </div>
                <div className="skill css">
                  
                    <i className="fa-brands fa-css3-alt"></i>
                    <p>CSS3</p>
                  
                  
                </div>
                <div className="skill js">
                  <i className="fa-brands fa-js-square"></i>
                  <p>JavaScript</p>
                </div>
                <div className="skill react">
                  <i className="fa-brands fa-react"></i>
                  <p>React</p>
                </div>
                <div className="skill vite">
                  <img src="./vite.svg" alt="" />
                  <p>Vite</p>
                </div>
                <div className="skill git">
                  <i className="fa-brands fa-git-alt"></i>
                  <p>Git</p>
                </div>
                <div className="skill github">
                  <i className="fa-brands fa-github"></i>
                  <p>Git Hub</p>
                </div>
                <div className="skill npm">
                  <i className="fa-brands fa-npm"></i>
                  <p>NPM</p>
                </div>
                <div className="skill redux">
                  <img src="./images/redux.svg" alt="" />
                  <p>Redux Toolkit</p>
                </div>
                <div className="skill framer">
                  <img src="./images/framer.svg" alt="" />
                  <p>Framer Motion</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="content">
          <h2 className="title">Contact</h2>
          <div className="contact">
            <a className="icon" href="mailto:ceballos990410@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>

            <a
              className="icon"
              href="https://wa.me/573137448742"
              target="_blanck"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <Link to="/" className="icon home-icon">
          <i class="fa-solid fa-house"></i>
        </Link>
      </div>
    </div>
  );
};

export default About;
