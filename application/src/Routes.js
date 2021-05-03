import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './App';
import Home from './home/Home';
import Login from './login/Login';
import Write from './post/Write';
import Set from './user/Set';
import Index from './user/Index';
import Show from './post/Show';
import Search from './search/Search';

const history = browserHistory;
const Routes = () => (
    <Router history={history}>
        <Route path={"/"} component={App}>
            <IndexRoute component={Home}/>
            <Route path={"login"} component={Login}/>
            <Route path={"write"} component={Write}/>
            <Route path={"set"} component={Set}/>
            <Route path={"index"} component={Index}></Route>
            <Route path={"show"} component={Show}></Route>
            <Route path={"search"} component={Search}></Route>
        </Route>
    </Router>
);

export default Routes;

