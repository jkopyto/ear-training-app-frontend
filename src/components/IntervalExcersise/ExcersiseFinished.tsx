import React from 'react'
import { Button } from '@blueprintjs/core'
import { RouteBuilder } from 'src/views/routes'
import commonMessages from 'src/util/commonMessages'
import { InjectedIntl, injectIntl } from 'react-intl'
import { RouteComponentProps, withRouter } from 'react-router'

type Props = {
    intl: InjectedIntl
}& RouteComponentProps

const ExcersiseFinished = ({intl, history}: Props) => (
    <Button
        onClick={() => history.push(RouteBuilder.toDashboard())}>
        {intl.formatMessage(commonMessages.backToMain)}
    </Button>
)

export default injectIntl(withRouter(ExcersiseFinished))