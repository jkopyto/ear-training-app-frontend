import React from 'react'
import intervalAnswers from 'src/util/intervalAnswers'
import { injectIntl, InjectedIntl } from 'react-intl'
import Button from 'src/components/Button'

type Props = {
    intl: InjectedIntl
}

const AnswerButtons = ({intl}: Props) => (
    <div className = "m-grid__item i-interval-answers">
        <Button>{intl.formatMessage(intervalAnswers.minorSecond)}</Button>
        <Button>{intl.formatMessage(intervalAnswers.octave)}</Button>
        <Button>{intl.formatMessage(intervalAnswers.majordThird)}</Button>
        <Button>{intl.formatMessage(intervalAnswers.fifth)}</Button>
    </div>
)

export default injectIntl(AnswerButtons)