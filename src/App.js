import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import About from "./about";
import Home from "./home";
import Post from "./post";
import Default from "./default";
import Navbar from "./navbar";
import Dashboard from "./dashboard";
import { useState } from "react";

function App() {
  const [auth, setauth] = useState(false);

  return (
    <Router>
      <Navbar auth={auth} updateAuth={setauth} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About/:id" component={About} />
        {/* <Route path="/Dashboard" component={Dashboard} /> */}
        <PrivateRoute exact path="/Post" component={Post} auth={auth} />
        <PrivateRoute
          exact
          path="/Dashboard"
          component={Dashboard}
          auth={auth}
        />
        <Route exact component={Default} />
      </Switch>
    </Router>
  );
}
// Private route
const PrivateRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />
      }
    />
  );
};

export default App;
