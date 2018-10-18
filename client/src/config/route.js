import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    Home,
    PostForm,
    Posts,
} from '../pages';

const AppNavigator = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/postform" component={PostForm} />
        <Route exact path="/posts" component={Posts} />
      </Switch>
    </Router>
);

export { AppNavigator };
