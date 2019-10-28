import React from 'react'
import App from './components/App'
import stores from './store'
import LanguageProvider from './components/LanguageProvider'
import {BrowserRouter as Router} from 'react-router-dom'
const { Provider } = require('react-redux')

const Root = () => (
    <Router>
        <Provider store={stores.store}>
            <LanguageProvider locale={"pl-PL"}>
                <App />
            </LanguageProvider>
        </Provider>
    </Router>
)

export default Root