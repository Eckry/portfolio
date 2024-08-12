import { useRef, useState } from "react";
import { email } from "../consts.d";
import { IconCheck, IconCopy, IconExternalLink } from "../icons";
import "./styles/ContactMe.css";

export default function ContactMe() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  function copyEmail() {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        setCopied(true);

        timeoutRef.current = setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error(err);
      });
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
          {copied && <IconCheck />}
        </button>
        <button onClick={sendEmail}>
          <IconExternalLink />
        </button>
      </div>
    </section>
  );
}
