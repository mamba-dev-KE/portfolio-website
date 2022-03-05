import React from "react";
import "./Hero.scss";
import avatar from "../../assets/images/avataaars.svg";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowDown } from "@react-icons/all-files/bs/BsArrowDown";
import { DarkMode } from "../../components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Hero = () => {
  // graphql query for her data from sanity
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      sanityHero {
        hello
        title
        description
        heroImage {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const { gatsbyImageData } = data.sanityHero.heroImage.asset;

  console.log();

  // hero animation variants
  const heroVariant = {
    initial: { y: "-100vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      delay: 2,
      type: "spring",
      stiffness: 80,
    },
  };
  const avatarVariant = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeIn" },
  };

  const paraVariant = {
    initial: { y: 0, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1.5, ease: "easeIn" },
  };

  const headingVariant = {
    initial: { y: 0, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1.5, ease: "easeIn" },
  };

  return (
    <section className="hero">
      <div className="hero__info container flex layout">
        <DarkMode />

        <div className="hero__avatar-container">
          <GatsbyImage
            image={gatsbyImageData}
            alt=""
            className="hero__avatar"
          />
        </div>

        <p className="hero__hello">{data.sanityHero.hello}</p>
        <h1 className="hero__title">{data.sanityHero.title}</h1>
        <p className="hero__description">{data.sanityHero.description}</p>

        <motion.div
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1.5 }}
          whileHover={{
            scale: 2,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            ease: "easeInOut",
          }}
          className="hero__arrow-container"
        >
          <BsArrowDown className="hero__scroll" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
