import React from "react";
import ViewIcon from "../img/Icon_View.svg";

const ShinyCard = (props) => {
  let { image, lead } = props.data;

  return (
    <div className="grid-item">
      <div className="card">
        <div className="card-overlay">
          <span className="card-view-btn">
            <img src={ViewIcon} alt="View" width="40" />
            <p>View</p>
          </span>
        </div>
        <div className="card_row_title">
          <h2>Shiny Platform</h2>
          <img src="#" width="24" alt="category-name"></img>
        </div>
        <p>Discover the most unique ideas for your projects</p>
        <div className="mb3 card_row_team">
          <div className="card_team_leader">
            <p>Submitted by</p>
            <div className="profile-circle">
              <img
                className="profile-image"
                src={image}
                width="40"
                alt={lead}
              ></img>
            </div>
          </div>
          <div className="card_team_panel">
            <p>Contributors</p>
            <div className="profile-circle">
              <img
                className="profile-image"
                src={image}
                width="40"
                alt={lead}
              ></img>
            </div>
            <div className="profile-circle">
              <img
                className="profile-image"
                src={image}
                width="40"
                alt={lead}
              ></img>
            </div>
            <div className="profile-circle">
              <img
                className="profile-image"
                src={image}
                width="40"
                alt={lead}
              ></img>
            </div>
          </div>
        </div>
        <p className="">Currently looking to fill positions...</p>
      </div>
    </div>
  );
};

export default ShinyCard;
