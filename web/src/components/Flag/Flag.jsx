import React from "react";
import "./Flag.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const Flag = () => {
  const data = useStaticQuery(graphql`
    query FlagQuery {
      sanityContact {
        flagImage {
          asset {
            gatsbyImageData(placeholder: BLURRED, fit: FILLMAX)
          }
        }
      }
    }
  `);

  const { gatsbyImageData } = data.sanityContact.flagImage.asset;

  return (
    <div className="flag">
      <GatsbyImage image={gatsbyImageData} className="flag__icon" alt="" />
    </div>
  );
};

export default Flag;
