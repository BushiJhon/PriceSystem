import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './App';
import Login from './user-authentication/user-login/Login';
import Register from './user-authentication/user-register/Register';


const history = browserHistory;
const Routes = () => (
    <Router history={history}>
        <Route path={"/"} component={App}>
            <IndexRoute component={Login}/>
            <Route path={"login"} component={Login}/>
            <Route path={"register"} component={Register}/>
        </Route>
    </Router>
);

export default Routes;

