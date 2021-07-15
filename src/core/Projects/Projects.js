import React from "react";
import "./Projects.scss";
import { projects } from "./config";
import Project from "./Project/Project";

const Projects = props => (
  <div className="Projects">
    <h2>Projects:</h2>
    <div className="Projects__list">
      {projects.map(project => (
        <Project
          key={project.title}
          title={project.title}
          link={project.link}
          description={project.description}
          src={project.src}
        />
      ))}
    </div>
  </div>
);

export default Projects;
