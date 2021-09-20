import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import AboutMe from "./views/AboutMe";
import Projects from "./views/Projects";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
