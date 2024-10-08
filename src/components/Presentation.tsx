import { social } from "../consts.d";
import "./styles/Presentation.css";

function Link({
  link,
  name,
  Icon,
}: {
  link: string;
  name: string;
  Icon: () => JSX.Element;
}) {
  return (
    <a className="presentation-link" href={link} target="_blank">
      <Icon />
      <span className="tooltip">{name}</span>
    </a>
  );
}

export default function Presentation() {
  return (
    <section className="presentation-container">
      <header className="presentation-header">
        <div>
          <h1 className="presentation-title">Hey! I'm Erick Torres</h1>
          <h2 className="presentation-subtitle">
            A <span className="highlight-1">software developer</span>.
          </h2>
        </div>
        <img
          className="presentation-image"
          src="https://vitejs.dev/logo-with-shadow.png"
          alt="me"
        />
      </header>
      <p className="presentation-p">
        I'm a passionate physics engineer that found his love for coding!
      </p>
      <nav className="presentation-nav">
        <div className="presentation-available">
          <span className="presentation-dot"></span>
          <span>Available for work</span>
        </div>
        <span className="presentation-line"></span>
        <ul className="presentation-ul">
          {social.map((network) => {
            return (
              <li key={network.name}>
                <Link {...network} />
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
