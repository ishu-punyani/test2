import { ThemeProvider } from "./ThemeContext";
import Details from "./Details";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <>
    <ThemeProvider>
      <Provider store={store}>
        <Details />
      </Provider>
    </ThemeProvider>
    </>
  )
}

export default App;
