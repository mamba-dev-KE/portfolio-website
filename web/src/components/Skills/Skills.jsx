import React from "react";
import "./Skills.scss";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Skills = () => {
  const data = useStaticQuery(graphql`
    query SkillsQuery {
      allSanitySkills {
        edges {
          node {
            _id
            technologyName
            icon {
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `);

  const skillsIcons = data.allSanitySkills.edges;

  return (
    <section id="skills" className="skills">
      <h2 className="skills__title container">Skills</h2>
      <div className="skills__list container">
        {skillsIcons.map(skill => (
          <article className="skill__item cursor" key={skill.node._id}>
            <GatsbyImage
              image={skill.node.icon.asset.gatsbyImageData}
              className="skill__icon"
              alt={skill.node.technologyName}
            />
            <div className="skill__name">{skill.node.technologyName}</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
