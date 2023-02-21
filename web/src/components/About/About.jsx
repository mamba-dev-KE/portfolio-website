import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./About.scss";
// import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      sanityAbout {
        description
        about
      }
    }
  `);
  const { description, about } = data.sanityAbout;

  return (
    <section className="about" id="about">
      <h2 className="about__title container">{about}</h2>
      <div className="about__container grid">
        <div className="about__info container">
          <p className="about__text">
            {description.slice(0, description.indexOf("I take"))}
          </p>
        </div>
        <div className="about__img container">
          <p className="about__text">
            {description.substring(description.indexOf("I take pride"))}
          </p>
        </div>
        {/* <div className="about__img"> */}
        {/* <StaticImage
            src="https://doodleipsum.com/1000/flat?i=5f1b9a5210e95d07ddbe257c32a24725"
            alt=""
            placeholder="blurred"
          /> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default About;
