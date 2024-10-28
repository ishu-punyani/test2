import React, { createContext, useState } from "react";

interface ThemeContextType {
    theme: string,
    toggleTheme: () => void
}

const defaultThemeContext: ThemeContextType = {
    theme: 'light',
    toggleTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

export const ThemeProvider = ( { children } : any) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }
    return ( 
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}