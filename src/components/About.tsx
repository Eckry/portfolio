import { aboutTexts } from "../consts.d";
import { IconAbout, IconGame, IconHouse, IconSchool } from "../icons";
import "./styles/About.css";

export default function About() {
  return (
    <section className="about-container">
      <h1 id="about" className="section-title">
        More about me
      </h1>
      <div className="bentogrid">
        <div className="grid-section">
          <h2 className="about-title">
            <IconAbout />
            Who am i?
          </h2>
          {aboutTexts.who.split("=").map((text, idx) => {
            if (idx % 2) return <span className="about-highlight">{text}</span>;
            return <p className="about-p">{text}</p>;
          })}
        </div>
        <div className="grid-section">
          <h2 className="about-title">
            <IconGame />
            My hobbies
          </h2>
          <p className="about-p">
            {aboutTexts.hobbies.split("=").map((text, idx) => {
              if (idx % 2)
                return <span className="about-highlight">{text}</span>;
              return <p className="about-p">{text}</p>;
            })}
          </p>
        </div>
        <div className="grid-section">
          <h2 className="about-title">
            <IconHouse />
            Location
          </h2>
          <p className="about-p">
            Ipsum exercitation consectetur veniam minim nisi qui adipisicing
            amet duis. Voluptate laborum irure incididunt tempor laboris
            incididunt irure mollit dolor consequat voluptate esse irure
            officia. Laboris proident ea veniam aliqua ex ea.
          </p>
        </div>
        <div className="grid-section">
          <h2 className="about-title">
            <IconSchool />
            Education
          </h2>
          <p className="about-p">
            {aboutTexts.education.split("=").map((text, idx) => {
              if (idx % 2)
                return <span className="about-highlight">{text}</span>;
              return <p className="about-p">{text}</p>;
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
