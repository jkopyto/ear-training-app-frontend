import React from 'react'
import TaskCard from '../TaskCard'
import { Elevation } from '@blueprintjs/core'
import DashboardContentWrapper from './DashboardContentWrapper'
import { RouteBuilder } from 'src/views/routes'
import {withRouter, RouteComponentProps } from 'react-router-dom'
import DashboardRoutes from './DashboardRoutes'
import Header from 'src/components/Header'

const Dashboard = ({ match }: RouteComponentProps) => (
    <div className= "m-grid i-dashboard-container">
        <Header />
        <div className= "m-grid m-grid__item--center m-grid--hor i-dashboard-content">
            { match.isExact ? 
                <DashboardContentWrapper>
                    <TaskCard
                        title={"Pierwsze zadanie"}
                        description={"Rozpocznij swoje pierwsze zadanie"}
                        elevationLevel={Elevation.THREE}
                        excersisePath={RouteBuilder.toIntervals()} />
                    <TaskCard
                        title={"Drugie zadanie"}
                        description={"Rozpocznij swoje drugie zadanie"}
                        elevationLevel={Elevation.THREE}
                        excersisePath={RouteBuilder.toVoiceNote()} />
                </DashboardContentWrapper> : null
            }
            <DashboardRoutes currentURL={match.url} />
        </div>
    </div>
)

export default withRouter(Dashboard)