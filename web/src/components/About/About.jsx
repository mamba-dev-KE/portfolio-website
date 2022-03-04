import React from "react";
import "./About.scss";
import { StaticQuery, graphql } from "gatsby";
import bgImg from "../../assets/images/inn.svg";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about__title container">About</h2>
      <div className="about__info container">
        <p className="about__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          asperiores tempore excepturi voluptatibus dignissimos aliquam sapiente
          nobis maxime culpa unde voluptates amet voluptatem alias, eveniet quam
          at facere fugiat, optio, assumenda provident cumque deleniti. Dolores
          maiores similique voluptatum quaerat. Doloremque accusamus sunt a! Hic
          veniam officiis ipsam suscipit. Deserunt, error dolores! Explicabo
          voluptatem architecto suscipit quis temporibus doloribus ducimus iste
          error illo magnam aliquid, necessitatibus sint magni id, quasi
          mollitia, maiores optio consectetur reprehenderit quibusdam earum
          ipsum? Officia, excepturi quis?
        </p>
      </div>
    </section>
  );
};

export default About;
