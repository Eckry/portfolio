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
          <p className="about-p">
            I am a 21-year-old passionate{" "}
            <span className="about-highlight">problem solver</span> who has been
            fascinated by puzzles and challenges since childhood. My curiosity
            led me to watch science communicators on YouTube, especially those
            about <span className="about-highlight">physics</span> and{" "}
            <span className="about-highlight">mathematics</span>. This early
            interest led me to pursue a degree in{" "}
            <span className="about-highlight">Physical Engineering</span>,
            driven by a desire to tackle complex physical problems and discover
            the mysteries of the universe.
          </p>
          <br />
          <p className="about-p">
            During my studies, I discovered{" "}
            <span className="about-highlight">programming</span>. Initially, I
            started learning to code on my own without any intention of seeking
            employment. However, as I learned more and more. I realized that my
            skills could lead me to a{" "}
            <span className="about-highlight">fulfilling career</span>, so I
            embarked on a mission to apply my knowledge and secure a job in the
            tech industry.
          </p>
        </div>
        <div className="grid-section">
          <h2 className="about-title">
            <IconGame />
            My hobbies
          </h2>
          <p className="about-p"></p>
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
          <p className="about-p"></p>
        </div>
      </div>
    </section>
  );
}
