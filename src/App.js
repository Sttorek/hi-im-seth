import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="page">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
