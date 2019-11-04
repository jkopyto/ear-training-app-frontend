import React from 'react'
import IntervalExcersiseWrapper from './IntervalExcersiseWrapper'
import AnswerButtons from './AnswerButtons'
import vexFlowRenderer from './vexFlowRenderer'
import PlayInstrument from './PlayInstrument'
import { Excersise } from './excersise1'
import { Button } from '@blueprintjs/core'
import commonMessages from 'src/util/commonMessages'
import { InjectedIntl, injectIntl } from 'react-intl'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { RouteBuilder } from 'src/views/routes'


type Props = {
    intl: InjectedIntl
    excersise: Excersise
    givenAnswer?: string
    isLastExcersise: boolean
    goNextQuestion: () => void
    giveAnswer: (answer: string) => void
} & RouteComponentProps

class IntervalExcersise extends React.Component<Props> {
    componentDidMount() {
        vexFlowRenderer(
            this.props.excersise.notes,
            this.props.excersise.playingSyle,
            this.props.givenAnswer
        )
    }

    render() {
        const {excersise} = this.props
        return (
            <IntervalExcersiseWrapper >
                <>
                    <div id="score" className="m-grid__item i-interval__score" />
                    <AnswerButtons
                        rightAnswer={excersise.rightAnswer} 
                        goNextQuestion = {this.props.goNextQuestion}
                        giveAnswer= {this.props.giveAnswer}
                        givenAnswer={this.props.givenAnswer}/>
                    <PlayInstrument
                        notes={excersise.notes}
                        singleNoteDuration={0.7}
                        numberOfRepeats={6} />
                    <div className = "m-grid m-grid__item i-interval__navigate-buttons">    
                        <Button
                            onClick={() => this.props.history.push(RouteBuilder.toDashboard())}>
                            {this.props.intl.formatMessage(commonMessages.backToMain)}
                        </Button>
                        <Button 
                        disabled={!this.props.givenAnswer}
                        active={!this.props.givenAnswer}
                        onClick={this.props.goNextQuestion}>
                            {this.props.intl.formatMessage(commonMessages.nextExcersise)}
                        </Button>
                    </div>
                </>
            </IntervalExcersiseWrapper>
        )
    }

}

export default injectIntl(withRouter(IntervalExcersise))