import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import AddPollPage from '../components/AddPollPage';
import CreatePage from '../components/CreatePage';
import EditPollPage from '../components/EditPollPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import ViewPollPage from '../components/ViewPollPage';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} exact={true} />
        <PrivateRoute path="/dashboard/add-poll" component={AddPollPage} exact={true} />
        <PrivateRoute path="/dashboard/polls/:id" component={ViewPollPage} exact={true} />
        <PrivateRoute path="/dashboard/polls/:id/edit" component={EditPollPage} exact={true} />
        <PrivateRoute path="/dashboard/polls/add" component={CreatePage} exact={true} />
        <PrivateRoute path="/dashboard/polls/edit" component={EditPollPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
