import { useEffect, useMemo, useState } from "react";
import { email } from "../consts.d";
import { IconCopy, IconExternalLink } from "../icons";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import "./styles/ContactMe.css";

export default function ContactMe() {
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
    navigator.clipboard.writeText(email);
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
        <div className="flex">
          <button onClick={copyEmail}>
            <IconCopy />
          </button>
          <button onClick={sendEmail}>
            <IconExternalLink />
          </button>
        </div>
      </div>
      <p className="contact-p">
        I will get back to you{" "}
        <span className="text-highlight">as soon as possible</span>
      </p>
    </section>
  );
}
