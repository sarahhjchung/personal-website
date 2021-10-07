import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import AboutMe from "./views/AboutMe";
import Projects from "./views/Projects";
import Courses from "./views/Courses";
import Work from "./views/Work";

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
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
