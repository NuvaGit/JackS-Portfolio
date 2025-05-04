import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { ThemeContext } from "../../App";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [timeDisplay, setTimeDisplay] = useState("");
  const location = useLocation();
  
  // Get theme context
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  // Handle sticky navbar and section highlighting on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Make navbar sticky after scrolling 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update progress bar
      const progressBar = document.querySelector(`.${styles.progressBar}`);
      if (progressBar) {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${Math.min(100, scrollPercent)}%`;
      }
      
      // Detect active section for menu highlighting
      const sections = ["about", "experience", "projects", "contact"];
      
      // Find the section closest to the top of the viewport
      let currentSection = "home";
      let minDistance = Infinity;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Update time display
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setTimeDisplay(`${hours}:${minutes}:${seconds}`);
    };
    
    // Update immediately, then every second
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Helper function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the navbar height for offset
      const navbarHeight = document.querySelector(`.${styles.navbar}`)?.offsetHeight || 0;
      
      // Calculate the position to scroll to
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight - 20;
      
      // Perform the smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false); // Close menu after clicking
  };
  
  // Helper to determine if a section is active
  const isActive = (section) => {
    return activeSection === section ? styles.active : '';
  };
  
  // Render terminal icon if on homepage, otherwise render normal links
  const isHomePage = location.pathname === '/';

  // Direct theme toggle handler
  const handleThemeToggle = (e) => {
    e.preventDefault();
    toggleDarkMode();
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContent}>
        <Link className={styles.title} to="/">
          <span className={styles.codeIcon}>&lt;/&gt;</span>
          <span className={styles.titleText}>Jack.dev</span>
          <span className={styles.blinkingCursor}>_</span>
        </Link>
        
        <div className={styles.navInfo}>
          <div className={styles.timeDisplay}>{timeDisplay}</div>
          <div className={styles.statusIndicator}>
            <span className={styles.statusDot}></span>
            <span>Online</span>
          </div>
        </div>
        
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
          >
            {isHomePage ? (
              <>
                <li className={isActive('about')}>
                  <a 
                    href="#about" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("about");
                    }}
                  >
                    <span className={styles.codeWrapper}>&lt;</span>About<span className={styles.codeWrapper}>/&gt;</span>
                  </a>
                </li>
                <li className={isActive('experience')}>
                  <a 
                    href="#experience" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("experience");
                    }}
                  >
                    <span className={styles.codeWrapper}>&lt;</span>Experience<span className={styles.codeWrapper}>/&gt;</span>
                  </a>
                </li>
                <li className={isActive('projects')}>
                  <a 
                    href="#projects" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("projects");
                    }}
                  >
                    <span className={styles.codeWrapper}>&lt;</span>Projects<span className={styles.codeWrapper}>/&gt;</span>
                  </a>
                </li>
                <li className={isActive('contact')}>
                  <a 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                    }}
                  >
                    <span className={styles.codeWrapper}>&lt;</span>Contact<span className={styles.codeWrapper}>/&gt;</span>
                  </a>
                </li>
              </>
            ) : (
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <span className={styles.codeWrapper}>&lt;</span>Home<span className={styles.codeWrapper}>/&gt;</span>
                </Link>
              </li>
            )}
            <li className={location.pathname === '/game' ? styles.active : ''}>
              <Link to="/game" onClick={() => setMenuOpen(false)} className={styles.gameLink}>
                [Game]
              </Link>
            </li>
            <li>
              <button 
                onClick={handleThemeToggle}
                className={styles.themeSwitcher}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                <span className={styles.switchIcon}>{darkMode ? '☀️' : '🌙'}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Progress bar that shows scroll position */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}></div>
      </div>
    </nav>
  );
};