import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
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
      <ContactMe />
    </main>
  );
}

export default App;
