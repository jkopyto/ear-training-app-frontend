import React from 'react'
import TaskCard from '../TaskCard'
import { Elevation } from '@blueprintjs/core'
import DashboardContentWrapper from './DashboardContentWrapper'
import { RouteBuilder } from 'src/views/routes'
import {withRouter, RouteComponentProps } from 'react-router-dom'
import DashboardRoutes from './DashboardRoutes'
import Header from 'src/components/Header'
import {excersiseTitles, excersiseDescriptions} from './tasks'
import { injectIntl, InjectedIntlProps } from 'react-intl'

const Dashboard = ({ match, intl}: RouteComponentProps & InjectedIntlProps) => (
    <div className= "m-grid i-dashboard-container">
        <Header />
        <div className= "m-grid m-grid__item--center m-grid--hor i-dashboard-content">
            { match.isExact ? 
                <DashboardContentWrapper>
                    <TaskCard
                        title={intl.formatMessage(excersiseTitles.first)}
                        description={intl.formatMessage(excersiseDescriptions.interval)}
                        elevationLevel={Elevation.THREE}
                        excersisePath={RouteBuilder.toIntervals()} />
                    <TaskCard
                        title={intl.formatMessage(excersiseTitles.second)}
                        description={intl.formatMessage(excersiseDescriptions.voiceNote)}
                        elevationLevel={Elevation.THREE}
                        excersisePath={RouteBuilder.toVoiceNote()} />
                    <TaskCard
                        title={intl.formatMessage(excersiseTitles.third)}
                        description={intl.formatMessage(excersiseDescriptions.offNote)}
                        elevationLevel={Elevation.THREE}
                        excersisePath={RouteBuilder.toOffNote()} />
                    <TaskCard
                        title={intl.formatMessage(excersiseTitles.fourth)}
                        description={intl.formatMessage(excersiseDescriptions.enharmonic)}
                        elevationLevel={Elevation.THREE}
                        excersisePath={RouteBuilder.toEnharmonics()} />
                </DashboardContentWrapper> : null
            }
            <DashboardRoutes currentURL={match.url} />
        </div>
    </div>
)

export default withRouter(injectIntl(Dashboard))