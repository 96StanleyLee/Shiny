import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_container">
        <div className="nav_left">
          <a className="nav_logo">
            Shiny{" "}
            <span role="img" aria-label="shiny">
              ✨
            </span>
          </a>
          <div className="nav_logo_sub">
            Discover unique ideas for your projects
          </div>
        </div>
        <div className="nav_right">
          <div className="nav_menu">
            <a href="#" className="nav_link">
              Submit{" "}
            </a>
            <a href="#" className="nav_link">
              Browse
            </a>
            <a href="#" className="nav_link">
              Opportunities
            </a>
            <a href="#" className="nav_link_collaborate">
              Collaborate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
