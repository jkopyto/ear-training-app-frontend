import React, { useEffect, useState } from 'react'
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


type Props = {
    intl: InjectedIntl
    excersise: Excersise
    givenAnswer?: string
    isLastExcersise: boolean
    goNextQuestion: () => void
    giveAnswer: (answer: string) => void
} & RouteComponentProps

const IntervalExcersise = ({intl, excersise, isLastExcersise, goNextQuestion, giveAnswer, history, givenAnswer}:Props) => {
    
    useEffect(() => {
        const scoreDiv = document.getElementById('score')
        if(scoreDiv) scoreDiv.innerHTML = ''
        !isLastExcersise && vexFlowRenderer(
            excersise.notes,
            excersise.playingSyle,
            givenAnswer
        )
    },[givenAnswer])

    
    return (
        <IntervalExcersiseWrapper >
            {!isLastExcersise ? <>
                <div id="score" className="m-grid__item i-interval__score" />
                <AnswerButtons
                    rightAnswer={excersise.rightAnswer} 
                    goNextQuestion={goNextQuestion}
                    giveAnswer={giveAnswer}
                    givenAnswer={givenAnswer}/>
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

export default injectIntl(withRouter(IntervalExcersise))