import React, { useState, useEffect } from 'react'
import intervalAnswers from 'src/util/intervalAnswers'
import { injectIntl, WrappedComponentProps } from 'react-intl'
import Button from 'src/components/Button'
import { Answers } from '../@types/answerType'
import { getAnswers } from './getAnswers'
import { setIntent } from './setButtonIntent'

type Props = {
    rightAnswer: Answers
    givenAnswer?: string
    onRightAnswer: () => void
    giveAnswer: (answer: string) => void
}& WrappedComponentProps

const AnswerButtons = ({ intl, rightAnswer, givenAnswer, giveAnswer, onRightAnswer}: Props) => {
    const [answers, setAnswers] = useState<Answers[]>(getAnswers(rightAnswer))

    useEffect(() => {
        setAnswers(getAnswers(rightAnswer))
    },[rightAnswer])

    return(
        <div className="m-grid__item i-interval-answers">
            {
                answers.map((answer) => (
                    <Button
                        className={answer}
                        key={answer}
                        intent={setIntent(
                            rightAnswer,
                            answer,
                            givenAnswer,
                            onRightAnswer
                        )}
                        onClick={() => {
                            giveAnswer(answer)
                        }}
                    >{intl.formatMessage(intervalAnswers[answer])}</Button>
                ))
            }
        </div>
    )
}
export default injectIntl(AnswerButtons)