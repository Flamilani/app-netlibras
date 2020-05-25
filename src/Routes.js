import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Movies from './pages/Movies';
import Register from './pages/Register';
import Profiles from './pages/Profiles';

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/perfils">
                <Profiles />
            </Route>
            <Route exact path="/filmes">
                <Movies />
            </Route>
            <Route exact path="/cadastro">
                <Register />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}