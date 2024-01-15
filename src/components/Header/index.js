import { CheckCircleFill, Sun, MoonFill } from "react-bootstrap-icons";
import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";

import "./style.css";
import ThemeContext from "../../Contexts/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className="header">
      <div className="header_container">
        <div className="logo">
          <span className={`${theme === "light" ? "light" : "dark"}`}>
            <CheckCircleFill /> Pomofocus
          </span>
        </div>
        <div className="menu">
          <div className="theme-button">
            {theme === "light" ? (
              <button
                type="button"
                className="dark-button"
                onClick={() => setTheme("dark")}
              >
                <MoonFill />
              </button>
            ) : (
              <button
                type="button"
                className="light-button"
                onClick={() => setTheme("light")}
              >
                <Sun />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="nav">
        <ul>
          <li>
            <NavLink
              className={`btn ${theme === "light" ? "light" : "dark"}`}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`btn ${theme === "light" ? "light" : "dark"}`}
              to="/welcome"
            >
              Welcome
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink
              className={`btn ${theme === "light" ? "light" : "dark"}`}
              to="/my-profile"
            >
              Profile
            </NavLink>
            <ul className={`dropdown-content ${theme === "light" ? "light" : "dark"}`}>
              <li>
                <Link
               className={`dropdown-item ${theme === "light" ? "light" : "dark"}`}
                  to="/my-profile"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                className={`dropdown-item ${theme === "light" ? "light" : "dark"}`}
                  to="/my-profile/skill"
                >
                  Skill
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={`row-box ${theme === "light" ? "light" : "dark"}`}></div>
    </div>
  );
};

export default Header;
