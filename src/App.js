import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tracker from './tracker.js'
import Portfolio from './portfolio.js'

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
      <Route exact path="/">
        <Tracker />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
