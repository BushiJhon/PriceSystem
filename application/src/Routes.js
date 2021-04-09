import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './App';
import Login from './user-authentication/user-login/Login';
import Register from './user-authentication/user-register/Register';
import Complete from './user-information-management/user-complete/InformationComplete';
import Modify from './user-information-management/user-modify/InformationModify';
import Write from './post-write/post-write/Write';
import Management from './post-write/post-management/Management';
import Recommend from "./recommend/Recommend";


const history = browserHistory;
const Routes = () => (
    <Router history={history}>
        <Route path={"/"} component={App}>
            <IndexRoute component={Login}/>
            <Route path={"login"} component={Login}/>
            <Route path={"register"} component={Register}/>
            <Route path={"complete"} component={Complete}/>
            <Route path={"modify"} component={Modify}/>
            <Route path={"write"} component={Write}/>
            <Route path={"management"} component={Management}/>
            <Route path={"recommend"} component={Recommend}></Route>
        </Route>
    </Router>
);

export default Routes;

