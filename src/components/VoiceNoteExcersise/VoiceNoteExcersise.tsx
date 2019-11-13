import React, { useState, useEffect, Dispatch, useCallback } from 'react'
import VoiceNoteExcersiseWrapper from './VoiceNoteExcersiseWrapper'
import VoiceNoteExcersiseContent from './VoiceNoteExcersiseContent'
import { ActionType } from 'src/actions/ActionInterfaces'
import { resetScore } from 'src/actions'
import { connect } from 'react-redux'
import {voiceNoteExcersises} from './voiceNoteExcersise'
import ExcersiseFinished from 'src/components/ExcersiseFinished'

type Props = {
    resetScore: () => void
}

const VoiceNoteExcersise = ({resetScore}: Props) => {
    const [givenAnswer, setgivenAnswer] = useState<string | undefined>(undefined)
    const [excersiseNumber, setExcersiseNumber] = useState<number>(0)
    const memoizedResetScore = useCallback(() => {
        resetScore()
    }, [resetScore])

    useEffect(() => {
        memoizedResetScore()
    }, [memoizedResetScore])
    const giveAnswer = (answer: string) => !givenAnswer && setgivenAnswer(answer)
    
    const goNextQuestion = () => {
        setgivenAnswer(undefined)
        setExcersiseNumber(excersiseNumber + 1)
    }
    
    return(
        <VoiceNoteExcersiseWrapper>
            {
                excersiseNumber !== voiceNoteExcersises.length ?
                    <VoiceNoteExcersiseContent
                        excersise={voiceNoteExcersises[excersiseNumber]}
                        giveAnswer={giveAnswer}
                        givenAnswer={givenAnswer}
                        isLastExcersise={excersiseNumber === voiceNoteExcersises.length}
                        goNextQuestion={goNextQuestion}
                        repeats={3}
                    />
                    : <ExcersiseFinished />
            }
        </VoiceNoteExcersiseWrapper>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    resetScore: () => dispatch(resetScore())
})

export default connect(null,mapDispatchToProps)(VoiceNoteExcersise)