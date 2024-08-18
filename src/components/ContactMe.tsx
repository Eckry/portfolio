import { useEffect, useMemo, useRef, useState } from "react";
import { email } from "../consts.d";
import { IconCheck, IconCopy, IconExternalLink } from "../icons";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import "./styles/ContactMe.css";

export default function ContactMe() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const [init, setInit] = useState(false);

  const options = useMemo(
    () => ({
      preset: "stars",
      background: { color: "transparent" },
      fullScreen: { enable: false },
      particles: {
        number: { value: 30 },
        size: { value: 1 },
        color: { value: "#facc15" },
      },
    }),
    []
  );

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

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section className="contact-container">
      <header className="title-header">
        <h1 id="contact" className="section-title">
          <span className="title-number">03.</span> Contact me!
        </h1>
        <span className="title-line"></span>
      </header>
      <div className="contact-buttons">
        <div className="relative">
          {init && <Particles id="tsparticles2" options={options} />}
          <p className="contact-email">{email}</p>
        </div>
        <button onClick={copyEmail}>
          <IconCopy />
          {copied && <IconCheck />}
        </button>
        <button onClick={sendEmail}>
          <IconExternalLink />
        </button>
      </div>
      <p className="contact-p">
        I will get back to you{" "}
        <span className="text-highlight">as soon as possible</span>
      </p>
    </section>
  );
}
