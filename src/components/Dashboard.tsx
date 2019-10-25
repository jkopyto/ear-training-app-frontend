import React from 'react'
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom'
// import { RouteBuilder } from './routes'

const Dashboard = () => (
    <Router>
        <Switch>
            <Route
                exact
                path={`/test`}
                render={()=> null}/>
        </Switch>
    </Router>
)

export default Dashboard