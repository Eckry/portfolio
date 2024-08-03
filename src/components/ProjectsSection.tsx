import "./styles/ProjectsSection.css";
import {projects} from "../consts.d";
import Project from "./Project";

export default function ProjectsSection() {
  return (
    <section>
      <h1 id="projects" className="section-title">Projects</h1>
      <div className="projects-container">
        {projects.map((project) => {
          return <Project key={project.name} {...project} />;
        })}
      </div>
    </section>
  );
}
