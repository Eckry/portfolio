import { IconCopy, IconExternalLink } from "../icons";
import "./styles/ContactMe.css";

export default function ContactMe() {
  return (
    <section className="contact-container">
      <h1 id="contact" className="section-title">
        Contact me!
      </h1>
      <div className="contact-buttons">
        <p className="contact-email">ericktorresagui@gmail.com</p>
        <button>
          <IconCopy />
        </button>
        <button><IconExternalLink /></button>
      </div>
    </section>
  );
}
