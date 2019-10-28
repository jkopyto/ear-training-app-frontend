import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { RouteBuilder } from 'views/routes'
import Dashboard from './Dashboard'

const App = () => 
    <>
        <Switch>
            <Route
                path="/dashboard"
                component={Dashboard}
            />
            <Redirect
                exact
                from="/"
                to={RouteBuilder.toDashboard()}
            />
        </Switch>
    </>

export default App