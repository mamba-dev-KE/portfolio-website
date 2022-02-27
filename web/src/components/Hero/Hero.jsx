import React from "react";
import "./Hero.scss";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const Hero = () => {
  const heroVariant = {
    initial: { y: "-100vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      delay: 2,
      type: "spring",
      stiffness: 80,
    },
  };

  return (
    <section className="hero">
      <motion.div className="hero__container">
        <StaticImage
          src="../../assets/images/code.jpeg"
          className="hero__image"
          placeholder="tracedSVG"
          alt=""
        />
        <h1 className="hero__title">Junior Fullstack Javascript Developer</h1>
        <p>Hi</p>
      </motion.div>
    </section>
  );
};

export default Hero;
