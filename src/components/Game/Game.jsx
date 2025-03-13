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
  const rainIntervalRef = useRef(null);

  useEffect(() => {
    const initRain = () => {
      const width = 800;
      const chars = [];
      for (let i = 0; i < 80; i++) {
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
        if (newY > 600) {
          return {
            ...char,
            y: Math.random() * -100,
            x: Math.random() * 800,
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
  }, []);

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
          width: 800,
          height: 600,
          wireframes: false,
          background: 'rgba(0, 0, 0, 0.9)',
          pixelRatio: window.devicePixelRatio
        },
      });
      renderRef.current = render;
      Render.run(render);

      const runner = Runner.create();
      Runner.run(runner, engine);

      const wallOptions = { 
        isStatic: true, 
        render: { 
          fillStyle: "rgba(0, 40, 0, 0.8)",
          strokeStyle: "#00ff00",
          lineWidth: 2
        } 
      };
      const floor = Bodies.rectangle(400, 610, 810, 60, wallOptions);
      const ceiling = Bodies.rectangle(400, -10, 810, 60, wallOptions);
      const leftWall = Bodies.rectangle(-10, 300, 60, 600, wallOptions);
      const rightWall = Bodies.rectangle(810, 300, 60, 600, wallOptions);
      World.add(world, [floor, ceiling, leftWall, rightWall]);

      const player = Bodies.circle(400, 300, 20, {
        label: "player",
        restitution: 0.8,
        friction: 0.05,
        density: 0.002, 
        frictionAir: 0.02,
        render: { 
          fillStyle: "#00ff00",
          strokeStyle: "#ffffff",
          lineWidth: 2,
          shadowColor: "#00ff00",
          shadowBlur: 15,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        },
      });
      playerRef.current = player;
      World.add(world, player);

      for (let i = 0; i < 5; i++) {
        const x = 100 + Math.random() * 600;
        const y = 100 + Math.random() * 400;
        const size = 30 + Math.random() * 40;
        
        const pill = Bodies.rectangle(x, y, size, size/2, {
          chamfer: { radius: size/4 },
          render: {
            fillStyle: "#003300",
            strokeStyle: "#00aa00",
            lineWidth: 1
          },
          restitution: 0.7
        });
        
        World.add(world, pill);
      }

      function spawnTarget() {
        const x = 100 + Math.random() * 600;
        const y = 100 + Math.random() * 400;
        
        const target = Bodies.rectangle(x, y, 40, 20, {
          label: "target",
          chamfer: { radius: 10 },
          isStatic: true,
          isSensor: true,
          render: { 
            fillStyle: "#ff0000",
            strokeStyle: "#ffffff",
            lineWidth: 1,
            shadowColor: "#ff0000",
            shadowBlur: 10
          },
        });
        
        World.add(world, target);
        
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
        
        const x = 100 + Math.random() * 600;
        const y = 100 + Math.random() * 400;
        
        const specialTarget = Bodies.rectangle(x, y, 40, 20, {
          label: "specialTarget",
          chamfer: { radius: 10 },
          isStatic: true,
          isSensor: true,
          render: { 
            fillStyle: "#0000ff",
            strokeStyle: "#ffffff",
            lineWidth: 1,
            shadowColor: "#0000ff",
            shadowBlur: 10
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
            
            const flash = document.createElement("div");
            flash.className = styles.bonusFlash;
            scene.current.appendChild(flash);
            
            setTimeout(() => {
              scene.current.removeChild(flash);
            }, 500);
          }
        });
      });

      function handleKeyDown(event) {
        const forceMagnitude = 0.05; 
        
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
  }, [gameStarted, gameOver]);

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
      
      const forceField = Matter.Bodies.circle(x, y, 40, {
        isSensor: true,
        isStatic: true,
        render: { 
          fillStyle: "rgba(0, 255, 0, 0.2)",
          strokeStyle: "#00ff00",
          lineWidth: 2
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
          
          if (distance < 200) {
            const forceMagnitude = force * (1 - distance / 200);
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
          Use arrow keys or WASD to move. Collect red pills for points and blue pills for bonus.
          <br />
          Click anywhere to create force fields that repel objects.
        </p>
      </div>
      
      {!gameStarted ? (
        <div className={styles.startScreen}>
          <div className={styles.startContent}>
            <h2>Enter The Matrix</h2>
            <p>Choose the red pill to see how deep the rabbit hole goes...</p>
            <button className={styles.startButton} onClick={startGame}>
              Take the Red Pill
            </button>
          </div>
        </div>
      ) : loadError ? (
        <div className={styles.errorScreen}>
          <h2>System Failure</h2>
          <p>Could not load the Matrix. Please make sure you have installed Matter.js:</p>
          <code>npm install matter-js</code>
        </div>
      ) : gameOver ? (
        <div className={styles.gameOverScreen}>
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
      
      <div className={styles.scanlines}></div>
    </div>
  );
};