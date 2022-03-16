import React, { useState } from "react";
import "./Contact.scss";
import { Flag } from "../../components";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { MdContacts } from "@react-icons/all-files/md/MdContacts";

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

  const handleChange = e => {
    const { name, value } = e.target;

    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {};

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contact</h2>
      <MdContacts className="contact__icon" />
      <div className="contact__bg">
        <StaticImage src="../../assets/contact.webp" alt="" />
      </div>
      <form onSubmit={handleSubmit} className="form grid">
        <label htmlFor="names">
          Full Names: <br />
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
          Email Address: <br />
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
          Message: <br />
          <textarea
            value={contact.message}
            onChange={handleChange}
            name="message"
            rows={10}
          />
        </label>
      </form>
    </section>
  );
};

export default Contact;
