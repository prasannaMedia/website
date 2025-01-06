import React from "react";
import AboutPhoto from "../../assets/profile_photo.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about-me-image">
            <img src={AboutPhoto}></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>clients</h5>
              <small>4</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>
            Highly motivated to work in a dynamically progressing organization
            and to put in my imagination, creativity and best efforts for the
            enhancement of the organization and myself. I am interested in Web
            development and programming I always find it's interesting to work
            in this domain. I think smart, act quickly and always aim to achieve
            better results. Check out my project portfolio and online resume.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Taik
          </a>
        </div>
      </div>
    </section>
  );
};
