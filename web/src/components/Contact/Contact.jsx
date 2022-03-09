import React from "react";
import "./Contact.scss";
import { Flag } from "../../components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      sanityContact {
        contactImage {
          asset {
            gatsbyImageData(placeholder: BLURRED, fit: FILLMAX)
          }
        }
      }
    }
  `);

  const { gatsbyImageData } = data.sanityContact.contactImage.asset;

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contact</h2>
      <div className="contact__bg">
        <GatsbyImage image={gatsbyImageData} alt="" />
      </div>
      <Flag />
    </section>
  );
};

export default Contact;
