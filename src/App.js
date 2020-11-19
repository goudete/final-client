import Home from "./pages/Home/Home";
import Professors from "./pages/Professors/Professors"
import Login from './pages/Login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'unstated';


function App() {
  return (
    <div>
      <Provider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            
            <Route path="/profs">
              <Professors />
            </Route>

            <Route path="/classes">
              <Home />
            </Route>

          </Switch>
        </Router>
      </Provider>

    </div>
  );
}



export default App;
