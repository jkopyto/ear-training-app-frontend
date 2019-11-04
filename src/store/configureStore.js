import { createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import rootReducer from '../reducers'

const configureStore = ({ persistConfig }) => {
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  

  const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  const persistor = persistStore(store)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      store.replaceReducer(rootReducer)
    })
  }

  return { store, persistor }
}

export default configureStore