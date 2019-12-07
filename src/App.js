import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.css";
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          {routes.map(route => (
            <Route key={route.component} {...route} />
          ))}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
