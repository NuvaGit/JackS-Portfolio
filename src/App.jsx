import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Game } from "./components/Game/Game"; // Import your Game component

function App() {
  return (
    <Router basename="/JackS-Portfolio">
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </>} />
          <Route path="/game" element={<Game />} /> {/* Game route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
