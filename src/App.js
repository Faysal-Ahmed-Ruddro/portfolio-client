import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import NotFound from "./Pages/NotFound/NotFound";
import About from "./Pages/About/About";

// animation
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Skills from "./Pages/Skills/Skills";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/skills">
            <Skills></Skills>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
