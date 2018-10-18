import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    Home,
} from '../pages';

const AppNavigator = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Home" component={Quiz} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
);

export { AppNavigator };
