import React from "react";
import "./CTO.scss";

const CTO = () => {
  return (
    <article className="cto grid">
      <h2 className="cto__text">Ready to turn your vision into reality?</h2>
      <button className="cto__btn cursor">
        <a href="#contact" className="cto__btn-link">
          Contact Me!
        </a>
      </button>
    </article>
  );
};

export default CTO;
