import "./styles/Project.css";

interface Props {
  name: string;
  image: string;
  description: string;
  tech: string[];
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
        <h2>{name}</h2>
        <p className="project-description">{description}</p>
        <div className="project-icons">
          <ul className="project-tech">
            {tech.map((technology) => {
              return <li>{technology}</li>;
            })}
          </ul>
          <a href={link}>Link</a>
        </div>
      </div>
      <img className="project-image" src={image} alt={`${name} image`} />
    </article>
  );
}
