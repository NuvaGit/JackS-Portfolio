import React, { useEffect, useRef, useState } from 'react';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current || !isHovered) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePos({ x, y });
      
      // Apply perspective effect
      const xRotation = (y - rect.height / 2) / 10;
      const yRotation = -(x - rect.width / 2) / 10;
      
      cardRef.current.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.05)`;
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }
  };

  return (
    <div
      ref={cardRef}
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transitionDuration: isHovered ? '0ms' : '300ms'
      }}
    >
      <div
        className={styles.glow}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          opacity: isHovered ? 0.5 : 0
        }}
      />
      
      <div className={styles.content}>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>
        
        <div className={styles.tags}>
          {project.tech && project.tech.map((tech, i) => (
            <span key={i} className={styles.tag}>{tech}</span>
          ))}
        </div>
        
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            View Project →
          </a>
        )}
      </div>
      
      <div className={styles.border} />
    </div>
  );
};
