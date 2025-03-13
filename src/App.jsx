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
    
    // skip intro uncomment
    // const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    // if (isLocalhost) {
    //   setShowIntro(false);
    //   setAppLoaded(true);
    //   return;
    // }
    
    if (hasVisited) {
      setShowIntro(false);
      setAppLoaded(true);
    } else {
      setShowIntro(true);
    }
  }, []);
  
  const handleIntroComplete = () => {
    sessionStorage.setItem('hasVisited', 'true');
    
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