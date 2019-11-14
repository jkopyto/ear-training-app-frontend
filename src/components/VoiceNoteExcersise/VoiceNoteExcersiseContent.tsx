import React, { useEffect, useState, Dispatch, useCallback } from 'react'
import "react-jinke-music-player/assets/index.css"
import { FormattedMessage, injectIntl, InjectedIntlProps, defineMessages } from 'react-intl'
import messages from 'src/util/instruments'
import VoiceNoteExcersisePianoKeyboard from './VoiceNoteExcersisePianoKeyboard'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { VoiceNoteExcersise } from '../@types/voiceNoteExcersise'
import { ActionType } from 'src/actions/ActionInterfaces'
import { addScore } from 'src/actions'
import { connect } from 'react-redux'
import MusicPlayer from '../MusicPlayer/MusicPlayer'
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
    repeats: number
    givenAnswer?: string
} & InjectedIntlProps & RouteComponentProps


const VoiceNoteExcersiseContent = ({ intl, repeats, addScore, excersise, goNextQuestion, giveAnswer, givenAnswer }: Props) => {
    const [isScoreAdded, setScoreAdded] = useState<boolean>(false)
    const [repeatsLeft, setRepeats] = useState<number>(repeats)

    const resetRepeats = useCallback(() => { setRepeats(repeats) }, [repeats])
    useEffect(() => {
        if (excersise) resetRepeats()
    }, [excersise, resetRepeats])
    
    useEffect(()=>{
        givenAnswer === undefined && setScoreAdded(false)
    }, [givenAnswer])

    const addExcersiseScore = () => {
        if (!isScoreAdded) {
            setScoreAdded(true)
            addScore()
        }
    }
    const decreaseRepeats = () => {
        setRepeats(repeatsLeft-1)
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
            <div className="m-grid m-grid__item--center">
                <FormattedMessage
                    id="repeats-left-voiceNote"
                    defaultMessage={`Repeats left: {left}`}
                    values={
                        {
                            left: repeatsLeft
                        }
                    }
                />
            </div>
            <MusicPlayer 
                title={excersise.title}
                cover={excersise.cover}
                backendTitle={excersise.backendTitle}
                onAudioStop={decreaseRepeats}
                showPlay={repeatsLeft!==0 || !givenAnswer}
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