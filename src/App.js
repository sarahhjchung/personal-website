import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Home from "./Home"
import AboutMe from "./AboutMe"
import Projects from "./Projects"

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
