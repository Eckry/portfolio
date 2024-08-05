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
      <div>
        <h2 className="project-title">{name}</h2>
        <p className="project-description">{description}</p>
        <div className="project-icons">
          <ul className="project-tech">
            {tech.map((technology) => {
              return <li className={`project-icon ${technology.name}`} key={technology.name}><technology.TechIcon /></li>;
            })}
          </ul>
          <a className="project-link" href={link}>
            <IconLink />
          </a>
        </div>
      </div>
      <img className="project-image" src={image} alt={`${name} image`} />
    </article>
  );
}
