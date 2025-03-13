import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import styles from "./Game.module.css";

export const Game = () => {
  const scene = useRef(null);
  const engineRef = useRef(null);
  const playerRef = useRef(null);
  const renderRef = useRef(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [matrixRain, setMatrixRain] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [gameSize, setGameSize] = useState({ width: 800, height: 600 });
  const rainIntervalRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 850;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const calculateGameSize = () => {
      if (scene.current) {
        const width = Math.min(800, scene.current.clientWidth);
        const height = width * 0.75; // 4:3 aspect ratio
        setGameSize({ width, height });
        
        if (renderRef.current) {
          Matter.Render.setPixelRatio(renderRef.current, window.devicePixelRatio);
          Matter.Render.setSize(renderRef.current, width, height);
        }
      }
    };
    
    calculateGameSize();
    window.addEventListener('resize', calculateGameSize);
    
    return () => {
      window.removeEventListener('resize', calculateGameSize);
    };
  }, [gameStarted]);

  useEffect(() => {
    const initRain = () => {
      const width = window.innerWidth;
      const chars = [];
      for (let i = 0; i < (isMobile ? 40 : 80); i++) {
        chars.push({
          x: Math.random() * width,
          y: Math.random() * -500,
          speed: 2 + Math.random() * 5,
          char: getRandomMatrixChar(),
          opacity: 0.5 + Math.random() * 0.5
        });
      }
      setMatrixRain(chars);
    };

    const updateRain = () => {
      setMatrixRain(prev => prev.map(char => {
        const newY = char.y + char.speed;
        if (newY > window.innerHeight) {
          return {
            ...char,
            y: Math.random() * -100,
            x: Math.random() * window.innerWidth,
            char: getRandomMatrixChar(),
            speed: 2 + Math.random() * 5
          };
        }
        return { ...char, y: newY };
      }));
    };

    initRain();
    rainIntervalRef.current = setInterval(updateRain, 50);

    return () => {
      if (rainIntervalRef.current) {
        clearInterval(rainIntervalRef.current);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    let timerId;
    
    if (gameStarted && !gameOver) {
      timerId = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerId);
            setGameOver(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [gameStarted, gameOver]);

  // fucking Mobile controls
  const handleMobileControl = (direction) => {
    if (!playerRef.current || gameOver) return;
    
    const forceMagnitude = 0.005;
    
    switch (direction) {
      case 'up':
        Matter.Body.applyForce(playerRef.current, playerRef.current.position, {
          x: 0,
          y: -forceMagnitude,
        });
        break;
      case 'down':
        Matter.Body.applyForce(playerRef.current, playerRef.current.position, {
          x: 0,
          y: forceMagnitude,
        });
        break;
      case 'left':
        Matter.Body.applyForce(playerRef.current, playerRef.current.position, {
          x: -forceMagnitude,
          y: 0,
        });
        break;
      case 'right':
        Matter.Body.applyForce(playerRef.current, playerRef.current.position, {
          x: forceMagnitude,
          y: 0,
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (!gameStarted || !scene.current) return;

    if (!Matter) {
      console.error("Matter.js library not available");
      setLoadError(true);
      return;
    }

    try {
      const {
        Engine,
        Render,
        Runner,
        World,
        Bodies,
        Events,
        Body,
        Composite
      } = Matter;

      const engine = Engine.create();
      engineRef.current = engine;
      const world = engine.world;
      engine.world.gravity.y = 0.2; 

      const render = Render.create({
        element: scene.current,
        engine: engine,
        options: {
          width: gameSize.width,
          height: gameSize.height,
          wireframes: false,
          background: 'rgba(0, 0, 0, 0.9)',
          pixelRatio: window.devicePixelRatio
        },
      });
      renderRef.current = render;
      Render.run(render);

      
      const runner = Runner.create();
      Runner.run(runner, engine);

      const scaleFactor = gameSize.width / 800;

      const wallOptions = { 
        isStatic: true, 
        render: { 
          fillStyle: "rgba(0, 40, 0, 0.8)",
          strokeStyle: "#00ff00",
          lineWidth: 2 * scaleFactor
        } 
      };
      
      const wallThickness = 60 * scaleFactor;
      const floor = Bodies.rectangle(gameSize.width / 2, gameSize.height + wallThickness / 2, gameSize.width + wallThickness, wallThickness, wallOptions);
      const ceiling = Bodies.rectangle(gameSize.width / 2, -wallThickness / 2, gameSize.width + wallThickness, wallThickness, wallOptions);
      const leftWall = Bodies.rectangle(-wallThickness / 2, gameSize.height / 2, wallThickness, gameSize.height, wallOptions);
      const rightWall = Bodies.rectangle(gameSize.width + wallThickness / 2, gameSize.height / 2, wallThickness, gameSize.height, wallOptions);
      World.add(world, [floor, ceiling, leftWall, rightWall]);

      const playerRadius = 20 * scaleFactor;
      const player = Bodies.circle(gameSize.width / 2, gameSize.height / 2, playerRadius, {
        label: "player",
        restitution: 0.8,
        friction: 0.05,
        density: 0.002,
        frictionAir: 0.02,
        render: { 
          fillStyle: "#00ff00",
          strokeStyle: "#ffffff",
          lineWidth: 2 * scaleFactor,
          shadowColor: "#00ff00",
          shadowBlur: 15 * scaleFactor,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        },
      });
      playerRef.current = player;
      World.add(world, player);

      for (let i = 0; i < 5; i++) {
        const x = gameSize.width * (0.1 + Math.random() * 0.8);
        const y = gameSize.height * (0.1 + Math.random() * 0.8);
        const size = (30 + Math.random() * 40) * scaleFactor;
        
        const pill = Bodies.rectangle(x, y, size, size/2, {
          chamfer: { radius: size/4 },
          render: {
            fillStyle: "#003300",
            strokeStyle: "#00aa00",
            lineWidth: 1 * scaleFactor
          },
          restitution: 0.7
        });
        
        World.add(world, pill);
      }

      function spawnTarget() {
        const x = gameSize.width * (0.1 + Math.random() * 0.8);
        const y = gameSize.height * (0.1 + Math.random() * 0.8);
        
        const pillWidth = 40 * scaleFactor;
        const pillHeight = 20 * scaleFactor;
        const target = Bodies.rectangle(x, y, pillWidth, pillHeight, {
          label: "target",
          chamfer: { radius: 10 * scaleFactor },
          isStatic: true,
          isSensor: true,
          render: { 
            fillStyle: "#ff0000",
            strokeStyle: "#ffffff",
            lineWidth: 1 * scaleFactor,
            shadowColor: "#ff0000",
            shadowBlur: 10 * scaleFactor
          },
        });
        
        World.add(world, target);
        
        // shit ass pussy bitch
        let scale = 1;
        let growing = false;
        
        const pulseInterval = setInterval(() => {
          if (!target.id) {
            clearInterval(pulseInterval);
            return;
          }
          
          if (scale > 1.1) growing = false;
          if (scale < 0.9) growing = true;
          
          scale += growing ? 0.01 : -0.01;
          Body.scale(target, scale, scale);
        }, 50);
      }

      function spawnSpecialTarget() {
        if (gameOver) return;
        
        const x = gameSize.width * (0.1 + Math.random() * 0.8);
        const y = gameSize.height * (0.1 + Math.random() * 0.8);
        
        const pillWidth = 40 * scaleFactor;
        const pillHeight = 20 * scaleFactor;
        const specialTarget = Bodies.rectangle(x, y, pillWidth, pillHeight, {
          label: "specialTarget",
          chamfer: { radius: 10 * scaleFactor },
          isStatic: true,
          isSensor: true,
          render: { 
            fillStyle: "#0000ff",
            strokeStyle: "#ffffff",
            lineWidth: 1 * scaleFactor,
            shadowColor: "#0000ff",
            shadowBlur: 10 * scaleFactor
          },
        });
        
        World.add(world, specialTarget);
        
        setTimeout(() => {
          if (specialTarget.id && !gameOver) {
            Composite.remove(world, specialTarget);
          }
        }, 5000);
      }

      spawnTarget();
      
      const specialTargetInterval = setInterval(() => {
        if (!gameOver) spawnSpecialTarget();
      }, 10000);

      Events.on(engine, "collisionStart", (event) => {
        event.pairs.forEach((pair) => {
          const { bodyA, bodyB } = pair;
          
          if ((bodyA.label === "player" && bodyB.label === "target") ||
              (bodyB.label === "player" && bodyA.label === "target")) {
            const targetBody = bodyA.label === "target" ? bodyA : bodyB;
            World.remove(world, targetBody);
            setScore((prevScore) => prevScore + 1);
            
            setTimeout(() => {
              if (!gameOver) spawnTarget();
            }, 500);
          }
          
          if ((bodyA.label === "player" && bodyB.label === "specialTarget") ||
              (bodyB.label === "player" && bodyA.label === "specialTarget")) {
            const targetBody = bodyA.label === "specialTarget" ? bodyA : bodyB;
            World.remove(world, targetBody);
            setScore((prevScore) => prevScore + 5);
            setTimeLeft(prev => Math.min(prev + 5, 60)); // Bonus time
            
            // Visual effect for bonus
            const flash = document.createElement("div");
            flash.className = styles.bonusFlash;
            scene.current.appendChild(flash);
            
            setTimeout(() => {
              if (scene.current && scene.current.contains(flash)) {
                scene.current.removeChild(flash);
              }
            }, 500);
          }
        });
      });

      function handleKeyDown(event) {
        const forceMagnitude = 0.025; 
        
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"].includes(event.key)) {
          event.preventDefault();
        }
        
        if (!playerRef.current || gameOver) return;
        
        switch (event.key) {
          case "ArrowUp":
          case "w":
            Body.applyForce(playerRef.current, playerRef.current.position, {
              x: 0,
              y: -forceMagnitude,
            });
            break;
          case "ArrowDown":
          case "s":
            Body.applyForce(playerRef.current, playerRef.current.position, {
              x: 0,
              y: forceMagnitude,
            });
            break;
          case "ArrowLeft":
          case "a":
            Body.applyForce(playerRef.current, playerRef.current.position, {
              x: -forceMagnitude,
              y: 0,
            });
            break;
          case "ArrowRight":
          case "d":
            Body.applyForce(playerRef.current, playerRef.current.position, {
              x: forceMagnitude,
              y: 0,
            });
            break;
          default:
            break;
        }
      }
      
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        clearInterval(specialTargetInterval);
        Render.stop(render);
        Runner.stop(runner);
        World.clear(world, false);
        Engine.clear(engine);
        if (render.canvas && render.canvas.parentNode) {
          render.canvas.parentNode.removeChild(render.canvas);
        }
        render.canvas = null;
        render.context = null;
        render.textures = {};
      };
    } catch (error) {
      console.error("Error initializing game:", error);
      setLoadError(true);
    }
  }, [gameStarted, gameOver, gameSize]);

  const getRandomMatrixChar = () => {
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  const handleCanvasClick = (event) => {
    if (!engineRef.current || !Matter || !gameStarted || gameOver) return;
    
    try {
      const rect = scene.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      const scaleFactor = gameSize.width / 800;
      
      const forceField = Matter.Bodies.circle(x, y, 40 * scaleFactor, {
        isSensor: true,
        isStatic: true,
        render: { 
          fillStyle: "rgba(0, 255, 0, 0.2)",
          strokeStyle: "#00ff00",
          lineWidth: 2 * scaleFactor
        }
      });
      
      Matter.World.add(engineRef.current.world, forceField);
      
      const bodies = Matter.Composite.allBodies(engineRef.current.world);
      bodies.forEach(body => {
        if (body !== forceField) {
          const force = 0.005;
          const dx = body.position.x - x;
          const dy = body.position.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200 * scaleFactor) {
            const forceMagnitude = force * (1 - distance / (200 * scaleFactor));
            const angle = Math.atan2(dy, dx);
            
            Matter.Body.applyForce(body, body.position, {
              x: Math.cos(angle) * forceMagnitude,
              y: Math.sin(angle) * forceMagnitude
            });
          }
        }
      });
      
      setTimeout(() => {
        if (engineRef.current && forceField.id) {
          Matter.Composite.remove(engineRef.current.world, forceField);
        }
      }, 800);
    } catch (error) {
      console.error("Error adding force field:", error);
    }
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
    setGameStarted(true);
    
    if (engineRef.current) {
      const world = engineRef.current.world;
      Matter.World.clear(world, false);
    }
  };

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className={styles.gameContainer}>
      <div className={styles.matrixBackground}>
        {matrixRain.map((char, index) => (
          <div 
            key={index}
            className={styles.matrixChar}
            style={{
              left: `${char.x}px`,
              top: `${char.y}px`,
              opacity: char.opacity
            }}
          >
            {char.char}
          </div>
        ))}
      </div>
      
      <h1 className={styles.gameTitle}>The Matrix: Red Pill Collector</h1>
      
      <div className={styles.gameInfo}>
        <div className={styles.scoreBoard}>
          <span>SCORE: {score}</span>
          <span>TIME: {timeLeft}</span>
        </div>
        
        <p className={styles.instructions}>
          {isMobile ? 
            "Use the on-screen controls below or tap to create force fields." :
            "Use arrow keys or WASD to move. Collect red pills for points and blue pills for bonus."
          }
          <br />
          Click anywhere in the game area to create force fields that repel objects.
        </p>
      </div>
      
      {!gameStarted ? (
        <div className={styles.startScreen} style={{ width: gameSize.width, height: gameSize.height }}>
          <div className={styles.startContent}>
            <h2>Enter The Matrix</h2>
            <p>Choose the red pill to see how deep the rabbit hole goes...</p>
            <button className={styles.startButton} onClick={startGame}>
              Take the Red Pill
            </button>
          </div>
        </div>
      ) : loadError ? (
        <div className={styles.errorScreen} style={{ width: gameSize.width, height: gameSize.height }}>
          <h2>System Failure</h2>
          <p>Could not load the Matrix. Please make sure you have installed Matter.js:</p>
          <code>npm install matter-js</code>
        </div>
      ) : gameOver ? (
        <div className={styles.gameOverScreen} style={{ width: gameSize.width, height: gameSize.height }}>
          <h2>Connection Terminated</h2>
          <p>You collected {score} pills</p>
          <button className={styles.resetButton} onClick={resetGame}>
            Reconnect
          </button>
        </div>
      ) : (
        <div
          ref={scene}
          onClick={handleCanvasClick}
          className={styles.gameScene}
        />
      )}
      
      {/* Mobile on-screen controls */}
      {isMobile && gameStarted && !gameOver && !loadError && (
        <div className={styles.mobileControls}>
          <div className={styles.controlsRow}>
            <div 
              className={styles.controlButton}
              onTouchStart={() => handleMobileControl('up')}
              onClick={() => handleMobileControl('up')}
            >
              ↑
            </div>
          </div>
          <div className={styles.controlsRow}>
            <div 
              className={styles.controlButton}
              onTouchStart={() => handleMobileControl('left')}
              onClick={() => handleMobileControl('left')}
            >
              ←
            </div>
            <div 
              className={styles.controlButton}
              onTouchStart={() => handleMobileControl('down')}
              onClick={() => handleMobileControl('down')}
            >
              ↓
            </div>
            <div 
              className={styles.controlButton}
              onTouchStart={() => handleMobileControl('right')}
              onClick={() => handleMobileControl('right')}
            >
              →
            </div>
          </div>
        </div>
      )}
      
      <div className={styles.scanlines}></div>
    </div>
  );
};