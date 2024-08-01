import "./styles/ProjectsSection.css";
import projects from "../projects.json";
import Project from "./Project";

export default function ProjectsSection() {
  return (
    <section>
      <h1 className="projects-title">Projects</h1>
      {projects.map((project) => {
        return <Project {...project} />;
      })}
    </section>
  );
}
