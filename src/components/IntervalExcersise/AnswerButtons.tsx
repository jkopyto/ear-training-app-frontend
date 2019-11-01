import React from 'react'
import intervalAnswers from 'src/util/intervalAnswers'
import { injectIntl, InjectedIntl } from 'react-intl'
import Button from 'src/components/Button'
import { Answers, answersArray } from './answerType'
import {getAnswers} from './getAnswers'

type Props = {
    intl: InjectedIntl
    rightAnswer: Answers
}

const AnswerButtons = ({ intl, rightAnswer}: Props) => {
    const answers = getAnswers(rightAnswer)
    return (
    <div className = "m-grid__item i-interval-answers">
        {
            answers.map((answer) => (
                <Button>{intl.formatMessage(intervalAnswers[answer])}</Button>
            ))
        }
    </div>
)}

export default injectIntl(AnswerButtons)