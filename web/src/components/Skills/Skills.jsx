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

  skillsIcons.map(skill => console.log(skill.node.icon.asset));

  // console.log(data);

  return (
    <section id="skills">
      <h2 className="skills__title container">Skills & Experience</h2>
      <div className="skills__list container">
        {skillsIcons.map(skill => (
          <article className="skill__item">
            <GatsbyImage
              image={skill.node.icon.asset.gatsbyImageData}
              className="skill__icon"
            />
            <div className="skill__name">{skill.node.technologyName}</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
