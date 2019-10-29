import React from 'react'
import IntervalExcersiseWrapper from './IntervalExcersiseWrapper'
import AnswerButtons from './AnswerButtons'
import vexFlowRenderer from './vexFlowRenderer'
import PlayInstrument from './PlayInstrument'

class IntervalExcersise extends React.Component {
    componentDidMount(){
        vexFlowRenderer()
    }

    render(){
        return (
            <IntervalExcersiseWrapper>
                <div id="score" className="m-grid__item i-interval__score" />
                <AnswerButtons />
                <PlayInstrument
                    notes={["C#4", 'D4']}
                    singleNoteDuration = {0.7}
                    numberOfRepeats = {6}/>
            </IntervalExcersiseWrapper>
        )
    }
    
}

export default IntervalExcersise