import "./styles/ProjectsSection.css";
import {projects} from "../consts.d";
import Project from "./Project";

export default function ProjectsSection() {
  return (
    <section>
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projects.map((project) => {
          return <Project {...project} />;
        })}
      </div>
    </section>
  );
}
