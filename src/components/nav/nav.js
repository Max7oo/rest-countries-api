import "./nav.css";

import darkmode from "../../images/darkmode.svg";
import lightmode from "../../images/lightmode.svg";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Nav({ check, setChecked }) {
  const navigate = useNavigate();

  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    setChecked(true);
    localStorage.setItem("selectedTheme", JSON.stringify(true));
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    setChecked(false);
    localStorage.setItem("selectedTheme", JSON.stringify(false));
  };

  useEffect(function () {
    if (JSON.parse(localStorage.getItem("selectedTheme")) === true) {
      setDarkMode();
    } else {
      setLightMode();
    }
  });

  const toggleTheme = (bool) => {
    if (!bool) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <nav>
      <div className="inner_nav">
        <h1 onClick={() => navigate("/")}>Where in the world?</h1>
        <div className="darkmode" onClick={() => toggleTheme(check)}>
          {check ? (
            <>
              <img src={lightmode} alt="lightmode" />
              <b>Light Mode</b>
            </>
          ) : (
            <>
              <img src={darkmode} alt="darkmode" />
              <b>Dark Mode</b>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
