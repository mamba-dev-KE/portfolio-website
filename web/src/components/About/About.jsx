import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import Layout from "../Layout/Layout";
import bgImg from "../../assets/images/inn.svg";

const About = () => {
  return (
    <section className="about" id="about">
      <motion.h2
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="about__title container"
      >
        About
      </motion.h2>
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
