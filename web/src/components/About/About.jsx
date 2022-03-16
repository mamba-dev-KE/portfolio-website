import React from "react";
import "./About.scss";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

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
          <p className="about__text">{description}</p>
        </div>
        <div className="about__img">
          <StaticImage
            src="https://doodleipsum.com/1000/flat?i=5f1b9a5210e95d07ddbe257c32a24725"
            alt=""
            placeholder="blurred"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
