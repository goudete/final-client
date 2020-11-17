import Home from "./pages/Home/Home";
import Professors from "./pages/Professors/Professors"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>

      <Router>
        <Switch>
          {/* <Route exact path="/">
            <Signup />
          </Route> */}
          
          <Route path="/profs">
            <Professors />
          </Route>

          <Route path="/classes">
            <Home />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}



export default App;
