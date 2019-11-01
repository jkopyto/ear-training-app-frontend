import React from 'react'
import IntervalExcersiseWrapper from './IntervalExcersiseWrapper'
import AnswerButtons from './AnswerButtons'
import vexFlowRenderer from './vexFlowRenderer'
import PlayInstrument from './PlayInstrument'
import { excersises } from './excersise1'

class IntervalExcersise extends React.Component {
    state = {
        excersiseNumber: 0,
        answeredQuestion: false
    }

    componentDidMount(){
        vexFlowRenderer(
            excersises[this.state.excersiseNumber].notes,
            excersises[this.state.excersiseNumber].playingSyle,
            this.state.answeredQuestion
        )
    }

    render(){
        const excersise = excersises[this.state.excersiseNumber]
        return (
            <IntervalExcersiseWrapper >
                <>
                    <div id="score" className="m-grid__item i-interval__score" />
                    <AnswerButtons 
                        rightAnswer={excersise.rightAnswer}/>
                    <PlayInstrument
                        notes={excersise.notes}
                        singleNoteDuration={0.7}
                        numberOfRepeats={6} />
                </>
            </IntervalExcersiseWrapper>
        )
    }
    
}

export default IntervalExcersise