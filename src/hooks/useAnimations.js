import { useEffect } from 'react';

/**
 * Custom hook to initialize and manage the 10x developer animations
 * This includes cursor effects, scroll animations, and code highlighting
 */
export const useAnimations = () => {
  useEffect(() => {
    // Store references to event handlers so they can be removed properly
    let mouseMoveHandler = null;
    let scrollHandler = null;
    let resizeHandler = null;

    // Initialize animations
    initCustomCursor();
    initScrollAnimations();
    initMatrixEffect();
    
    return () => {
      // Clean up event listeners when component unmounts
      if (mouseMoveHandler) {
        window.removeEventListener('mousemove', mouseMoveHandler);
      }
      
      if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler);
      }
      
      if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
      }
      
      // Clean up any canvas elements created
      const matrixCanvas = document.querySelector('canvas[data-type="matrix"]');
      if (matrixCanvas && matrixCanvas.parentNode) {
        matrixCanvas.parentNode.removeChild(matrixCanvas);
      }
    };
    
    // Custom cursor effect
    function initCustomCursor() {
      const cursor = document.querySelector('.cursor');
      if (!cursor) return;
      
      // Function to update cursor position with slight lag for smoother movement
      const updateCursor = (e) => {
        // Add delay for smooth following
        requestAnimationFrame(() => {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        });
        
        // Check if we're hovering over a clickable element to scale the cursor
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
      
      // Store reference to the handler for cleanup
      mouseMoveHandler = updateCursor;
      
      // Add mousemove event listener to track cursor
      window.addEventListener('mousemove', mouseMoveHandler);
    }
    
    // Scroll-based animations for sections
    function initScrollAnimations() {
      const sections = document.querySelectorAll('section');
      
      const handleScroll = () => {
        const scrollY = window.scrollY;
        
        // Add visible class to sections that are in the viewport
        sections.forEach(section => {
          if (!section) return;
          
          const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
          const sectionHeight = section.offsetHeight;
          const windowHeight = window.innerHeight;
          
          // If the section is in view (with some offset)
          if (scrollY > sectionTop - windowHeight + sectionHeight * 0.3) {
            section.classList.add('visible');
            
            // Add staggered animation to children elements
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
        
        // Update progress bar in navbar if it exists
        const progressBar = document.querySelector('.progressBar');
        if (progressBar) {
          const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
          progressBar.style.width = `${Math.min(100, scrollPercent)}%`;
        }
      };
      
      // Store reference to the handler for cleanup
      scrollHandler = handleScroll;
      
      // Initial check on page load
      handleScroll();
      
      // Add scroll event listener
      window.addEventListener('scroll', scrollHandler);
    }
    
    // Matrix-like raining code effect
    function initMatrixEffect() {
      // Only add this effect on desktop
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
      
      // Matrix characters
      const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモ+-*/{}[]()<>";
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);
      
      // Use an array to track y-position of characters
      const drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -200); // Start above canvas
      }
      
      // Draw the matrix effect
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
      
      // Store reference to the handler for cleanup
      resizeHandler = handleResize;
      
      window.addEventListener('resize', resizeHandler);
      
      // Start the animation
      drawMatrix();
    }
  }, []);
};

export default useAnimations;