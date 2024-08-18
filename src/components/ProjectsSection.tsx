import "./styles/ProjectsSection.css";
import { projects } from "../consts.d";
import Project from "./Project";

export default function ProjectsSection() {
  return (
    <section>
      <header className="title-header">
        <h1 id="projects" className="section-title">
          <span className="title-number">01.</span> Some of my projects
        </h1>
        <span className="title-line"></span>
      </header>
      <div className="projects-container">
        {projects.map((project) => {
          return <Project key={project.name} {...project} />;
        })}
      </div>
    </section>
  );
}
