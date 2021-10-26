import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import List from '../components/pages/List'
const ApplicationRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={'/list'} component={List}/>
      </Switch>
    </Router>
  ) 
}

export default ApplicationRoutes;