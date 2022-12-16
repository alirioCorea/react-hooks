import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function Header() {
  const {theme, setTheme} = useContext(ThemeContext);

  const changeColor = () => {
    setTheme(!theme);
  };

  return (
    <div className="header">
      <div className={theme ? "header-container-1" : "header-container-2"}>
        <h1>React Hooks</h1>
        <button type="button" onClick={changeColor} className="button">
          {theme ? "DarkMode" : "LightMode"}
        </button>
      </div>
    </div>
  );
}
