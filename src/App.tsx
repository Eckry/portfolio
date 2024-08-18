import { useEffect, useMemo, useState } from "react";
import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import HeaderBar from "./components/HeaderBar";
import Presentation from "./components/Presentation";
import ProjectsSection from "./components/ProjectsSection";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";

function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      preset: "stars",
      background: { color: "transparent" },
      fullScreen: { enable: false },
      particles: { number: { value: 30 }, size: { value: 1 } },
    }),
    []
  );

  return (
    <>
      <HeaderBar />
      {init && <Particles id="tsparticles" options={options} />}
      <main className="main-container">
        <Presentation />
        <ProjectsSection />
        <About />
        <ContactMe />
      </main>
    </>
  );
}

export default App;
