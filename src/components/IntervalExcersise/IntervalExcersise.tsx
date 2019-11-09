import React, { useState } from 'react'
import IntervalExcersiseRenderer from './IntervalExcersiseRenderer'
import { excersises } from './excersise1'

const IntervalExcersise = () => {
    const [isGivenAnswer, setIsGivenAnswer] = useState<string | undefined>(undefined)
    const [excersiseNumber, setExcersiseNumber] = useState<number>(0)

    const goNextQuestion = () => {
        setIsGivenAnswer(undefined)
        setExcersiseNumber(excersiseNumber +1)
    }
    const giveAnswer = (answer: string) => !isGivenAnswer && setIsGivenAnswer(answer)
    
    return (
        <IntervalExcersiseRenderer
            excersise={excersises[excersiseNumber]}
            givenAnswer={isGivenAnswer}
            isLastExcersise={excersiseNumber + 1 === excersises.length}
            goNextQuestion={goNextQuestion}
            giveAnswer={giveAnswer} />
    )
}

export default IntervalExcersise