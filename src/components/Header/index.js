import { CheckCircleFill, Sun, MoonFill } from "react-bootstrap-icons";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

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
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`btn ${
                theme === "light" ? "light" : "dark"
              }`}
              to="/welcome"
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`btn ${
                theme === "light" ? "light" : "dark"
              }`}
              to="/my-profile"
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className={`row-box ${theme === "light" ? "light" : "dark"}`}
      ></div>
    </div>
  );
};

export default Header;
