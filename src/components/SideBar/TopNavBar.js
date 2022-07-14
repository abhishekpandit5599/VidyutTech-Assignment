import React, { useState } from "react";
import "./TopNavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import logo from "../../images/logo.png";

function TopNavBar() {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="top-navbar-main-container">
      <div className="top-navbar-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="top-bar-icons">
        <FontAwesomeIcon
          className="navbar-chat-icon font-3x yellow m-r top-bell-icon"
          icon={faBell}
        />

        <div
          onClick={() => setOpenProfile(!openProfile)}
          className="profile-top-bar"
        >
          <h4 className="user-name-grey">userName</h4>

          <FontAwesomeIcon
            className="top-navbar-profile navbar-chat-icon font-3x yellow m-r"
            icon={faUser}
          />
        </div>
        {openProfile && (
          <ul className="profile-options">
            <div className="profile-show">
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                className="navbar-chat-icon font-3x yellow"
                icon={faUser}
              />
              <span>
                <h4>userName</h4>
              </span>
            </div>
            <li
              onClick={() => (openProfile ? setOpenProfile(!openProfile) : "")}
              className="sub-list-top-bar"
            >
              Edit profile
            </li>
            <li
              onClick={() => (openProfile ? setOpenProfile(!openProfile) : "")}
            >
              Log out
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default TopNavBar;
