import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, PostForm, Info } from '../pages';

const AppNavigator = () => (
	<Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/postform" component={PostForm} />
        <Route exact path="/info" component={Info} />
      </Switch>
    </Router>
);

export { AppNavigator };