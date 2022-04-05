import React from "react";
import "./Projects.scss";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allSanityProjects {
        nodes {
          _id
          projectName
          projectDescription
          technologiesUsed
          projectThumbnail {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
          projectThumbnailOther {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const projects = data.allSanityProjects.nodes;

  return (
    <section className="projects" id="projects">
      <h2 className="projects__title cursor">Projects</h2>
      <div className="projects__list container">
        {projects.map(project => (
          <article className="project__item" key={project._id}>
            <h3>{project.projectName}</h3>
            <div className="project__info flex">
              <p className="project__description">
                {project.projectDescription}
              </p>
              {/* <p className="project__description">
                {project.projectDescription.slice(0, 400)}
                <span>
                  <Link to="/"> Read more...</Link>
                </span>
              </p> */}
              <div className="project__images">
                <GatsbyImage
                  image={project.projectThumbnail.asset.gatsbyImageData}
                  className="project__img"
                  alt={project.projectName}
                  objectFit="cover"
                />
              </div>
              <div className="project__tech-list">
                <ul>
                  {project.technologiesUsed.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="project__links"></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
