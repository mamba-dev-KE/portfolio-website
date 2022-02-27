import React from "react";
import "./Socials.scss";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { motion, AnimatePresence } from "framer-motion";
import {} from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

const Socials = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSanitySocials {
        nodes {
          link
        }
      }
    }
  `);

  const socialsVariant = {
    invincible: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1.1 },
    transition: { type: "spring", duration: 0.5, delay: 1 },
  };

  const socialsIconVariant = {};

  return (
    <AnimatePresence exitBeforeEnter={true} onExitComplete={true}>
      <motion.div
        variants={socialsVariant}
        initial="invincible"
        animate="visible"
        transition="transition"
        className="socials flex cursor"
      >
        <motion.a
          href={data.allSanitySocials.nodes[0].link}
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub className="social__icon" />
        </motion.a>
        <motion.a
          href={data.allSanitySocials.nodes[1].link}
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineTwitter className="social__icon" />
        </motion.a>
        <motion.a
          href={data.allSanitySocials.nodes[2].link}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="social__icon" />
        </motion.a>
      </motion.div>
    </AnimatePresence>
  );
};

export default Socials;
