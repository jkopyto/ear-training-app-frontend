import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { RouteBuilder } from 'views/routes'
import Dashboard from './Dashboard'

const App = () => 
    <Router>
        <Route
            exact
            path="/dashboard"
            component={Dashboard}
        />
        <Redirect
            exact
            from = "/"
            to={RouteBuilder.toDashboard()} 
        />
    </Router>

export default App