import React from "react";
import Main from "../components/main";
import {Router, Route, useRouterHistory, IndexRedirect} from 'react-router';
import { createHistory, useBasename } from 'history';

const browserHistory = useRouterHistory(useBasename(createHistory))({ basename: '/' });

export default React.createClass({
    render() {
        return(
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                </Route>
            </Router>
        )
    }
});