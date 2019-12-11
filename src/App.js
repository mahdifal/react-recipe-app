import React, { useState, useEffect } from "react";
import "./App.css";
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThemeContext from "./Context/ThemeContext";
import Navbar from "./components/Navbar";
import SwitchTheme from "./components/SwitchTheme";

const App = () => {
  const getTheme = () =>
    JSON.parse(localStorage.getItem("recipe-theme")) || "light";
  const [theme, setTheme] = useState(getTheme);

  const changeTheme = e => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    localStorage.setItem("recipe-theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <main>
          <Navbar>
            <SwitchTheme
              switchTheme={e => changeTheme(e)}
              currentTheme={theme}
            />
          </Navbar>
          <Switch>
            {routes.map(route => (
              <Route key={route.component} {...route} />
            ))}
          </Switch>
        </main>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
