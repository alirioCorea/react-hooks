import { useState } from "react";

export default function Header() {

    const [darkMode, setDarkMode] = useState(false);

    const changeColor = () => {
        setDarkMode(!darkMode);
    };

  return (
    <div className={darkMode ? "DarkMode" : "LightMode"}>
      <div>React Hooks</div>
      <button type="button" onClick={changeColor}>{darkMode ? "DarkMode" : "LightMode"}</button>
    </div>
  );
}
