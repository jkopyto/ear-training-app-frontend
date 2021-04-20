import React from 'react'
import App from './components/App'
import stores from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

/* <--ProjApkInt-->
*
*  Komponent Router pozwala tworzyć routing na stronie
*  Komponent Provider tworzy globalny store dostępny z każdego
*  miejsca aplikacji. Store pozwala na przechowywanie różnych stanów
*  oraz danych
*/
const Root = () => (
    <Router>
        <Provider store={stores.store}>
            <App />
        </Provider>
    </Router>
)

export default Root
