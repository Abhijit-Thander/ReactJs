import React, { createContext, useContext, useState } from "react";

export const ThemeDataContext = createContext();
const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeDataContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeDataContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeDataContext);
export default ThemeContext;
