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
        <Route exact path="/" render={()=> <Home lorf={"lost"} />} />
        <Route exact path="/lost" render={()=> <Home lorf={"lost"} />} />
        <Route exact path="/found" render={()=> <Home lorf={"found"} />}/>
        <Route exact path="/postform" component={PostForm} />
        <Route exact path="/lostitem/:id" render={({match})=> <PostInfo lorf={"lost"} match={match}/>} />
        <Route exact path="/founditem/:id" render={({match})=> <PostInfo lorf={"found"} match={match}/>} />
      </Switch>
    </Router>
);

export { AppNavigator };
