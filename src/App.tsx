import { ThemeProvider } from "./ThemeContext";
import Details from "./Details";
import React from "react";
function App() {
  return (
    <>
    <ThemeProvider>
      <Details />
    </ThemeProvider>
    </>
  )
}

export default App;
