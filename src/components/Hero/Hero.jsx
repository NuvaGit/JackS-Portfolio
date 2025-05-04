import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  // Array of tech roles/descriptions to cycle through
  const techRoles = [
    "University student set to graduate in 2025",
    "Full Stack Developer", 
    "Blockchain Enthusiast",
    "ML & AI Explorer",
    "looking for work in the FinTech space"
  ];
  
  // Handle the typing animation effect
  useEffect(() => {
    const currentRole = techRoles[roleIndex];
    
    // Set typing speed based on action
    const normalSpeed = 100;
    const deleteSpeed = 50;
    
    if (isDeleting) {
      setTypingSpeed(deleteSpeed);
    } else {
      setTypingSpeed(normalSpeed);
    }
    
    let timeout;
    
    // If we're not deleting and haven't completed the current text
    if (!isDeleting && typedText !== currentRole) {
      timeout = setTimeout(() => {
        setTypedText(currentRole.substring(0, typedText.length + 1));
      }, typingSpeed);
    } 
    // If we've completed typing and should pause before deleting
    else if (!isDeleting && typedText === currentRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } 
    // If we're deleting but haven't deleted everything
    else if (isDeleting && typedText !== "") {
      timeout = setTimeout(() => {
        setTypedText(currentRole.substring(0, typedText.length - 1));
      }, typingSpeed);
    } 
    // If we've deleted everything, move to next role
    else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % techRoles.length);
    }
    
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex, techRoles]);
  
  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Matrix-like particles
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    // Matrix particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(0, ${Math.random() * 155 + 100}, 0, ${Math.random() * 0.2 + 0.1})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const particleArray = [];
    const numberOfParticles = Math.min(window.innerWidth * 0.05, 100);
    
    for (let i = 0; i < numberOfParticles; i++) {
      particleArray.push(new Particle());
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.container}>
      <canvas id="matrix-canvas" className={styles.matrixCanvas}></canvas>
      
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Jack Neilan</h1>
          <div className={styles.codeTags}>
            <span className={styles.codeTag}>&lt;code&gt;</span>
            <span className={styles.codeTag}>/&gt;</span>
          </div>
        </div>
        
        <div className={styles.typewriterContainer}>
          <p className={styles.description}>
            I'm a{" "}
            <span className={styles.typed}>
              {typedText}
              <span 
                className={`${styles.cursor} ${cursorVisible ? styles.visible : styles.hidden}`}
              >
                |
              </span>
            </span>
          </p>
        </div>
        
        <div className={styles.buttonGroup}>
          <a href="mailto:jackneilan02@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href="#projects" className={styles.projectsBtn}>
            View Projects
          </a>
        </div>
        
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Experience</span>
            <span className={styles.statValue}>3+ years</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Projects</span>
            <span className={styles.statValue}>12+</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Technologies</span>
            <span className={styles.statValue}>15+</span>
          </div>
        </div>
      </div>
      
      <div className={styles.imageContainer}>
        <div className={styles.imageFrame}>
          <img
            src={getImageUrl("hero/View recent photos.jpeg")}
            alt="Jack Neilan"
            className={styles.heroImg}
          />
          <div className={styles.imageBorder}></div>
        </div>
        <div className={styles.techTags}>
          <span className={styles.techTag}>Java</span>
          <span className={styles.techTag}>React</span>
          <span className={styles.techTag}>Python</span>
          <span className={styles.techTag}>Spring</span>
        </div>
      </div>
      
      <div className={styles.scanline}></div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};