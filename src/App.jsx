import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Game } from "./components/Game/Game";
import TerminalIntro from "./components/TerminalIntro/TerminalIntro";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [appLoaded, setAppLoaded] = useState(false);
  
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    // For dev remove 
    // const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    // if (isLocalhost) {
    //   setShowIntro(false);
    //   setAppLoaded(true);
    //   return;
    // }
    
    if (hasVisited) {
      // Skip intro if user has already visited
      setShowIntro(false);
      setAppLoaded(true);
    } else {
      // First visit, show intro
      setShowIntro(true);
    }
  }, []);
  
  const handleIntroComplete = () => {
    // Mark as visited in session storage
    sessionStorage.setItem('hasVisited', 'true');
    
    // Fade out intro and show main app
    setAppLoaded(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 1000);
  };

  return (
    <>
      {showIntro && <TerminalIntro onComplete={handleIntroComplete} />}
      
      <div className={`${styles.App} ${appLoaded ? styles.appLoaded : styles.appHidden}`}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </>} />
            <Route path="/game" element={<Game />} /> 
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;