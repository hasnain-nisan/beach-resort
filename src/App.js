import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import Room from "./pages/Room"
import Error from "./pages/Error"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/room">Room</Link>
            </li>
            <li>
              <Link to="/error">Error</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/rooms">
            <Rooms />
          </Route>
          <Route exact path="/room">
            <Room />
          </Route>
          <Route exact path="/error">
            <Error/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
