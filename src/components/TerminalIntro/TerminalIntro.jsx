import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './TerminalIntro.css';

const TerminalIntro = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [userInput, setUserInput] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showPrompt, setShowPrompt] = useState(false);
  const [matrixChars, setMatrixChars] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [terminalBooted, setTerminalBooted] = useState(false);
  const [inputLocked, setInputLocked] = useState(true);
  const [terminalTheme, setTerminalTheme] = useState('matrix'); // 'matrix', 'blue', 'amber'
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  
  // Custom ASCII art for desktop
  const nameAscii = [
    "     ____.  _____  _________  ____  **.  **_____  ___________.___.____       _____    _______   ",
    "    |    | /  *  \\ \\*   ___ \\|    |/ *|  \\      \\ \\*   _____/|   |    |     /  _  \\   \\      \\  ",
    "    |    |/  /_\\  \\/    \\  \\/|      <    /   |   \\ |    __)_ |   |    |    /  /_\\  \\  /   |   \\ ",
    "/\\__|    /    |    \\     \\___|    |  \\  /    |    \\|        \\|   |    |___/    |    \\/    |    \\",
    "\\________\\____|__  /\\______  /____|__ \\ \\____|__  /_______  /|___|_______ \\____|__  /\\____|__  /",
    "                 \\/        \\/        \\/         \\/        \\/             \\/       \\/         \\/",
  ];

  // Smaller ASCII art for mobile
  const mobileAscii = [
    "     ____.  _____  _________  ____  __.",
    "     |    | /  _  \\ \\_   ___ \\|    |/ _|",
    "     |    |/  /_\\  \\/    \\  \\/|      <  ",
    "/\\__|    /    |    \\     \\___|    |  \\ ",
    "\\________\\____|__  /\\______  /____|__ \\",
    "                 \\/        \\/        \\/",
  ];
  
  // Matrix colors
  const themeColors = {
    matrix: { primary: '#00ff00', secondary: '#00aa00', bg: 'rgba(0, 10, 0, 0.95)' },
    blue: { primary: '#00ccff', secondary: '#0077cc', bg: 'rgba(0, 10, 30, 0.95)' },
    amber: { primary: '#ffaa00', secondary: '#cc7700', bg: 'rgba(30, 10, 0, 0.95)' },
  };
  
  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Matrix raining effect
  useEffect(() => {
    const initMatrix = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const chars = [];
      
      const numChars = isMobile ? 50 : 150;
      
      for (let i = 0; i < numChars; i++) {
        chars.push({
          x: Math.random() * width,
          y: Math.random() * height * -1, // Start above the screen
          speed: 1 + Math.random() * 3,
          char: getRandomMatrixChar(),
          opacity: 0.1 + Math.random() * 0.7,
          size: 10 + Math.random() * 16
        });
      }
      
      setMatrixChars(chars);
    };
    
    initMatrix();
    
    const matrixInterval = setInterval(() => {
      setMatrixChars(prev => prev.map(char => {
        const newY = char.y + char.speed;
        if (newY > window.innerHeight) {
          return {
            ...char,
            y: Math.random() * -100,
            x: Math.random() * window.innerWidth,
            char: getRandomMatrixChar(),
            speed: 1 + Math.random() * 3
          };
        }
        return { ...char, y: newY };
      }));
    }, 50);
    
    return () => clearInterval(matrixInterval);
  }, [isMobile]);
  
  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines, currentLine, userInput]);
  
  // Focus the hidden input field when terminal is clicked
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current && !inputLocked) {
        inputRef.current.focus();
      }
    };
    
    if (terminalBooted) {
      document.addEventListener('click', handleClick);
    }
    
    return () => document.removeEventListener('click', handleClick);
  }, [terminalBooted, inputLocked]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  const getRandomMatrixChar = () => {
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  const addLine = (text) => {
    setLines(prev => [...prev, text]);
  };

  const typeText = async (text, speed = 20) => { // Faster typing
    setInputLocked(true);
    return new Promise(resolve => {
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
            resolve();
          }, 100); // Much shorter delay
        }
      }, speed);
    });
  };

  const showAsciiArt = async () => {
    const asciiArt = isMobile ? mobileAscii : nameAscii;
    setLines(prev => [...prev, ...asciiArt]);
    return new Promise(resolve => setTimeout(resolve, 500)); // Shorter delay
  };

  // Get current theme colors
  const getThemeColor = (type) => {
    return themeColors[terminalTheme][type];
  };

  // Change terminal theme
  const changeTheme = (newTheme) => {
    if (themeColors[newTheme]) {
      setTerminalTheme(newTheme);
      
      // Apply theme colors to CSS variables
      document.documentElement.style.setProperty('--terminal-primary', themeColors[newTheme].primary);
      document.documentElement.style.setProperty('--terminal-secondary', themeColors[newTheme].secondary);
      document.documentElement.style.setProperty('--terminal-bg', themeColors[newTheme].bg);
      
      addLine(`Terminal theme changed to: ${newTheme}`);
    } else {
      addLine(`Theme not found. Available themes: matrix, blue, amber`);
    }
  };

  const handleCommand = async (cmd) => {
    const command = cmd.trim().toLowerCase();
    
    if (!command) return;
    
    // Add command to history
    const fullPrompt = 'jack@developer:~$ ' + command;
    addLine(fullPrompt);
    setCommandHistory(prev => [command, ...prev]);
    setHistoryIndex(-1);
    
    // Process commands
    switch (command) {
      case 'help':
        addLine('Available commands:');
        addLine('  help         - Display available commands');
        addLine('  about        - View information about Jack Neilan');
        addLine('  skills       - List technical skills');
        addLine('  projects     - Browse portfolio projects');
        addLine('  game         - Play "The Matrix: Red Pill Collector"');
        addLine('  portfolio    - View the full portfolio');
        addLine('  theme [name] - Change terminal theme (matrix/blue/amber)');
        addLine('  matrix       - Toggle matrix animation');
        addLine('  ascii        - Show ASCII art');
        addLine('  date         - Display current date and time');
        addLine('  whoami       - Display user information');
        addLine('  ls           - List virtual directory contents');
        addLine('  clear        - Clear the terminal screen');
        addLine('  exit         - Exit this terminal');
        break;
        
      case 'about':
        addLine('Jack Neilan');
        addLine('----------');
        addLine('Computer Science Student at UCD');
        addLine('Looking for Work in FinTech');
        addLine('Graduating in 2025');
        addLine('');
        addLine('Type "portfolio" to view the full site');
        break;
        
      case 'skills':
        addLine('Technical Skills:');
        addLine('- Java, C++, Python');
        addLine('- HTML, CSS, React, Angular');
        addLine('- Node.js, Spring Boot');
        addLine('- Machine Learning, Trading Algorithms');
        break;
        
      case 'projects':
        addLine('Recent Projects:');
        addLine('1. Trading Bot - Python-based machine learning for price prediction');
        addLine('2. Quest Game - Java-based game with OOP principles');
        addLine('3. Ecommerce Store - Full-stack web application');
        addLine('4. Messaging Service - Real-time chat with video capabilities');
        addLine('');
        addLine('Type "portfolio" to see more details');
        break;
        
      case 'game':
        addLine('Starting The Matrix: Red Pill Collector...');
        await new Promise(resolve => setTimeout(resolve, 500)); // Shorter delay
        navigate('/game');
        break;
        
      case 'portfolio':
        addLine('Loading portfolio...');
        await new Promise(resolve => setTimeout(resolve, 400)); // Shorter delay
        onComplete();
        break;
      
      case 'ascii':
        await showAsciiArt();
        break;
      
      case 'date':
        const now = new Date();
        addLine(`Current date: ${now.toLocaleDateString()}`);
        addLine(`Current time: ${now.toLocaleTimeString()}`);
        break;
      
      case 'whoami':
        addLine('jack@developer');
        addLine('Current role: Computer Science Student');
        addLine('Location: UCD');
        addLine('OS: FinTech.js 2025');
        break;
      
      case 'ls':
        addLine('Directory of /home/jack:');
        addLine('');
        addLine('drwxr-xr-x  about/');
        addLine('drwxr-xr-x  projects/');
        addLine('drwxr-xr-x  skills/');
        addLine('drwxr-xr-x  game/');
        addLine('-rw-r--r--  portfolio.js');
        addLine('-rw-r--r--  README.md');
        break;
        
      case 'matrix':
        // Toggle matrix effect
        const matrixEl = document.querySelector('.matrix-effect');
        if (matrixEl) {
          const isVisible = matrixEl.style.opacity !== '0';
          matrixEl.style.opacity = isVisible ? '0' : '0.5';
          addLine(`Matrix effect: ${isVisible ? 'disabled' : 'enabled'}`);
        }
        break;
        
      case 'clear':
        setLines([]);
        break;
        
      case 'exit':
        addLine('Exiting terminal...');
        await new Promise(resolve => setTimeout(resolve, 400)); // Shorter delay
        onComplete();
        break;
        
      default:
        // Check for theme command
        if (command.startsWith('theme ')) {
          const themeName = command.split(' ')[1];
          changeTheme(themeName);
        } else {
          addLine(`Command not found: ${command}`);
          addLine('Type "help" to see available commands');
        }
    }
  };

  const handleKeyDown = (e) => {
    if (inputLocked) return;
    
    if (e.key === 'Enter') {
      handleCommand(userInput);
      setUserInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setUserInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setUserInput(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setUserInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      
      const commands = [
        'help', 'about', 'skills', 'projects', 'game', 'portfolio', 
        'theme', 'matrix', 'ascii', 'date', 'whoami', 'ls', 'clear', 'exit'
      ];
      
      const matching = commands.filter(cmd => cmd.startsWith(userInput.toLowerCase()));
      
      if (matching.length === 1) {
        setUserInput(matching[0]);
      } else if (matching.length > 1) {
        addLine('jack@developer:~$ ' + userInput);
        addLine('Possible completions: ' + matching.join(' '));
      }
    }
  };

  // Apply initial theme
  useEffect(() => {
    // Set initial theme colors as CSS variables
    document.documentElement.style.setProperty('--terminal-primary', themeColors.matrix.primary);
    document.documentElement.style.setProperty('--terminal-secondary', themeColors.matrix.secondary);
    document.documentElement.style.setProperty('--terminal-bg', themeColors.matrix.bg);
  }, []);

  // SIMPLIFIED BOOT SEQUENCE
  useEffect(() => {
    const quickBootSequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
      await typeText('$ node portfolio.js');
      await typeText('Welcome to my portfolio!');
      await typeText('Type "help" to see available commands or "portfolio" to skip');
      
      setTerminalBooted(true);
      setShowPrompt(true);
      setInputLocked(false);
      
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    
    quickBootSequence();

    // Auto-complete timeout (shorter - 30 seconds)
    const autoCompleteTimer = setTimeout(() => {
      if (showPrompt) {
        onComplete();
      }
    }, 30000); // 30 seconds auto-timeout
    
    return () => clearTimeout(autoCompleteTimer);
  }, [onComplete]);

  // Terminal theme styles
  const themeStyle = {
    container: {
      "--primary-color": getThemeColor('primary'),
      "--secondary-color": getThemeColor('secondary'),
      "--bg-color": getThemeColor('bg'),
    }
  };

  return (
    <div className="terminal-container" onClick={() => inputRef.current?.focus()} style={themeStyle.container}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="button close" onClick={onComplete}></div>
          <div className="button minimize"></div>
          <div className="button maximize"></div>
        </div>
        <div className="terminal-title">jack@developer:~</div>
      </div>
      <div className="terminal-body" ref={terminalRef}>
        <div className="matrix-effect">
          {matrixChars.map((char, index) => (
            <div 
              key={index}
              className="matrix-char"
              style={{
                left: `${char.x}px`,
                top: `${char.y}px`,
                opacity: char.opacity,
                fontSize: `${char.size}px`,
                color: getThemeColor('primary'),
                textShadow: `0 0 8px ${getThemeColor('primary')}`
              }}
            >
              {char.char}
            </div>
          ))}
        </div>
        
        {lines.map((line, index) => (
          <div 
            key={index} 
            className={`terminal-line ${line.includes('jack@developer') ? 'command-line' : ''} ${
              (isMobile && lines.indexOf(line) >= lines.length - mobileAscii.length - 1 && 
               lines.indexOf(line) < lines.length - 1 && mobileAscii.includes(line)) ||
              (!isMobile && lines.indexOf(line) >= lines.length - nameAscii.length - 1 && 
               lines.indexOf(line) < lines.length - 1 && nameAscii.includes(line))
                ? 'ascii-art' : ''
            }`}
          >
            {line}
          </div>
        ))}
        
        <div className="terminal-line current-line">
          {currentLine}
          {!currentLine && showPrompt && (
            <>
              <span className="prompt-text">jack@developer:~$ </span>
              <span className="user-input">{userInput}</span>
              <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}></span>
            </>
          )}
          {currentLine && <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}></span>}
        </div>
      </div>
      
      <input
        ref={inputRef}
        type="text"
        className="hidden-input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        aria-label="Terminal input"
      />
      
      <div className="terminal-footer">
        <div className="theme-buttons">
          <button 
            className="theme-btn matrix-theme" 
            onClick={() => changeTheme('matrix')}
            aria-label="Matrix theme"
          ></button>
          <button 
            className="theme-btn blue-theme" 
            onClick={() => changeTheme('blue')}
            aria-label="Blue theme"
          ></button>
          <button 
            className="theme-btn amber-theme" 
            onClick={() => changeTheme('amber')}
            aria-label="Amber theme"
          ></button>
        </div>
        <button className="skip-button" onClick={onComplete}>Skip Intro</button>
      </div>
    </div>
  );
};

export default TerminalIntro;