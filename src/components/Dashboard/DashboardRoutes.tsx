import React from 'react'
import {Route, Switch} from 'react-router-dom'
import IntervalExcersise from 'src/components/IntervalExcersise'

type Props = {
    currentURL: string
}

const DashboardRoutes = ({currentURL}: Props) => (
    <Switch>
        <Route
            path={`${currentURL}/intervals`}
            component={IntervalExcersise}
        />
    </Switch>
)

export default DashboardRoutes