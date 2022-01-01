import React from 'react';
import { routeconfig } from './Route.config';
import {Route, Router} from 'react-router-dom'
import { history } from '../@history';
export default function Navigator () {
    return <Router history={history}>
        {
            routeconfig.map((val, index) => (
                <Route key={index} path={val.path} element={val.component}/>
            ))
        }
        </Router>
}