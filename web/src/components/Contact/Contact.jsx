import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./Contact.scss";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query VideoQuery {
      sanityContact {
        video {
          asset {
            url
          }
        }
      }
    }
  `);

  console.log(data.sanityContact.video.asset);

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <video controls>
        <source url={data.sanityContact.video.asset} type="video/mp4" />
      </video>
    </section>
  );
};

export default Contact;
