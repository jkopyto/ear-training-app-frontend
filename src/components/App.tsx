import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { RouteBuilder } from 'src/views/routes'
import Dashboard from './Dashboard'
import { connect } from 'react-redux'
import { AppState } from 'src/store'
import LanguageProvider from './LanguageProvider'

type Props = {
    locale: string
}

const App = ({ locale }: Props) => {
    const lang = `${locale === "GB" ? "en" : locale.toLowerCase()}-${locale}` as "en-GB" | "pl-PL"
    
    return (
        <LanguageProvider locale={lang}>
            <Switch>
                <Route
                    path="/dashboard"
                    component={Dashboard}
                />
                <Redirect
                    exact
                    from="/"
                    to={RouteBuilder.toDashboard()}
                />
            </Switch>
        </LanguageProvider>
    )
}

    
const mapStateToProps = (state: AppState) => ({
    locale: state.LangReducer.lang
})

export default connect(mapStateToProps)(App)