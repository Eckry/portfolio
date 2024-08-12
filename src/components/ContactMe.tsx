import { email } from "../consts.d";
import { IconCopy, IconExternalLink } from "../icons";
import "./styles/ContactMe.css";

export default function ContactMe() {
  function copyEmail() {
    navigator.clipboard.writeText(email);
  }

  function sendEmail() {
    window.open(`mailto:${email}`);
  }

  return (
    <section className="contact-container">
      <h1 id="contact" className="section-title">
        Contact me!
      </h1>
      <div className="contact-buttons">
        <p className="contact-email">{email}</p>
        <button onClick={copyEmail}>
          <IconCopy />
        </button>
        <button onClick={sendEmail}>
          <IconExternalLink />
        </button>
      </div>
    </section>
  );
}
