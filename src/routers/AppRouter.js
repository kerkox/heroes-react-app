import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRouter = () => {

  const { user } = useContext(AuthContext)
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen}/>
          <PrivateRoutes isAuthenticated={user.logged} path="/" component={ DashboardRoutes }/>
          {/* <PrivateRoutes isAuthenticated={user.logged} path="*" component={ DashboardRoutes } /> */}
        </Switch>
      </div>
    </Router>
  );
}
