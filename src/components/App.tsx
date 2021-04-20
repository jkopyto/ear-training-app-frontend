import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { RouteBuilder } from 'src/views/routes'
import Dashboard from './Dashboard'
import { connect } from 'react-redux'
import { AppState } from 'src/store'
import LanguageProvider from './LanguageProvider'
import {LangType} from 'src/components/LanguageProvider/LanguageProvider'

type Props = {
    locale: LangType
}

/* <--ProjApkInt-->
*
*  Komponent LanguageProvider odpowiada za poprawną obsługę języków
*  oraz reaguje na jego zmianę. Wartość locale pobierana jest ze store Redux'a
*  Komponent Switch realizuję przełączanie ścieżek. W przypadku kiedy
*  użytkownik wejdzie pod www.domain.com zostanie przekierowany na
*  www.domain.com/dashboard
*/
const App = ({ locale }: Props) => {    
    return (
        <LanguageProvider locale={locale}>
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