import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { RouteBuilder } from './routes'

const Dashboard = () => (
    <div className= "i-container">
        <Router>
            <Switch>
                <Route
                    exact
                    path={`/test`}
                    render={() => null} />
            </Switch>
        </Router>        
    </div>
)

export default Dashboard