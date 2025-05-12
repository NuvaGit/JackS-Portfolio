import { useEffect } from 'react';

export const useAnimations = () => {
  useEffect(() => {
    let mouseMoveHandler = null;
    let scrollHandler = null;
    let resizeHandler = null;

    initCustomCursor();
    initScrollAnimations();
    initMatrixEffect();
    
    return () => {
      if (mouseMoveHandler) {
        window.removeEventListener('mousemove', mouseMoveHandler);
      }
      
      if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler);
      }
      
      if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
      }
      
      const matrixCanvas = document.querySelector('canvas[data-type="matrix"]');
      if (matrixCanvas && matrixCanvas.parentNode) {
        matrixCanvas.parentNode.removeChild(matrixCanvas);
      }
    };
    
    function initCustomCursor() {
      const cursor = document.querySelector('.cursor');
      if (!cursor) return;
      
      const updateCursor = (e) => {
        // Add delay for smooth following
        requestAnimationFrame(() => {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        });
        
        const target = e.target;
        const isLinkOrButton = 
          target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') || 
          target.closest('button');
        
        if (isLinkOrButton) {
          cursor.style.transform = 'scale(1.5)';
          cursor.style.mixBlendMode = 'normal';
          cursor.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
        } else {
          cursor.style.transform = 'scale(1)';
          cursor.style.mixBlendMode = 'difference';
          cursor.style.backgroundColor = 'transparent';
        }
      };
      
      mouseMoveHandler = updateCursor;
      
      window.addEventListener('mousemove', mouseMoveHandler);
    }
    
    function initScrollAnimations() {
      const sections = document.querySelectorAll('section');
      
      const handleScroll = () => {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
          if (!section) return;
          
          const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
          const sectionHeight = section.offsetHeight;
          const windowHeight = window.innerHeight;
          
          if (scrollY > sectionTop - windowHeight + sectionHeight * 0.3) {
            section.classList.add('visible');
            
            const animateChildren = Array.from(
              section.querySelectorAll('.animate-on-scroll')
            );
            
            animateChildren.forEach((child, index) => {
              setTimeout(() => {
                if (child) child.classList.add('visible');
              }, 150 * index);
            });
          }
        });
        
        const progressBar = document.querySelector('.progressBar');
        if (progressBar) {
          const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
          progressBar.style.width = `${Math.min(100, scrollPercent)}%`;
        }
      };
      
      scrollHandler = handleScroll;
      
      handleScroll();
      
      window.addEventListener('scroll', scrollHandler);
    }
    
    function initMatrixEffect() {
      if (window.innerWidth < 1024) return;
      
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.zIndex = '-1';
      canvas.style.opacity = '0.05';
      canvas.style.pointerEvents = 'none';
      canvas.dataset.type = 'matrix'; // Add a data attribute for easier selection
      document.body.appendChild(canvas);
      
      const ctx = canvas.getContext('2d');
      
      const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモ+-*/{}[]()<>";
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);
      
      const drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -200); // Start above canvas
      }
      
      const drawMatrix = () => {
        if (!ctx) return;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0f0';
        ctx.font = `${fontSize}px monospace`;
        
        for (let i = 0; i < drops.length; i++) {
          // Get random character
          const text = characters.charAt(Math.floor(Math.random() * characters.length));
          
          // Draw the character
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          
          // Move the drop down
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
            drops[i] = Math.floor(Math.random() * -50); // Reset to top
          }
          
          drops[i]++;
        }
        
        requestAnimationFrame(drawMatrix);
      };
      
      // Resize handler
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Recalculate columns
        const newColumns = Math.floor(canvas.width / fontSize);
        // Adjust drops array
        if (newColumns > drops.length) {
          for (let i = drops.length; i < newColumns; i++) {
            drops.push(Math.floor(Math.random() * -100));
          }
        } else if (newColumns < drops.length) {
          drops.splice(newColumns);
        }
      };
      
      resizeHandler = handleResize;
      
      window.addEventListener('resize', resizeHandler);
      
      drawMatrix();
    }
  }, []);
};

export default useAnimations;
