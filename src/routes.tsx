import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Header } from "./Components"
import { Posts, Users } from "./Pages"
import Products from "./Pages/Products";

const Routes = () => {
    return (
      <Router>
        <Header></Header>
        <Switch>
            <Route exact component={Posts} path="/" />
            <Route exact component={Users} path="/Users" />
            <Route exact component={Products} path="/Products" />
        </Switch>
      </Router>
    );
  };
  
  export default Routes;