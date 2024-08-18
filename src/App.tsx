import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import HeaderBar from "./components/HeaderBar";
import Presentation from "./components/Presentation";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <>
      <HeaderBar />
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
