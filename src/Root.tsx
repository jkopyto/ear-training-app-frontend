import React from 'react'
import App from './components/App'
import stores from './store'
import LanguageProvider from './components/LanguageProvider'
const { Provider } = require('react-redux')

const Root = () => (
    <Provider store={stores.store}>
        <LanguageProvider locale={"pl-PL"}>
            <App />
        </LanguageProvider>
    </Provider>
)

export default Root