import React from "react";
import "./SideNavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faBoxOpen,
  faHouse,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

function SideNavBar() {
  return (
    <div className="side-navbar-main-container">
      <div className="navigation-sidebar">
        <ul className="navigation-perant">
          <li className="navigation-icons">
            <Link onClick={() => {}} to="/">
              <FontAwesomeIcon
                className="navbar-chat-icon font-1x yellow"
                icon={faHouse}
              />{" "}
              <p>Home</p>
            </Link>
          </li>
          <li className="navigation-icons">
            <Link onClick={() => {}} to="/">
              <FontAwesomeIcon
                className="navbar-chat-icon font-1x yellow"
                icon={faBoxOpen}
              />
              <p>All product</p>
            </Link>
          </li>
          <li className="navigation-icons hide">
            <div className="logout-sidebar">
              <FontAwesomeIcon
                className="navbar-chat-icon font-1x yellow"
                icon={faPowerOff}
              />
              <p>Logout</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavBar;
