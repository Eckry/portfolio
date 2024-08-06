import { IconLink } from "../icons";
import "./styles/Project.css";

interface Props {
  name: string;
  image: string;
  description: string;
  tech: { name: string; TechIcon: () => JSX.Element }[];
  link: string;
}

export default function Project({
  name,
  image,
  description,
  tech,
  link,
}: Props) {
  return (
    <article className="project-container">
      <div className="project-information-container">
        <h2 className="project-title">{name}</h2>
        <div>
          {description.split("=").map((text, idx) => {
            if (idx % 2) return <span className="text-highlight">{text}</span>;
            return <p className="project-description">{text}</p>;
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
