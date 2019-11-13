import React from 'react'
import { Button } from '@blueprintjs/core'
import commonMessages from 'src/util/commonMessages'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { injectIntl, InjectedIntlProps } from 'react-intl'
import { RouteBuilder } from 'src/views/routes'

type Props = {
    isAnswerGiven: boolean
    goNextQuestion: () => void
    className?: string
} & InjectedIntlProps & RouteComponentProps

const ExcersiseNavigationButtons = ({intl, history, isAnswerGiven, goNextQuestion, className}:Props) => (
    <div className={`m-grid m-grid--ver m-grid--space-between m-grid__item i-navigate-buttons ${className || ""}`}>
        <Button
            onClick={() => history.push(RouteBuilder.toDashboard())}>
            {intl.formatMessage(commonMessages.backToMain)}
        </Button>
        <Button
            disabled={!isAnswerGiven}
            active={!isAnswerGiven}
            onClick={goNextQuestion}>
            {intl.formatMessage(commonMessages.nextExcersise)}
        </Button>
    </div>
)

export default withRouter(injectIntl(ExcersiseNavigationButtons))