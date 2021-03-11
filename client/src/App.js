import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
// import Saved from "./pages/Saved";
import "./App.css";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path={["/search", "/"]} component={Search} />
          {/* <Route exact path="/saved" component={Saved} /> */}
          <Route />
        </Switch>
    </Router>
  );
}

export default App;
