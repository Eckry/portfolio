import { IconGithub, IconLinkedin } from "../icons";
import "./styles/Presentation.css";

export default function Presentation() {
  return (
    <section className="presentation-container">
      <div>
        <div>
          <h1 className="presentation-title">Hey! I'm Erick Torres</h1>
          <h2 className="presentation-subtitle">
            A <span className="highlight-1">software developer</span>
          </h2>
          <p className="presentation-p">
            I'm a passionate physics engineer that found his love for coding!
          </p>
        </div>
        <nav className="presentation-nav">
          <div className="presentation-available">
            <span className="presentation-dot"></span>
            <span>Available for work</span>
          </div>
          <ul className="presentation-ul">
            <li>
              <a className="presentation-link" href="https://github.com/Eckry" target="_blank">
                <IconGithub />
              </a>
            </li>
            <li>
              <a className="presentation-link" href="">
                <IconLinkedin />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <img
        className="presentation-image"
        src="https://vitejs.dev/logo-with-shadow.png"
        alt="me"
      />
    </section>
  );
}
