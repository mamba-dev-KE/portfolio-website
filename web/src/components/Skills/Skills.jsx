import React from "react";
import "./Skills.scss";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Skills = () => {
  const data = useStaticQuery(graphql`
    query SkillsQuery {
      allSanitySkills {
        nodes {
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
  `);

  const skills = data.allSanitySkills.nodes;

  return (
    <section id="skills" className="skills">
      <h2 className="skills__title container">Skills</h2>
      <div className="skills__list container">
        {skills.map(skill => (
          <article className="skill__item cursor" key={skill._id}>
            <GatsbyImage
              image={skill.icon.asset.gatsbyImageData}
              className="skill__icon"
              alt={skill.technologyName}
            />
            <div className="skill__name">{skill.technologyName}</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
