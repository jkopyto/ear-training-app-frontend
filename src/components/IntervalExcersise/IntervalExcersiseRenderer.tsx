import React, { useEffect, Dispatch, useState, useCallback } from 'react'
import ExcersiseWrapper from '../ExcersiseWrapper'
import AnswerButtons from './AnswerButtons'
import vexFlowRenderer from './vexFlowRenderer'
import PlayInstrument from './PlayInstrument'
import { Excersise } from './excersise1'
import ExcersiseFinished from '../ExcersiseFinished'
import { addScore } from 'src/actions'
import { ActionType } from 'src/actions/ActionInterfaces'
import { connect } from 'react-redux'
import ExcersiseNavigationButtons from 'src/components/ExcersiseNavigationButtons'

type Props = {
    excersise: Excersise
    givenAnswer?: string
    isLastExcersise: boolean
    className?: string
    addScore: () => void
    goNextQuestion: () => void
    giveAnswer: (answer: string) => void
}

const IntervalExcersise = ({ excersise, isLastExcersise, goNextQuestion, giveAnswer, className, givenAnswer, addScore}:Props) => {
    const [isScoreAdded, setScoreAdded] = useState<boolean>(false)
    
    const renderVexFlow = useCallback(
        () => {
            !isLastExcersise && vexFlowRenderer(
            excersise.notes,
            excersise.playingSyle,
            givenAnswer
        )
        },[excersise,givenAnswer, isLastExcersise]
    )

    useEffect(() => {
        const scoreDiv = document.getElementById('score')
        if(scoreDiv) scoreDiv.innerHTML = ''
        renderVexFlow()
    })

    useEffect(() => {
        givenAnswer === undefined && setScoreAdded(false)
    }, [givenAnswer])

    const addExcersiseScore = () => {
        if(!isScoreAdded) {
            setScoreAdded(true)
            addScore()
        }
    }

    return (
        <ExcersiseWrapper className="i-interval-wrapper m-grid__item m-grid__item--center" >
            {!isLastExcersise ? <>
                <div id="score" className={`m-grid__item i-interval__score ${className || ""}`} />
                <AnswerButtons
                    rightAnswer={excersise.rightAnswer} 
                    giveAnswer={giveAnswer}
                    givenAnswer={givenAnswer}
                    onRightAnswer={addExcersiseScore}
                    />
                <PlayInstrument
                    isPlayButtonUnlocked={!givenAnswer}
                    notes={excersise.notes}
                    playStyle={excersise.playingSyle}
                    noteDuration={0.7}
                    numberOfRepeats={6} />
                <ExcersiseNavigationButtons 
                    isAnswerGiven={!!givenAnswer}
                    goNextQuestion={goNextQuestion}
                />
            </> : <ExcersiseFinished />
            }
        </ExcersiseWrapper>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    addScore: () => dispatch(addScore())
})

export default connect(null,mapDispatchToProps)(IntervalExcersise)