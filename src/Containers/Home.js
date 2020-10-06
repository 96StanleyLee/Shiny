import React from "react";
import ShinyCard from "../Components/ShinyCard.js";
import LinesBG from "./Lines.svg";
import { Link } from "react-router-dom";

const HomePage = ({ homecards, user }) => {
  let userLoggedIn = user ? user : {};
  return (
    <div className="homepage">
      <div className="grid-container">
        <div className="Side"></div>
        <div className="Main">
          <div className="Intro my4">
            <h1>{userLoggedIn.email}</h1>
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
      <div className="grid-container">
        <div className="Side">
          <h1>Ideas being polished</h1>
          <span className="category-btn">Social</span>
          <span className="category-btn">Community</span>
          <span className="category-btn">Tool</span>
          <span className="category-btn">Concept</span>
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
      <div className="grid-container">
        <div className="Side">
          <h1>How it works</h1>
        </div>
        <div className="Main-p0 ">
          <div className="">
            <h2>Publish and Create Interest</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit orci
              fermentum orci, enim auctor turpis integer. Natoque sed vivamus
              tellus ac praesent. In sed elementum platea viverra non. Orci
              tincidunt maecenas pellentesque aliquam interdum. Nisi, quis in ac
              ipsum sem quisque. Massa amet eget leo sit. Massa pretium at et
              nulla nulla. Senectus dictumst id et vitae leo justo.
            </p>
            <h2>Find Partners</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit orci
              fermentum orci, enim auctor turpis integer. Natoque sed vivamus
              tellus ac praesent. In sed elementum platea viverra non. Orci
              tincidunt maecenas pellentesque aliquam interdum. Nisi, quis in ac
              ipsum sem quisque. Massa amet eget leo sit. Massa pretium at et
              nulla nulla. Senectus dictumst id et vitae leo justo.
            </p>
          </div>
          <div className="">
            <h2>Learn and Collaborate</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit orci
              fermentum orci, enim auctor turpis integer. Natoque sed vivamus
              tellus ac praesent. In sed elementum platea viverra non. Orci
              tincidunt maecenas pellentesque aliquam interdum. Nisi, quis in ac
              ipsum sem quisque. Massa amet eget leo sit. Massa pretium at et
              nulla nulla. Senectus dictumst id et vitae leo justo.
            </p>
            <h2>Have fun, make friends</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit orci
              fermentum orci, enim auctor turpis integer. Natoque sed vivamus
              tellus ac praesent. In sed elementum platea viverra non. Orci
              tincidunt maecenas pellentesque aliquam interdum. Nisi, quis in ac
              ipsum sem quisque. Massa amet eget leo sit. Massa pretium at et
              nulla nulla. Senectus dictumst id et vitae leo justo.
            </p>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div className="Side">
          <h1>The Shiny System</h1>
        </div>
        <div className="Main-p0 ">
          <div className="">
            <h2>Gem Ratings</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit orci
              fermentum orci, enim auctor turpis integer. Natoque sed vivamus
              tellus ac praesent. In sed elementum platea viverra non. Orci
              tincidunt maecenas pellentesque aliquam interdum. Nisi, quis in ac
              ipsum sem quisque. Massa amet eget leo sit. Massa pretium at et
              nulla nulla. Senectus dictumst id et vitae leo justo.
            </p>
          </div>
          <div className="">
            <div className="">
              <h3>A Shiny Idea</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                augue lobortis quis est sed dolor. Imperdiet parturient rhoncus
                tincidunt id risus augue. Sed amet, nulla dolor, elit lacus id.
                Nunc cras suspendisse egestas varius vel.
              </p>
            </div>
            <div className="">
              <h3>Purple</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                augue lobortis quis est sed dolor. Imperdiet parturient rhoncus
                tincidunt id risus augue. Sed amet, nulla dolor, elit lacus id.
                Nunc cras suspendisse egestas varius vel.
              </p>
            </div>
            <div className="">
              <h3>Crimson</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                augue lobortis quis est sed dolor. Imperdiet parturient rhoncus
                tincidunt id risus augue. Sed amet, nulla dolor, elit lacus id.
                Nunc cras suspendisse egestas varius vel.
              </p>
            </div>
            <div className="">
              <h3>Magenta</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                augue lobortis quis est sed dolor. Imperdiet parturient rhoncus
                tincidunt id risus augue. Sed amet, nulla dolor, elit lacus id.
                Nunc cras suspendisse egestas varius vel.
              </p>
            </div>
            <div className="">
              <h3>Beginning</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                augue lobortis quis est sed dolor. Imperdiet parturient rhoncus
                tincidunt id risus augue. Sed amet, nulla dolor, elit lacus id.
                Nunc cras suspendisse egestas varius vel.
              </p>
            </div>
            <div className="">
              <h3>Starter</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                augue lobortis quis est sed dolor. Imperdiet parturient rhoncus
                tincidunt id risus augue. Sed amet, nulla dolor, elit lacus id.
                Nunc cras suspendisse egestas varius vel.
              </p>
            </div>
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
