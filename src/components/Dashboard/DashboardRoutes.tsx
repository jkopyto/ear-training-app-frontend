import React from 'react'
import {Route, Switch} from 'react-router-dom'
import IntervalExcersise from 'src/components/IntervalExcersise'
import VoiceNoteExcersise from 'src/components/VoiceNoteExcersise'
import OffNoteExcersise from 'src/components/OffNoteExcersise'

type Props = {
    currentURL: string
}

const DashboardRoutes = ({currentURL}: Props) => (
    <Switch>
        <Route
            path={`${currentURL}/intervals`}
            component={IntervalExcersise}
        />
        <Route
            path={`${currentURL}/voiceNote`}
            component={VoiceNoteExcersise}
        />
        <Route
            path={`${currentURL}/off-note`}
            component={OffNoteExcersise}
        />
    </Switch>
)

export default DashboardRoutes