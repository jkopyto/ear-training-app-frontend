import React, { useState, useEffect, Dispatch, useCallback } from 'react'
import IntervalExcersiseRenderer from './IntervalExcersiseRenderer'
import { excersises } from './excersise1'
import { resetScore } from 'src/actions'
import { ActionType } from 'src/actions/ActionInterfaces'
import { connect } from 'react-redux'

type Props = {
    resetScore: () => void
}

const IntervalExcersise = ({ resetScore}: Props) => {
    const [isGivenAnswer, setIsGivenAnswer] = useState<string | undefined>(undefined)
    const [excersiseNumber, setExcersiseNumber] = useState<number>(0)
    const memoizedResetScore = useCallback(()=> {
        resetScore()
    },[resetScore])

    useEffect(()=>{
        memoizedResetScore()
    }, [memoizedResetScore])

    const goNextQuestion = () => {
        setIsGivenAnswer(undefined)
        setExcersiseNumber(excersiseNumber +1)
    }
    const giveAnswer = (answer: string) => !isGivenAnswer && setIsGivenAnswer(answer)
    
    return (
        <IntervalExcersiseRenderer
            excersise={excersises[excersiseNumber]}
            givenAnswer={isGivenAnswer}
            isLastExcersise={excersiseNumber === excersises.length}
            goNextQuestion={goNextQuestion}
            giveAnswer={giveAnswer}
            className={isGivenAnswer && excersises[excersiseNumber].playingSyle === "melodic" ? "i-interval__score--expand" : ""} />
    )
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    resetScore: () => dispatch(resetScore())
})

export default connect(null,mapDispatchToProps)(IntervalExcersise)