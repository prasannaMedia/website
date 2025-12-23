import React from "react";
import "./portfolio.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMG1 from "../../assets/port1.png";
import IMG2 from "../../assets/port2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import ECOMERCEIMG from "../../assets/ecomerce.jpg";
import EFOOD from "../../assets/efood1.png";
import NECURITY from '../../assets/necurity.png'

export const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image: NECURITY,
      title: "Security dashboard",
      github: null,
      demo: "https://necurity-gray.vercel.app/"
    },
    {
      id: 2,
      image: ECOMERCEIMG,
      title: "Ecommerce website",
      github: null,
      demo: "https://prasannamp.onrender.com/"
    },
    {
      id: 3,
      image: IMG3,
      title: "StudentConnector",
      github: "https://github.com/prasannaMedia/StudentConnector",
      demo: "https://evening-cliffs-61590.herokuapp.com/"
    },
    {
      id: 4,
      image: EFOOD,
      title: "e-Foodorder",
      github: null,
      demo: "https://efoodorder.netlify.app/"
    },
    {
      id: 5,
      image: IMG4,
      title: "Crypto Application",
      github: "https://github.com/prasannaMedia/react-crypto-frontend",
      demo: "https://cryptoreactfrontend.herokuapp.com/prasanna"
    },
    {
      id: 6,
      image: IMG5,
      title: "Data Visualization",
      github: "https://github.com/prasannaMedia/ReactCharts",
      demo: "https://chartvisualizer.herokuapp.com/prasanna"
    },
    {
      id: 7,
      image: IMG6,
      title: "Travel APP",
      github: "https://github.com/PrasannaMedia/journeyApp",
      demo: null
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  };

  const PortfolioCard = ({ item }) => (
    <div className="portfolio__item-wrapper">
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={item.image} alt={item.title}></img>
        </div>
        <h3>{item.title}</h3>
        <div className="portfolio__item-cta">
          {item.github && (
            <a href={item.github} className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
          )}
          {item.demo && (
            <a href={item.demo} className="btn btn-primary" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </article>
    </div>
  );

  return (
    <section id="#portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <Slider {...settings} className="portfolio__slider">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
