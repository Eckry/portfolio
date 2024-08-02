import "./App.css";
import Presentation from "./components/Presentation";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <main className="main-container">
      <Presentation />
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
}

export default App;
