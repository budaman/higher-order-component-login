import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import Login from "./Login";
import Resources from "./Resources";
import ErrorPage from "./ErrorPage";
import { Switch, Route } from "react-router-dom";
import requireAuth from "./require_auth";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/resources" component={requireAuth(Resources)} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default App;
