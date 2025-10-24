import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
  FaNodeJs, 
  FaDatabase, 
  FaPython, 
  FaAws, 
  FaGitAlt,
  FaServer
} from "react-icons/fa";
import { 
  SiRedux, 
  SiMui, 
  SiAntdesign, 
  SiMongodb, 
  SiMysql, 
  SiRedis, 
  SiVite, 
  SiWebpack, 
  SiPostman,
  SiServerless
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import "./experience.css";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className="experience__details-icon" />
              <div>
                <h5>HTML</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3Alt className="experience__details-icon" />
              <div>
                {" "}
                <h5>CSS</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaJs className="experience__details-icon" />
              <div>
                <h5>JavaScript</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h5>React</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <div>
                <h5>Redux</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__details-icon" />
              <div>
                <h5>BootStrap</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMui className="experience__details-icon" />
              <div>
                <h5>MaterialUI</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiAntdesign className="experience__details-icon" />
              <div>
                <h5>AntD</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h5>NodeJS</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h5>MongoDB</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMysql className="experience__details-icon" />
              <div>
                <h5>SQL</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaPython className="experience__details-icon" />
              <div>
                <h5>Python</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaServer className="experience__details-icon" />
              <div>
                <h5>MicroService</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaAws className="experience__details-icon" />
              <div>
                <h5>AWS</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiServerless className="experience__details-icon" />
              <div>
                <h5>Serverless lambda</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiRedis className="experience__details-icon" />
              <div>
                <h5>Redis</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaDatabase className="experience__details-icon" />
              <div>
                <h5>BullQueue</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiVite className="experience__details-icon" />
              <div>
                <h5>Vite & Webpack</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaGitAlt className="experience__details-icon" />
              <div>
                <h5>Git</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPostman className="experience__details-icon" />
              <div>
                <h5>Postman</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  );
};
