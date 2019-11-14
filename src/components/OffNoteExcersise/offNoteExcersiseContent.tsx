import React, { useState, useEffect, Dispatch, useCallback } from 'react'
import { InjectedIntlProps, FormattedMessage, injectIntl } from 'react-intl'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import VoiceNoteExcersisePianoKeyboard from '../VoiceNoteExcersise/VoiceNoteExcersisePianoKeyboard'
import MusicPlayer from '../MusicPlayer/MusicPlayer'
import ExcersiseNavigationButtons from '../ExcersiseNavigationButtons'
import { OffNoteExcersise } from '../@types/offNoteExcersise'
import instruments from 'src/util/instruments'
import keys from 'src/util/keys'
import { ActionType } from 'src/actions/ActionInterfaces'
import { addScore } from 'src/actions'
import { connect } from 'react-redux'

type Props = {
    excersise: OffNoteExcersise
    isLastExcersise: boolean
    goNextQuestion: () => void
    giveAnswer: (answer: string) => void
    addScore: () => void
    repeats: number
    givenAnswer?: string
} & InjectedIntlProps & RouteComponentProps

const OffNoteExcersiseContent = ({ intl, repeats, addScore, excersise, goNextQuestion, giveAnswer, givenAnswer }: Props) => {
    const [isScoreAdded, setScoreAdded] = useState<boolean>(false)
    const [repeatsLeft, setRepeats] = useState<number>(repeats)
    const resetRepeats = useCallback(() => {setRepeats(repeats)},[repeats])
    useEffect(()=>{
        if(excersise) resetRepeats()
    },[excersise, resetRepeats])

    useEffect(() => {
        givenAnswer === undefined && setScoreAdded(false)
    }, [givenAnswer])

    const addExcersiseScore = () => {
        if (!isScoreAdded) {
            setScoreAdded(true)
            addScore()
        }
    }
    const decreaseRepeats = () => {
        setRepeats(repeatsLeft - 1)
    }

    return (
        <>  
            <FormattedMessage 
                id="off-note-description"
                defaultMessage="You will hear the song {title} in key {key}{br} In {instrument} part you can hear an off-note sound. Find it and press the right key on piano keyboard"
                values={{
                    title: <strong>{excersise.title}</strong>,
                    instrument: <strong>{intl.formatMessage(instruments[excersise.instrument])}</strong>,
                    key: <strong>{intl.formatMessage(keys[excersise.key])}</strong>,
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
                showPlay={repeatsLeft !== 0 || !givenAnswer}
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

export default connect(null, mapDispatchToProps)(withRouter(injectIntl(OffNoteExcersiseContent)))