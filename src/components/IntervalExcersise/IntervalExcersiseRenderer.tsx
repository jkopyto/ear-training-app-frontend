import React, { useEffect, Dispatch, useState } from 'react'
import IntervalExcersiseWrapper from './IntervalExcersiseWrapper'
import AnswerButtons from './AnswerButtons'
import vexFlowRenderer from './vexFlowRenderer'
import PlayInstrument from './PlayInstrument'
import { Excersise } from './excersise1'
import { Button } from '@blueprintjs/core'
import commonMessages from 'src/util/commonMessages'
import { InjectedIntl, injectIntl } from 'react-intl'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { RouteBuilder } from 'src/views/routes'
import ExcersiseFinished from './ExcersiseFinished'
import { addIntervalScore } from 'src/actions'
import { ActionType } from 'src/actions/ActionInterfaces'
import { connect } from 'react-redux'
import { AppState } from 'src/store'


type Props = {
    intl: InjectedIntl
    excersise: Excersise
    givenAnswer?: string
    isLastExcersise: boolean
    className?: string
    addIntervalScore: () => void
    goNextQuestion: () => void
    giveAnswer: (answer: string) => void
} & RouteComponentProps

const IntervalExcersise = ({ intl, excersise, isLastExcersise, goNextQuestion, giveAnswer, className, history, givenAnswer, addIntervalScore}:Props) => {
    const [isScoreAdded, setScoreAdded] = useState<boolean>(false)
    
    const renderVexFlow = () => !isLastExcersise && 
        vexFlowRenderer(
            excersise.notes,
            excersise.playingSyle,
            givenAnswer
        )

    useEffect(() => {
        const scoreDiv = document.getElementById('score')
        if(scoreDiv) scoreDiv.innerHTML = ''
        renderVexFlow()
    }, [givenAnswer])

    useEffect(() => {
        givenAnswer === undefined && setScoreAdded(false)
    }, [givenAnswer])

    const addScore = () => {
        if(!isScoreAdded) {
            setScoreAdded(true)
            addIntervalScore()
        }
    }

    return (
        <IntervalExcersiseWrapper >
            {!isLastExcersise ? <>
                <div id="score" className={`m-grid__item i-interval__score ${className || ""}`} />
                <AnswerButtons
                    rightAnswer={excersise.rightAnswer} 
                    goNextQuestion={goNextQuestion}
                    giveAnswer={giveAnswer}
                    givenAnswer={givenAnswer}
                    onRightAnswer= {addScore}
                    />
                <PlayInstrument
                    isPlayButtonUnlocked={!givenAnswer}
                    notes={excersise.notes}
                    playStyle={excersise.playingSyle}
                    noteDuration={0.7}
                    numberOfRepeats={6} />
                <div className = "m-grid m-grid__item i-interval__navigate-buttons">    
                    <Button
                        onClick={() => history.push(RouteBuilder.toDashboard())}>
                        {intl.formatMessage(commonMessages.backToMain)}
                    </Button>
                    <Button 
                    disabled={!givenAnswer}
                    active={!givenAnswer}
                    onClick={goNextQuestion}>
                        {intl.formatMessage(commonMessages.nextExcersise)}
                    </Button>
                </div>
            </> : <ExcersiseFinished />
            }
        </IntervalExcersiseWrapper>
    )
}

const mapStateToProps = (state: AppState) => ({
    currentScore: state.IntervalScore.score
})

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    addIntervalScore: () => dispatch(addIntervalScore())
})

export default connect(mapStateToProps,mapDispatchToProps)(injectIntl(withRouter(IntervalExcersise)))