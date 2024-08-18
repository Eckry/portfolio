import { IconAbout, IconContact, IconFolder } from "../icons";
import "./styles/HeaderBar.css";

export default function HeaderBar() {
  return (
    <header className="headerbar">
      <ul className="header-list">
        <li>
          <a className="header-link" href="#projects"><IconFolder /> Projects</a>
        </li>
        <li>
          <a className="header-link" href="#about"><IconAbout /> About</a>
        </li>
        <li>
          <a className="header-link" href="#contact"><IconContact /> Contact</a>
        </li>
      </ul>
    </header>
  );
}
