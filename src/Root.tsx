import React from 'react'
import App from './components/App'
import stores from './store'
import {BrowserRouter as Router} from 'react-router-dom'
const { Provider } = require('react-redux')


const Root = () => (
    <Router>
        <Provider store={stores.store}>
            <App />
        </Provider>
    </Router>
)

export default Root
