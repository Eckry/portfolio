import { skills } from "../consts.d";
import "./styles/Skills.css";

export default function SkillsSection() {
  return (
    <section className="skills-container">
      <h1 id="skills" className="section-title">
        Skills
      </h1>
      <ul className="skills-ul">
        {skills.map((skill) => {
          return (
            <li className={skill.name} key={skill.name}>
              <skill.Icon />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
