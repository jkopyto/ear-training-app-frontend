import React from 'react'
import IntervalExcersiseRenderer from './IntervalExcersiseRenderer'
import { excersises } from './excersise1'

type State = {
    givenAnswer?: string
    excersiseNumber: number
}

class IntervalExcersise extends React.Component<{},State> {
    state: State = {
        givenAnswer: undefined,
        excersiseNumber: 0
    }

    goNextQuestion = () => {
        this.setState({
            givenAnswer: undefined,
            excersiseNumber: this.state.excersiseNumber + 1
        })
    }
    
    giveAnswer = (answer: string) => {
        !this.state.givenAnswer &&
        this.setState({
            givenAnswer: answer
        })
    }

    render() {
        return (
            <IntervalExcersiseRenderer
                excersise={excersises[this.state.excersiseNumber]}
                givenAnswer={this.state.givenAnswer}
                isLastExcersise={this.state.excersiseNumber + 1 === excersises.length}
                goNextQuestion={this.goNextQuestion}
                giveAnswer={this.giveAnswer} />
        )
    }
}

export default IntervalExcersise