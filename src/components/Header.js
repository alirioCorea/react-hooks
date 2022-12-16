import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const changeColor = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="header">
      <div className={darkMode ? "header-container-1" : "header-container-2"}>
        <h1>React Hooks</h1>
        <button type="button" onClick={changeColor} className="button">
          {darkMode ? "DarkMode" : "LightMode"}
        </button>
      </div>
    </div>
  );
}
