import React, { Dispatch, useState, useCallback, useEffect } from 'react'
import { Excersise } from '../@types/excersise'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { ActionType } from 'src/actions/ActionInterfaces'
import { addScore } from 'src/actions'
import { connect } from 'react-redux'
import ExcersiseNavigationButtons from '../ExcersiseNavigationButtons'

type Props= {
    children: (
        excersise: Excersise,
        addExcersiseScore: () => void,
        giveAnswer: (answer: string) => void,
        repeatsLeft: number,
        decreaseRepeats: () => void,
        givenAnswer?: string
    ) => JSX.Element
    excersise: Excersise
    isLastExcersise: boolean
    goNextQuestion: () => void
    giveAnswer: (answer: string) => void
    addScore: () => void
    repeats: number
    givenAnswer?: string
} & RouteComponentProps

const ExcersiseContent = ({ children, repeats, addScore, excersise, goNextQuestion, giveAnswer, givenAnswer }: Props)=> {
    const [isScoreAdded, setScoreAdded] = useState<boolean>(false)
    const [repeatsLeft, setRepeats] = useState<number>(repeats)

    const resetRepeats = useCallback(() => {
        setRepeats(repeats)
    }, [repeats])

    useEffect(() => {
        if (givenAnswer === undefined) {
            setScoreAdded(false)
            resetRepeats()
        }
    }, [givenAnswer, resetRepeats])

    const addExcersiseScore = () => {
        if (!isScoreAdded) {
            setScoreAdded(true)
            addScore()
        }
    }
    const decreaseRepeats = () => {
        setRepeats(repeatsLeft - 1)
    }
    return(
        <>
            {
                children(excersise, addExcersiseScore, giveAnswer, repeatsLeft, decreaseRepeats, givenAnswer)
            }
            <ExcersiseNavigationButtons
                isAnswerGiven={!!givenAnswer}
                goNextQuestion={goNextQuestion}
            />
       </> 
    )
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    addScore: () => dispatch(addScore())
})

export default connect(null, mapDispatchToProps)(withRouter(ExcersiseContent))