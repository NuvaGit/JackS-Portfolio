import React, { useState, useEffect, useRef } from 'react';
import './TerminalIntro.css';

const TerminalIntro = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showMatrix, setShowMatrix] = useState(false);
  const [matrixChars, setMatrixChars] = useState([]);
  const terminalRef = useRef(null);
  
  const nameAscii = [
    "     ____.  _____  _________  ____  **.  **_____  ___________.___.____       _____    _______   ",
    "    |    | /  *  \\ \\*   ___ \\|    |/ *|  \\      \\ \\*   _____/|   |    |     /  _  \\   \\      \\  ",
    "    |    |/  /_\\  \\/    \\  \\/|      <    /   |   \\ |    __)_ |   |    |    /  /_\\  \\  /   |   \\ ",
    "/\\__|    /    |    \\     \\___|    |  \\  /    |    \\|        \\|   |    |___/    |    \\/    |    \\",
    "\\________\\____|__  /\\______  /____|__ \\ \\____|__  /_______  /|___|_______ \\____|__  /\\____|__  /",
    "                 \\/        \\/        \\/         \\/        \\/             \\/       \\/         \\/",
    "                                                                                                 "
  ];

  // Matrix-style character rain effect
  const initMatrix = () => {
    const width = window.innerWidth;
    const cols = Math.floor(width / 20); // Fewer columns for clarity
    const chars = [];
    
    for (let i = 0; i < cols; i++) {
      chars.push({
        x: i,
        y: Math.floor(Math.random() * -20),
        speed: 0.3 + Math.random() * 1, // Slower speed for better readability
        char: getRandomChar()
      });
    }
    
    setMatrixChars(chars);
  };
  
  const getRandomChar = () => {
    const chars = "01@#$%&*!?;:+=^~<>[]{}()_-";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };
  
  const updateMatrix = () => {
    setMatrixChars(prevChars => 
      prevChars.map(char => {
        // Update y position
        const newY = char.y + char.speed;
        
        // Reset if it goes off screen
        if (newY > 40) {
          return {
            ...char,
            y: Math.floor(Math.random() * -20),
            char: getRandomChar(),
            speed: 0.3 + Math.random() * 1
          };
        }
        
        // Randomly change characters
        const newChar = Math.random() > 0.95 ? getRandomChar() : char.char;
        
        return {
          ...char,
          y: newY,
          char: newChar
        };
      })
    );
  };

  // Type text with a terminal-like effect
  const typeText = (text, callback, speed = 30) => {
    let i = 0;
    setCurrentLine('');
    
    const typing = setInterval(() => {
      setCurrentLine(prev => prev + text.charAt(i));
      i++;
      
      if (i >= text.length) {
        clearInterval(typing);
        setTimeout(() => {
          setLines(prev => [...prev, text]);
          setCurrentLine('');
          if (callback) callback();
        }, 300);
      }
    }, speed);
  };

  // Display ASCII art with proper formatting
  const showAsciiArt = (callback) => {
    // Add the ASCII art directly to the lines, no typing animation for art
    setLines(prev => [...prev, ...nameAscii]);
    setTimeout(callback, 1000);
  };

  // Matrix effect timer
  useEffect(() => {
    if (showMatrix) {
      const interval = setInterval(updateMatrix, 150); // Slower update for better performance
      return () => clearInterval(interval);
    }
  }, [showMatrix, matrixChars]);

  // Initialize matrix characters
  useEffect(() => {
    initMatrix();
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines, currentLine]);

  // Run the animation sequence
  useEffect(() => {
    const runAnimation = async () => {
      setShowMatrix(true);
      
      // Wait for matrix effect to run for a moment
      setTimeout(() => {
        // Start terminal sequence
        typeText('$ whoami', () => {
          typeText('jack@kali', () => {
            typeText('$ cd ~/portfolio', () => {
              typeText('$ ls -la', () => {
                typeText('-rw-r--r-- 1 jack users  495 Mar 12 10:38 README.md', () => {
                  typeText('-rw-r--r-- 1 jack users 12853 Mar 12 10:40 portfolio.js', () => {
                    typeText('$ node portfolio.js', () => {
                      showAsciiArt(() => {
                        typeText('Computer Science Student at UCD', () => {
                          typeText('Looking for Work in FinTech', () => {
                            typeText('$ sudo run booting-portfolio...', () => {
                              typeText('Loading assets: [████████████████████] 100%', () => {
                                // Exit prompt after 10 seconds total
                                setTimeout(() => {
                                  typeText('Are you sure you want to exit? [Y/n]', () => {
                                    setTimeout(() => {
                                      setCurrentLine('Y');
                                      setTimeout(() => {
                                        setLines(prev => [...prev, 'Y']);
                                        setCurrentLine('');
                                        setTimeout(() => {
                                          typeText('Exiting terminal...', () => {
                                            // End animation and load portfolio
                                            setTimeout(() => {
                                              onComplete();
                                            }, 500);
                                          });
                                        }, 300);
                                      }, 300);
                                    }, 500);
                                  });
                                }, 1500); // This timing ensures 10 seconds before exit prompt
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      }, 1000);
    };

    // Start the animation after a brief delay
    setTimeout(runAnimation, 500);
    
    // Timer to transition to portfolio after 10 seconds
    setTimeout(() => {
      onComplete();
    }, 10000); // 10 seconds
    
  }, []);

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="button close"></div>
          <div className="button minimize"></div>
          <div className="button maximize"></div>
        </div>
        <div className="terminal-title">C:\WINDOWS\system32\cmd.exe</div>
      </div>
      <div className="terminal-body" ref={terminalRef}>
        {/* Matrix effect layer - reduced opacity for better text visibility */}
        {showMatrix && (
          <div className="matrix-effect">
            {matrixChars.map((char, index) => (
              <div 
                key={index}
                className="matrix-char"
                style={{
                  left: `${char.x * 20}px`,
                  top: `${char.y * 20}px`,
                  opacity: Math.min(0.5, Math.max(0, (20 - char.y) / 40)) // Reduced opacity
                }}
              >
                {char.char}
              </div>
            ))}
          </div>
        )}
        
        {/* Terminal text */}
        {lines.map((line, index) => (
          <div key={index} className={`terminal-line ${index >= 6 && index <= 18 ? 'ascii-art' : ''}`}>
            {line}
          </div>
        ))}
        <div className="terminal-line current-line">
          {currentLine}
          <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>_</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalIntro;