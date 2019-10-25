import React from 'react'
import App from './components/App'
import stores from './store'
const { Provider } = require('react-redux')

const Root = () => (
    <Provider store={stores.store}>
        <App />
    </Provider>
)

export default Root