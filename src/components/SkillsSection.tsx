import { skills } from "../consts.d";
import Skill from "./Skill";
import "./styles/SkillsSection.css";

export default function SkillsSection() {
  return (
    <section className="skills-container">
      <h1 id="skills" className="section-title">Skills</h1>
      <div className="skills-wrapper">
        <article className="skills-article">
          <h2>Frontend</h2>
          {skills.backend.map((skill) => {
            return <Skill key={skill.name} {...skill} />;
          })}
        </article>
        <article className="skills-article">
          <h2>Backend</h2>
          {skills.frontend.map((skill) => {
            return <Skill key={skill.name} {...skill} />;
          })}
        </article>
      </div>
    </section>
  );
}
