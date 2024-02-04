import React from "react";
import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faEnvelope,
  faHome,
  faProjectDiagram,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link className="logo" to="/">
        <div className="logoTitle">KB</div>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="skill"
          to="/skills"
        >
          <FontAwesomeIcon icon={faCode} color="#4d4d4d" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="project"
          to="/projects"
        >
          <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4d" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
        </NavLink>
      </nav>
      <div className="socialMedia">
        <hr style={{ color: "#000" }} />
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kiran-balaji/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/kiranbalaji71"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://youtube.com/@itskirumi?feature=shared"
            >
              <FontAwesomeIcon icon={faYoutube} color="#4d4d4d" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://x.com/KiranBalaj197?t=4LS3gMFQKoJY7k6l-kdFzw&s=09"
            >
              <FontAwesomeIcon icon={faXTwitter} color="#4d4d4d" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/kiran_balaji_/"
            >
              <FontAwesomeIcon icon={faInstagram} color="#4d4d4d" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
