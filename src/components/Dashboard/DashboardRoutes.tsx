import React from 'react'
import {Route, Switch} from 'react-router-dom'
import IntervalExcersise from 'src/components/IntervalExcersise'
import VoiceNoteExcersises from 'src/components/VoiceNoteExcersises'
import OffNoteExcersises from 'src/components/OffNoteExcersise'
import EnharmonicExcersises from '../EnharmonicExcersises'

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
            component={VoiceNoteExcersises}
        />
        <Route
            path={`${currentURL}/off-note`}
            component={OffNoteExcersises}
        />
        <Route
            path={`${currentURL}/enharmonics`}
            component={EnharmonicExcersises}
        />
    </Switch>
)

export default DashboardRoutes