import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Projects from './projects/containers/Projects';
import Login from './users/Login';

export default (
  <main>
    <Router>
      <Switch>
        <Route
          path="/"
          component={Projects}
          exact
        />
        <Route
          path="/login"
          component={Login}
          exact
        />
      </Switch>
    </Router>
  </main>
);
