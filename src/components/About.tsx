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
            Officia non veniam amet nulla enim labore nulla ex occaecat cillum.
            Consequat amet enim commodo deserunt exercitation est labore
            commodo. In est ad quis dolor proident dolor consequat aliquip. Qui
            irure eu ut elit id duis aliquip dolore ea. Aliquip sunt dolor enim
            ut occaecat ex magna incididunt dolor. Irure reprehenderit in anim
            officia deserunt pariatur ipsum dolore adipisicing pariatur
            exercitation cillum. Voluptate pariatur pariatur nisi eiusmod irure
            sunt quis aliqua fugiat enim.
          </p>
        </div>
        <div className="grid-section">
          <h2 className="about-title"><IconGame />My hobbies</h2>
          <p className="about-p">
            Ipsum exercitation consectetur veniam minim nisi qui adipisicing
            amet duis. Voluptate laborum irure incididunt tempor laboris
            incididunt irure mollit dolor consequat voluptate esse irure
            officia. Laboris proident ea veniam aliqua ex ea.
          </p>
        </div>
        <div className="grid-section">
          <h2 className="about-title"><IconHouse />Location</h2>
          <p className="about-p">
            Ipsum exercitation consectetur veniam minim nisi qui adipisicing
            amet duis. Voluptate laborum irure incididunt tempor laboris
            incididunt irure mollit dolor consequat voluptate esse irure
            officia. Laboris proident ea veniam aliqua ex ea.
          </p>
        </div>
        <div className="grid-section">
          <h2 className="about-title"><IconSchool />Education</h2>
          <p className="about-p">
            Ipsum exercitation consectetur veniam minim nisi qui adipisicing
            amet duis. Voluptate laborum irure incididunt tempor laboris
            incididunt irure mollit dolor consequat voluptate esse irure
            officia. Laboris proident ea veniam aliqua ex ea.
          </p>
        </div>
      </div>
    </section>
  );
}
