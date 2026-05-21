import React, { useEffect, useRef } from 'react';
import styles from './AnimatedTechStack.module.css';

export const AnimatedTechStack = ({ technologies }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(`.${styles.item}`);
    
    items.forEach((item, index) => {
      item.style.animation = `orbitFloat 6s ease-in-out infinite`;
      item.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.orbit}>
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={styles.item}
            style={{
              '--index': index,
              '--total': technologies.length
            }}
          >
            <div className={styles.techBubble}>
              <span className={styles.icon}>⚙️</span>
              <span className={styles.name}>{tech}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.center}>
        <div className={styles.pulse} />
      </div>
    </div>
  );
};
