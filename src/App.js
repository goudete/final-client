import Home from "./pages/Home/Home";
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
          
          {/* <Route path="/login">
            <Login />
          </Route> */}

          <Route path="/home">
            <Home />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}



export default App;
