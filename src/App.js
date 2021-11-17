import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import Room from "./pages/Room"
import Error from "./pages/Error"

function App() {
  return (
    <Router>
      <div className="h-screen w-screen antialiased bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        <Navbar />

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
          <Route >
            <Error/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
