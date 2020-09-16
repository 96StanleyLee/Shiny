import React from "react";
import ShinyCard from "../Components/ShinyCard.js";
import LinesBG from "./Lines.svg";
import { Link } from "react-router-dom";

const HomePage = ({ homecards, user }) => {
  return (
    <div className="homepage">
      <div className="grid-container">
        <div className="Side"></div>
        <div className="Main">
          <div className="Intro my4">
            {user ? <h1>{user.email}</h1> : null}
            <h1>A network built to help ideas glow up</h1>
            <p className="intro_subtitle mb4">
              Shiny
              <span role="img" aria-label="Shiny">
                ✨
              </span>
              ’s goal is to gather the brightest ideas and minds together.{" "}
              <br />
              We help build the foundation to your next project.
            </p>
            <Link className="btn mr3" to="/register">
              <span>Register</span>
            </Link>
            <Link to="/login" className="btn">
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div className="Side-p0 side-heading">
          <div className="side-heading-stripes">
            <div className="stripe-1"></div>
            <div className="stripe-2"></div>
          </div>{" "}
          <h1>Shiny Ideas</h1>
        </div>
        <div className="Main-p0 lg-card-grid">
          {homecards.map((cards) => {
            return <ShinyCard key={cards.id} data={cards} />;
          })}
          <div className="grid-item view-more">
            <span className="big-btn">
              View More
              <div className="big-btn-bg"></div>
            </span>
          </div>
        </div>
      </div>
      <div className="homepage-bg">
        <img src={LinesBG} alt="Lines Background" />
      </div>
    </div>
  );
};

export default HomePage;
