import React from 'react'
import TaskCard from '../TaskCard'
import { Elevation } from '@blueprintjs/core'
import DashboardContentWrapper from './DashboardContentWrapper'

const Dashboard = () => (
    <div className= "m-grid m-grid__item--center i-container">
        <DashboardContentWrapper>
            <TaskCard
                title="Pierwsze zadanie"
                description={"Rozpocznij swoje pierwsze zadanie"}
                elevationLevel={Elevation.THREE} />
            <TaskCard
                title="Pierwsze zadanie"
                description={"Rozpocznij swoje pierwsze zadanie"}
                elevationLevel={Elevation.THREE} />
            <TaskCard
                title="Pierwsze zadanie"
                description={"Rozpocznij swoje pierwsze zadanie"}
                elevationLevel={Elevation.THREE} />
            <TaskCard
                title="Pierwsze zadanie"
                description={"Rozpocznij swoje pierwsze zadanie"}
                elevationLevel={Elevation.THREE} />
            <TaskCard
                title="Pierwsze zadanie"
                description={"Rozpocznij swoje pierwsze zadanie"}
                elevationLevel={Elevation.THREE} />
            <TaskCard
                title="Pierwsze zadanie"
                description={"Rozpocznij swoje pierwsze zadanie"}
                elevationLevel={Elevation.THREE} />
        </DashboardContentWrapper>
    </div>
)

export default Dashboard