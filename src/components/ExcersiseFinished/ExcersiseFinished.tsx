import React from 'react'
import { Button } from '@blueprintjs/core'
import { RouteBuilder } from 'src/views/routes'
import commonMessages from 'src/util/commonMessages'
import { InjectedIntl, injectIntl, FormattedMessage } from 'react-intl'
import { RouteComponentProps, withRouter } from 'react-router'
import { AppState } from 'src/store'
import { connect } from 'react-redux'

type Props = {
    intl: InjectedIntl
    score: number
    
}& RouteComponentProps

const ExcersiseFinished = ({intl, score, history}: Props) => (
    <div className= "i-excersise-finished">
        <FormattedMessage
            id="excersise-finished"
            defaultMessage="Congratulations. You've finished this excersise">
                {msg => <p>{msg}</p>}
        </FormattedMessage>
        <FormattedMessage
            id="finish-score"
            defaultMessage={`{br}Your score is: {score}`}
            values={{
                score: <strong>{score}</strong>,
                br: <br />
            }}
        />
        <Button
            onClick={() => history.push(RouteBuilder.toDashboard())}>
            {intl.formatMessage(commonMessages.backToMain)}
        </Button>
    </div>
)

const mapStateToProps = (state:AppState) => ({
    score: state.Score.score
})

export default connect(mapStateToProps)(injectIntl(withRouter(ExcersiseFinished)))