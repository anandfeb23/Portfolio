import React, { useRef, useState } from "react";
import backgroundMusic from "../assets/background-music.mp3";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setIsPlaying(true);
    }
  };

  return (
    <>
      {!isPlaying && (
        <div
          onClick={startMusic}
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.5))",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            zIndex: "1000",
            textAlign: "center",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
            borderRadius: "8px",
            fontFamily: '"Arial", sans-serif',
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
            Welcome to My Portfolio
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
            Click anywhere to start the background music
          </p>
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              fontSize: "24px",
              color: "#000",
              cursor: "pointer",
            }}
          >
            🎵
          </div>
        </div>
      )}
      <audio ref={audioRef} src={backgroundMusic} loop />
    </>
  );
};

export default BackgroundMusic;
