import React from 'react'
import TaskCard from '../TaskCard'
import { Elevation } from '@blueprintjs/core'
import DashboardContentWrapper from './DashboardContentWrapper'
import { RouteBuilder } from 'views/routes'
import {withRouter, RouteComponentProps } from 'react-router-dom'
import DashboardRoutes from './DashboardRoutes'

const Dashboard = ({ match }: RouteComponentProps) => (
    <div className= "m-grid m-grid__item--center i-container">
        { match.isExact ? 
            <DashboardContentWrapper>
                <TaskCard
                    title={"Pierwsze zadanie"}
                    description={"Rozpocznij swoje pierwsze zadanie"}
                    elevationLevel={Elevation.THREE}
                    excersisePath={RouteBuilder.toIntervals()} />
            </DashboardContentWrapper> : null
        }
        <DashboardRoutes currentURL={match.url} />
    </div>
)

export default withRouter(Dashboard)