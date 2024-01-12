import { CheckCircleFill, Sun, MoonFill } from "react-bootstrap-icons";
import { useContext } from "react";

import "./style.css";
import ThemeContext from "../../Contexts/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="header_container">
      <div className="logo">
        <span className={`${theme ? "light" : "dark"}`}>
          <CheckCircleFill /> Pomofocus
        </span>
      </div>
      <div className="menu">
        <div className="theme-button">
          {theme ? (
            <button type="button" className="dark-button" onClick={() => setTheme(!theme)}>
              <MoonFill />
            </button>
          ) : (
            <button type="button" className="light-button" onClick={() => setTheme(!theme)}>
              <Sun />
            </button>
          ) }
        </div>
      </div>
    </div>
  );
};

export default Header;
