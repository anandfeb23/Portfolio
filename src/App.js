import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import BackgroundMusic from "./components/BgMusic";
import CelebrationEffect from "./components/CelebrationEffect";

function App() {
  return (
    <div>
      <BackgroundMusic />
      <CelebrationEffect />
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
