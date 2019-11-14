import React, { useState, useCallback, useEffect } from 'react'
import ExcersiseWrapper from '../ExcersiseWrapper'
import { ActionType } from 'src/actions/ActionInterfaces'
import { resetScore } from 'src/actions'
import { connect } from 'react-redux'
import ExcersiseFinished from 'src/components/ExcersiseFinished'
import { Dispatch } from 'redux'
import { offNoteExcersises } from './offNoteExcersises'
import OffNoteExcersiseContent from './offNoteExcersiseContent'

type Props = {
    resetScore: () => void
}

const OffNoteExcersise = ({resetScore}: Props) => {
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
    
    return (
        <ExcersiseWrapper>
            {
                excersiseNumber !== offNoteExcersises.length ?
                    <OffNoteExcersiseContent
                        excersise={offNoteExcersises[excersiseNumber]}
                        giveAnswer={giveAnswer}
                        givenAnswer={givenAnswer}
                        isLastExcersise={excersiseNumber === offNoteExcersises.length}
                        goNextQuestion={goNextQuestion}
                        repeats={3} 
                    />
                    : <ExcersiseFinished />
            }
        </ExcersiseWrapper>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    resetScore: () => dispatch(resetScore())
})

export default connect(null,mapDispatchToProps)(OffNoteExcersise)