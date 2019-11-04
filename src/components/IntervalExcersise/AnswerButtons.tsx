import React, { useState } from 'react'
import intervalAnswers from 'src/util/intervalAnswers'
import { injectIntl, InjectedIntl } from 'react-intl'
import Button from 'src/components/Button'
import { Answers } from './answerType'
import { getAnswers } from './getAnswers'
import { setIntent } from './setButtonIntent'

type Props = {
    intl: InjectedIntl
    rightAnswer: Answers
    givenAnswer?: string
    goNextQuestion: () => void
    giveAnswer: (answer: string) => void
}

const AnswerButtons = ({ intl, rightAnswer, givenAnswer, goNextQuestion, giveAnswer}: Props) => {
    const [answers] = useState(getAnswers(rightAnswer))

    return (
            <div className="m-grid__item i-interval-answers">
                {
                    answers.map((answer) => (
                        <Button
                            className={answer}
                            key={answer}
                            intent={setIntent(
                                rightAnswer,
                                answer,
                                givenAnswer
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