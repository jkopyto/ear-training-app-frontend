import React, { useEffect, useState, Dispatch } from 'react'
import "react-jinke-music-player/assets/index.css"
import { FormattedMessage, injectIntl, InjectedIntlProps, defineMessages } from 'react-intl'
import messages from 'src/util/instruments'
import VoiceNoteExcersisePianoKeyboard from './VoiceNoteExcersisePianoKeyboard'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import {VoiceNoteExcersise} from './voiceNoteExcersise'
import { ActionType } from 'src/actions/ActionInterfaces'
import { addScore } from 'src/actions'
import { connect } from 'react-redux'
import MusicPlayer from './MusicPlayer'
import ExcersiseNavigationButtons from 'src/components/ExcersiseNavigationButtons'

const voiceNoteExcersiseMessages = defineMessages({
    highest: {
        id: "highest",
        defaultMessage: "highest"
    },
    lowest: {
        id: "lowest",
        defaultMessage: "lowest"
    }
})

type Props = {
    excersise: VoiceNoteExcersise
    isLastExcersise: boolean
    goNextQuestion: () => void
    giveAnswer: (answer: string) => void
    addScore: () => void
    givenAnswer?: string
} & InjectedIntlProps & RouteComponentProps


const VoiceNoteExcersiseContent = ({ intl, addScore, excersise, goNextQuestion, giveAnswer, givenAnswer }: Props) => {
    const [isScoreAdded, setScoreAdded] = useState<boolean>(false)

    useEffect(()=>{
        givenAnswer === undefined && setScoreAdded(false)
    }, [givenAnswer])

    const addExcersiseScore = () => {
        if (!isScoreAdded) {
            setScoreAdded(true)
            addScore()
            console.log("Wykonuje sie")
        }
    }
    
    return(
        <>
            <FormattedMessage 
                id="voice-note-description"
                defaultMessage="You will hear the song {title}{br}{instrument} part starts from {startingNote} ({voicePosition} voice){br}{br} What is the {excersiseNotePosition} sound played by {instrument}?"
                values= {{
                    title: <><strong>{excersise.title}</strong><br/></>,
                    instrument: <strong>{intl.formatMessage(messages[excersise.instrument])}</strong>,
                    startingNote: <strong>{excersise.startingVoiceNote}</strong>,
                    voicePosition: <strong>{intl.formatMessage(voiceNoteExcersiseMessages[excersise.givenVoicePosition])}</strong>,
                    excersiseNotePosition: <strong>{intl.formatMessage(voiceNoteExcersiseMessages[excersise.excersiseNotePosition])}</strong>,
                    br: <br />
                }}
                />
            <VoiceNoteExcersisePianoKeyboard 
                rightAnswer={excersise.rightAnswer}
                givenAnswer={givenAnswer}
                onRightAnswer={addExcersiseScore}
                giveAnswer={giveAnswer}
            />
            <MusicPlayer 
                title={excersise.title}
                cover={excersise.cover}
                backendTitle={excersise.backendTitle}
            />
            <ExcersiseNavigationButtons
                isAnswerGiven={!!givenAnswer}
                goNextQuestion={goNextQuestion}
            />
        </>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    addScore: () => dispatch(addScore())
})

export default connect(null, mapDispatchToProps)(injectIntl(withRouter(VoiceNoteExcersiseContent)))