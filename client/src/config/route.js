import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    Home,
    PostForm,
    PostInfo,
} from '../pages';

const AppNavigator = () => (
    <Router>
      <Switch>
        <Route exact path="/" render={()=> <Home lorf={"found"} />} />
        <Route exact path="/lost" render={()=> <Home lorf={"lost"} />} />
        <Route exact path="/found" render={()=> <Home lorf={"found"} />}/>
        <Route exact path="/postform" component={PostForm} />
        <Route exact path="/postinfo" component={PostInfo} />
      </Switch>
    </Router>
);

export { AppNavigator };
