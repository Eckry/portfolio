import {
  IconAbout,
  IconController,
  IconGame,
  IconHouse,
  IconMexico,
  IconSchool,
  IconTV,
  IconVS,
} from "../icons";
import "./styles/About.css";
import Timer from "./Timer";

export default function About() {
  return (
    <section className="about-container">
      <header className="title-header">
        <h1 id="about" className="section-title">
          <span className="title-number">02.</span> More about me
        </h1>
        <span className="title-line"></span>
      </header>
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
          <p className="about-p">
            In my free time, I enjoy playing video games, watching anime, and{" "}
            <span className="about-highlight">competitive programming</span>.
            Recently, I have been particularly interested in competitive
            programming, participating in{" "}
            <span className="about-highlight">ICPC</span> competitions and
            aspiring to advance my skills to new heights.
          </p>
          <div className="about-icons">
            <IconVS />
            <IconController />
            <IconTV />
          </div>
        </div>
        <div className="grid-section location">
          <h2 className="about-title">
            <IconHouse />
            Location
          </h2>
          <h3 className="location-h3">
            <IconMexico />
            Mexico
          </h3>
          <span className="h-line"></span>
          <Timer />
        </div>
        <div className="grid-section">
          <h2 className="about-title">
            <IconSchool />
            Education
          </h2>
          <p className="about-p">
            I am a self-taught programmer who began learning to code on
            <span className="about-highlight"> freeCodeCamp.org</span>. There, I
            learned{" "}
            <span className="about-highlight">JavaScript, CSS, and HTML</span>,
            as well as algorithms and data structures. Today, I learn by reading
            documentation for the tools I use and by building projects that are
            useful for me. For now, my objective is to learn{" "}
            <span className="about-highlight">Astro</span>,{" "}
            <span className="about-highlight">React Native</span>,{" "}
            <span className="about-highlight">and Python</span>
          </p>
        </div>
      </div>
    </section>
  );
}
