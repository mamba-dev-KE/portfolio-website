import React from "react";
import "./CTO.scss";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";

const CTO = () => {
  return (
    <article className="cto grid">
      <h2 className="cto__text">Ready to turn your vision into reality?</h2>
      <button className="cto__btn flex cursor">
        <a href="#contact" className="cto__btn-link">
          Contact Me!
        </a>
        <AiOutlineRight className="cto__arrow" />
      </button>
    </article>
  );
};

export default CTO;
