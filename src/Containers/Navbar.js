import React from "react";
import {Link, Router} from "react-router-dom"


const Navbar = () => {
  const style = {
    textDecoration: 'none'
  }
  return (
    <div className="navbar">
      <div className="nav_container">
        <div className="nav_left">
          <Link to="/" style={style}>
            <span className="nav_logo">
              Shiny{" "}
              <span role="img" aria-label="shiny">
                ✨
              </span>
            </span>
          </Link>
          <div className="nav_logo_sub">
            Discover unique ideas for your projects
          </div>
        </div>
        <div className="nav_right">
          <div className="nav_menu">
            <span className="nav_link">
              Submit{" "}
            </span>
            <span className="nav_link" onClick={()=>console.log('hi')}>
              Browse
            </span>
            <span className="nav_link">
              Opportunities
            </span>
            <span className="nav_link_collaborate">
              Collaborate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
