import React, { useEffect, useState } from "react";
import "./CelebrationEffect.css";

const emojis = ["🎉", "💖", "🎈"];

const getRandomPosition = () => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  return { x, y };
};

const CelebrationEffect = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (particles.length < 10) {
        // Limit the number of particles
        const newParticle = {
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          style: {
            left: `${getRandomPosition().x}vw`,
            top: `${getRandomPosition().y}vh`,
            animationDuration: `${Math.random() * 3 + 2}s`, // Shorter duration
          },
        };
        setParticles((particles) => [...particles, newParticle]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [particles]);

  return (
    <>
      {particles.map((particle, index) => (
        <div key={index} className="celebration-emoji" style={particle.style}>
          {particle.emoji}
        </div>
      ))}
    </>
  );
};

export default CelebrationEffect;
