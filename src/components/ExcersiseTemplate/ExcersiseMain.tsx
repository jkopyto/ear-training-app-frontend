import React, { useState, useEffect, Dispatch, useCallback } from 'react'
import ExcersiseWrapper from '../ExcersiseWrapper'
import ExcersiseContent from './ExcersiseContent'
import { ActionType } from 'src/actions/ActionInterfaces'
import { resetScore } from 'src/actions'
import { connect } from 'react-redux'
import ExcersiseFinished from 'src/components/ExcersiseFinished'
import { Excersise } from '../@types/excersise'

type Props = {
    children: (
        excersise: Excersise,
        addExcersiseScore: () => void,
        giveAnswer: (answer: string) => void,
        repeatsLeft: number,
        decreaseRepeats: () => void,
        givenAnswer?: string
    ) => JSX.Element
    excersise: Excersise[]
    repeats: number
    resetScore: () => void
}

const ExcersiseMain = ({ children, repeats, excersise, resetScore }: Props) => {
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
                excersiseNumber < excersise.length ?
                    <ExcersiseContent
                        excersise={excersise[excersiseNumber] as Excersise}
                        giveAnswer={giveAnswer}
                        givenAnswer={givenAnswer}
                        isLastExcersise={excersiseNumber < excersise.length}
                        goNextQuestion={goNextQuestion}
                        repeats={repeats}
                        children={children}
                    />
                    : <ExcersiseFinished />
            }
        </ExcersiseWrapper>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    resetScore: () => dispatch(resetScore())
})

export default connect(null, mapDispatchToProps)(ExcersiseMain)
