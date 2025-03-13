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

  const initMatrix = () => {
    const width = window.innerWidth;
    const cols = Math.floor(width / 20); 
    const chars = [];
    
    for (let i = 0; i < cols; i++) {
      chars.push({
        x: i,
        y: Math.floor(Math.random() * -20),
        speed: 0.3 + Math.random() * 1, // speed
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
        
        if (newY > 40) {
          return {
            ...char,
            y: Math.floor(Math.random() * -20),
            char: getRandomChar(),
            speed: 0.3 + Math.random() * 1
          };
        }
        
        const newChar = Math.random() > 0.95 ? getRandomChar() : char.char;
        
        return {
          ...char,
          y: newY,
          char: newChar
        };
      })
    );
  };

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
        }, 700); 
      }
    }, speed);
  };

  const showAsciiArt = (callback) => {
    setLines(prev => [...prev, ...nameAscii]);
    setTimeout(callback, 2500); 
  };

  useEffect(() => {
    if (showMatrix) {
      const interval = setInterval(updateMatrix, 150);
      return () => clearInterval(interval);
    }
  }, [showMatrix, matrixChars]);

  useEffect(() => {
    initMatrix();
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);



  useEffect(() => {
    const runAnimation = async () => {
      setShowMatrix(true);
      
      setTimeout(() => {
        typeText('$ whoami', () => {
          setTimeout(() => { 
            typeText('jack@kali', () => {
              setTimeout(() => { 
                typeText('$ cd ~/portfolio', () => {
                  setTimeout(() => { 
                    typeText('$ ls -la', () => {
                      setTimeout(() => { 
                        typeText('-rw-r--r-- 1 jack users  495 Mar 12 10:38 README.md', () => {
                          setTimeout(() => { 
                            typeText('-rw-r--r-- 1 jack users 12853 Mar 12 10:40 portfolio.js', () => {
                              setTimeout(() => { 
                                typeText('$ node portfolio.js', () => {
                                  setTimeout(() => { 
                                    showAsciiArt(() => {
                                      typeText('Computer Science Student at UCD', () => {
                                        typeText('Looking for Work in FinTech', () => {
                                          typeText('$ sudo run booting-portfolio...', () => {
                                            typeText('Loading assets: [████████████████████] 100%', () => {
                                              
                                              setTimeout(() => {
                                                typeText('Are you sure you want to exit? [Y/n]', () => {
                                                  setTimeout(() => {
                                                    setCurrentLine('Y');
                                                    setTimeout(() => {
                                                      setLines(prev => [...prev, 'Y']);
                                                      setCurrentLine('');
                                                      setTimeout(() => {
                                                        typeText('Exiting terminal...', () => {
                                                          setTimeout(() => {
                                                            onComplete();
                                                          }, 800);
                                                        });
                                                      }, 500);
                                                    }, 500);
                                                  }, 800);
                                                });
                                              }, 1500);
                                            });
                                          });
                                        });
                                      });
                                    });
                                  }, 800); // Added delay
                                });
                              }, 800); // Added delay
                            });
                          }, 800); // Added delay
                        });
                      }, 800); // Added delay
                    });
                  }, 800); // Added delay
                });
              }, 800); // Added delay
            });
          }, 800); 
        });
      }, 1500); 
    };

    setTimeout(runAnimation, 1000);
    
    setTimeout(() => {
      onComplete();
    }, 20000); 
    
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
                  opacity: Math.min(0.4, Math.max(0, (20 - char.y) / 40)) // Further reduced opacity
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