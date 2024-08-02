import "./App.css";
import About from "./components/About";
import Presentation from "./components/Presentation";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <main className="main-container">
      <Presentation />
      <ProjectsSection />
      <SkillsSection />
      <About />
    </main>
  );
}

export default App;
