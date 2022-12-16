import React from 'react';

const ThemeContext = React.createContext(null);

export const ThemeProviderProvider=({children})=>{
    const [theme, setTheme] = React.useState(false);
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}  

export default ThemeContext;