import React from "react";
import ShinyCard from "../Components/ShinyCard.js";
import LinesBG from "./Lines.svg";
import { Link } from "react-router-dom";

const HomePage = ({ homecards }) => {
  const style = {
    textDecoration: "none",
  };
  return (
    <div className="homepage">
      <div className="section Intro">
        <div className="container">
          <h1>A network built to help ideas glow up</h1>
          <p className="intro_subtitle mb4">
            Shiny{" "}
            <span role="img" aria-label="Shiny">
              ✨
            </span>
            ’s goal is to gather the brightest ideas and minds together. <br />
            We help build the foundation to your next project.
          </p>
          <Link style={style} to="/register">
            {" "}
            <span className="btn mr3">Register</span>{" "}
          </Link>
          <Link style={style} to="/register">
            {" "}
            <span className="btn">Login</span>{" "}
          </Link>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h1>Shiny Ideas</h1>
          <div className="mb4 grid2-container">
            {homecards.map((cards) => {
              return <ShinyCard key={cards.id} data={cards} />;
            })}
          </div>
          <div className="center">
            <span className="big-btn">
              View more
              <div className="big-btn-bg"></div>
            </span>
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
      <div className="homepage-bg">
        <img src={LinesBG} alt="Lines Background" />
      </div>
    </div>
  );
};

export default HomePage;
