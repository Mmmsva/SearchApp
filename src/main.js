import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from 'react-router';


ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Homepage}/>
            <Route path="/blog/:category/:title" component={Blog}/>
            <Route path="/forum" component={Forum}/>
            <Route path="/videos" component={Videos}/>
        </Route>
    </Router>
), document.getElementById('app'));