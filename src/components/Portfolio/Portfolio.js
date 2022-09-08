import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/port1.png";
import IMG2 from "../../assets/port2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

export const Portfolio = () => {
  return (
    <section id="#portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="1"></img>
          </div>

          <h3>This is a portfolio item title </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="1"></img>
          </div>

          <h3>This is a portfolio item title </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="1"></img>
          </div>

          <h3>StudentConnector</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/prasannaMedia/StudentConnector"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://evening-cliffs-61590.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="1"></img>
          </div>

          <h3>Crypto Application </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/prasannaMedia/react-crypto-frontend"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://cryptoreactfrontend.herokuapp.com/prasanna"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="1"></img>
          </div>

          <h3>Data Visualization</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/prasannaMedia/ReactCharts"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://chartvisualizer.herokuapp.com/prasanna"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="1"></img>
          </div>

          <h3>Travel APP </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/PrasannaMedia/journeyApp"
              className="btn"
            >
              Github
            </a>
            {/* <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a> */}
          </div>
        </article>
      </div>
    </section>
  );
};
