import React from "react";
import ShinyCard from "./ShinyCard.js";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="section Intro">
        <div className="container">
          <h1>A network built to help ideas glow up</h1>
          <p className="intro_subtitle">
            Shiny ✨’s goal is to gather the brightest ideas and minds together.{" "}
            <br />
            We help build the foundation to your next project.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h1>Shiny Ideas</h1>
          <div className="mb4 grid2-container">
            <div className="grid-item">
              <ShinyCard />
            </div>
            <div className="grid-item">
              <ShinyCard />
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h1>Ideas being polished</h1>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h1>How Shiny works</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
