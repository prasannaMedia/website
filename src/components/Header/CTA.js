import React from "react";
import CV from "../../assets/prasanna_cv.pdf";

export const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Lets Taik
      </a>
    </div>
  );
};
