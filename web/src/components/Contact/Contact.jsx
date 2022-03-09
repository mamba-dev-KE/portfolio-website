import React, { useState } from "react";
import "./Contact.scss";
import { Flag } from "../../components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Contact = () => {
  const [contact, setContact] = useState({ names: "", email: "", message: "" });

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

  const handleChange = e => {
    const { name, value } = e.target;

    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {};

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contact</h2>
      <div className="contact__bg">
        <GatsbyImage image={gatsbyImageData} alt="" />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="names">
          Full Names:
          <input
            type="text"
            name="names"
            id="names"
            placeholder="Enter your names"
            required
            value={contact.names}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          Email Address:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            value={contact.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="message">
          Message:
          <textarea
            value={contact.message}
            onChange={handleChange}
            name="message"
          />
        </label>
      </form>
      {/* <Flag /> */}
      {contact.firstName}
      {contact.email}
      {contact.message}
    </section>
  );
};

export default Contact;
