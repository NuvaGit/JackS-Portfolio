import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Game } from "./components/Game/Game";
import TerminalIntro from "./components/TerminalIntro/TerminalIntro";
import { ThreejsBackground } from "./components/ThreejsBackground/ThreejsBackground";

// Create a theme context for dark/light mode and terminal themes
export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
  terminalTheme: 'matrix',
  setTerminalTheme: () => {}
});

const TERMINAL_THEMES = ['matrix', 'blue', 'amber'];

function App() {
  const [showIntro, setShowIntro] = useState(true); // Show intro by default
  const [appLoaded, setAppLoaded] = useState(false); // Start with app unloaded
  const [darkMode, setDarkMode] = useState(false);
  const [pageTransition, setPageTransition] = useState(false);
  const [terminalTheme, setTerminalTheme] = useState(() => {
    // Load theme from localStorage if available
    return localStorage.getItem('terminalTheme') || 'matrix';
  });
  
  // Theme toggler function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Apply dark theme class to root element
    if (!darkMode) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  };
  
  // Update terminal theme and apply to entire site
  const updateTerminalTheme = (newTheme) => {
    if (TERMINAL_THEMES.includes(newTheme)) {
      setTerminalTheme(newTheme);
      localStorage.setItem('terminalTheme', newTheme);
      applyThemeToSite(newTheme);
    }
  };
  
  // Apply theme colors to the entire site
  const applyThemeToSite = (theme) => {
    const themeColors = {
      matrix: { primary: '#00ff00', secondary: '#00aa00', bg: 'rgba(0, 10, 0, 0.95)' },
      blue: { primary: '#00ccff', secondary: '#0077cc', bg: 'rgba(0, 10, 30, 0.95)' },
      amber: { primary: '#ffaa00', secondary: '#cc7700', bg: 'rgba(30, 10, 0, 0.95)' },
    };
    
    const colors = themeColors[theme];
    document.documentElement.style.setProperty('--color-primary', colors.primary);
    document.documentElement.style.setProperty('--color-secondary', colors.secondary);
    document.documentElement.style.setProperty('--terminal-primary', colors.primary);
    document.documentElement.style.setProperty('--terminal-secondary', colors.secondary);
    document.documentElement.style.setProperty('--terminal-bg', colors.bg);
  };
  
  // Apply theme on mount
  useEffect(() => {
    applyThemeToSite(terminalTheme);
  }, [terminalTheme]);
  
  // Initialize animations
  useEffect(() => {
    // Add animations when needed
    const initCustomCursor = () => {
      const cursor = document.querySelector(`.${styles.cursor}`);
      if (!cursor) return;
      
      const handleMouseMove = (e) => {
        requestAnimationFrame(() => {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    };
    
    if (appLoaded && !showIntro) {
      const cleanupFn = initCustomCursor();
      return () => {
        if (cleanupFn) cleanupFn();
      };
    }
  }, [appLoaded, showIntro]);
  
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    // For development, uncomment to skip intro
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
    
    // Add event listener for keydown to skip intro with Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showIntro) {
        handleIntroComplete();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
    
  const handleIntroComplete = () => {
    // Mark as visited in session storage
    sessionStorage.setItem('hasVisited', 'true');
    
    // Transition animation
    setPageTransition(true);
    
    // Fade out intro and show main app
    setAppLoaded(true);
    setTimeout(() => {
      setShowIntro(false);
      setTimeout(() => {
        setPageTransition(false);
      }, 500);
    }, 1000);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, terminalTheme, setTerminalTheme: updateTerminalTheme }}>
      <Router>
        <div className={`${styles.appWrapper} ${darkMode ? styles.darkMode : ''}`}>
          {showIntro && <TerminalIntro onComplete={handleIntroComplete} />}
          
          <ThreejsBackground />
          
          <div className={`${styles.pageTransition} ${pageTransition ? styles.pageTransitionActive : ''}`}></div>
          
          <div className={`${styles.App} ${appLoaded ? styles.appLoaded : styles.appHidden}`}>
            <div className={styles.backgroundEffects}>
              <div className={styles.grid}></div>
              <div className={styles.topBlur}></div>
              <div className={styles.bottomBlur}></div>
            </div>
            
            <Navbar />
            
            <Routes>
              <Route path="/" element={
                <div className={styles.homeContent}>
                  <Hero />
                  <About />
                  <Experience />
                  <Projects />
                  <Contact />
                </div>
              } />
              <Route path="/game" element={<Game />} /> 
            </Routes>
            
            <div className={styles.cursor}></div>
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;