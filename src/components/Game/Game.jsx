import React, { useEffect, useRef, useState } from "react";
// Explicitly import Matter.js with error handling
let Matter;
try {
  Matter = require("matter-js");
} catch (error) {
  console.error("Failed to load Matter.js:", error);
}

export const Game = () => {
  const scene = useRef(null);
  const engineRef = useRef(null);
  const playerRef = useRef(null);
  const [score, setScore] = useState(0);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    // Check if Matter.js loaded correctly
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
      } = Matter;

      // Create engine and world
      const engine = Engine.create();
      engineRef.current = engine;
      const world = engine.world;
      engine.world.gravity.y = 1; // Natural gravity

      // Create renderer and attach it to our scene container
      const render = Render.create({
        element: scene.current,
        engine: engine,
        options: {
          width: 800,
          height: 600,
          background: "#f0f4f8",
          wireframes: false,
        },
      });
      Render.run(render);

      // Create runner
      const runner = Runner.create();
      Runner.run(runner, engine);

      // Create boundaries (walls) for a closed arena
      const wallOptions = { isStatic: true, render: { fillStyle: "#2c3e50" } };
      const floor = Bodies.rectangle(400, 610, 810, 60, wallOptions);
      const ceiling = Bodies.rectangle(400, -10, 810, 60, wallOptions);
      const leftWall = Bodies.rectangle(-10, 300, 60, 600, wallOptions);
      const rightWall = Bodies.rectangle(810, 300, 60, 600, wallOptions);
      World.add(world, [floor, ceiling, leftWall, rightWall]);

      // Create the player (a blue ball)
      const player = Bodies.circle(100, 300, 20, {
        label: "player",
        restitution: 0.5,
        friction: 0.1,
        render: { fillStyle: "#3498db" },
      });
      playerRef.current = player;
      World.add(world, player);

      // Function to spawn a target at a random position
      function spawnTarget() {
        const x = 100 + Math.random() * 600; // between 100 and 700
        const y = 100 + Math.random() * 400; // between 100 and 500
        const target = Bodies.circle(x, y, 15, {
          label: "target",
          isStatic: true, // Target stays in place
          isSensor: true, // Detect collision without physical impact
          render: { fillStyle: "#e74c3c" },
        });
        World.add(world, target);
      }

      // Spawn the initial target
      spawnTarget();

      // Listen for collisions: if the player hits a target, update score and spawn a new target.
      Events.on(engine, "collisionStart", (event) => {
        event.pairs.forEach((pair) => {
          const { bodyA, bodyB } = pair;
          if (
            (bodyA.label === "player" && bodyB.label === "target") ||
            (bodyB.label === "player" && bodyA.label === "target")
          ) {
            const targetBody = bodyA.label === "target" ? bodyA : bodyB;
            World.remove(world, targetBody);
            setScore((prevScore) => prevScore + 1);
            // Spawn a new target after a brief pause
            setTimeout(() => spawnTarget(), 500);
          }
        });
      });

      // Add keyboard controls to move the player, and prevent arrow keys from scrolling the page.
      function handleKeyDown(event) {
        const forceMagnitude = 0.02;
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
          event.preventDefault();
        }
        if (!playerRef.current) return;
        switch (event.key) {
          case "ArrowUp":
            Body.applyForce(playerRef.current, playerRef.current.position, {
              x: 0,
              y: -forceMagnitude,
            });
            break;
          case "ArrowDown":
            Body.applyForce(playerRef.current, playerRef.current.position, {
              x: 0,
              y: forceMagnitude,
            });
            break;
          case "ArrowLeft":
            Body.applyForce(playerRef.current, playerRef.current.position, {
              x: -forceMagnitude,
              y: 0,
            });
            break;
          case "ArrowRight":
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

      // Cleanup when component unmounts
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        Render.stop(render);
        Runner.stop(runner);
        World.clear(world, false);
        Engine.clear(engine);
        if (render.canvas && render.canvas.remove) {
          render.canvas.remove();
        }
        render.textures = {};
      };
    } catch (error) {
      console.error("Error initializing game:", error);
      setLoadError(true);
    }
  }, []);

  // Clicking inside the canvas spawns a new obstacle box.
  const handleCanvasClick = (event) => {
    if (!engineRef.current || !Matter) return;
    try {
      const rect = scene.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const box = Matter.Bodies.rectangle(x, y, 40, 40, {
        restitution: 0.6,
        render: { fillStyle: "#8e44ad" },
      });
      Matter.World.add(engineRef.current.world, box);
    } catch (error) {
      console.error("Error adding obstacle:", error);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        background: "linear-gradient(135deg, #74ebd5, #ACB6E5)",
        minHeight: "100vh",
        padding: "20px",
        color: "#333",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Physics Collector</h1>
      <p style={{ marginBottom: "20px" }}>
        Use the arrow keys to move the blue ball and collect red targets.
        <br />
        Click inside the arena to add obstacles!
      </p>
      <h2>Score: {score}</h2>
      
      {loadError ? (
        <div style={{ 
          margin: "20px auto", 
          width: "800px", 
          height: "600px", 
          border: "5px solid #2c3e50",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f0f4f8" 
        }}>
          <div>
            <h2>Oops! Could not load the game engine.</h2>
            <p>Please make sure you have installed Matter.js:</p>
            <code>npm install matter-js</code>
          </div>
        </div>
      ) : (
        <div
          ref={scene}
          onClick={handleCanvasClick}
          style={{
            margin: "20px auto",
            width: "800px",
            height: "600px",
            border: "5px solid #2c3e50",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0,0,0,0.3)",
            position: "relative",
            background: "#f0f4f8",
          }}
        />
      )}
    </div>
  );
};