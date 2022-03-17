import React from "react";
import "./Contact.scss";
import { graphql, useStaticQuery } from "gatsby";
import Form from "../Form/Form";
import { StaticImage } from "gatsby-plugin-image";

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

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contact</h2>
      <div className="contact__container grid">
        <div className="contact__form grid">
          <Form />
        </div>
        <div className="contact__img">
          <StaticImage src="../../assets/images/contact.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
