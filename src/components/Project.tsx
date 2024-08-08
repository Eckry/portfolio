import { IconLink } from "../icons";
import "./styles/Project.css";

interface Props {
  name: string;
  image: string;
  description: string;
  tech: { name: string; TechIcon: () => JSX.Element }[];
  link: string;
  ProjectIcon: () => JSX.Element;
  subtitle: string;
}

export default function Project({
  name,
  image,
  description,
  tech,
  link,
  ProjectIcon,
  subtitle,
}: Props) {
  return (
    <article className="project-container">
      <div className="project-information-container">
        <header>
          <h2 className="project-title">{name}</h2>
          <h3 className="project-subtitle">
            <ProjectIcon /> {subtitle}
          </h3>
        </header>
        <div>
          {description.split("=").map((text, idx) => {
            if (idx % 2) return <span key={idx} className="text-highlight">{text}</span>;
            return <p key={idx} className="project-description">{text}</p>;
          })}
        </div>
        <div className="project-icons">
          <ul className="project-tech">
            {tech.map((technology) => {
              return (
                <li
                  className={`project-icon ${technology.name}`}
                  key={technology.name}
                >
                  <span className="tooltip">{technology.name}</span>
                  <technology.TechIcon />
                </li>
              );
            })}
          </ul>
          <a className="project-link" target="_blank" href={link}>
            <IconLink />
          </a>
        </div>
      </div>
      <img className="project-image" src={image} alt={`${name} image`} />
    </article>
  );
}
