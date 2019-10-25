import configureStore from "./configureStore"
import persistConfig from "./persistConfig"
import rootReducer from '../reducers'

export type AppState = ReturnType<typeof rootReducer>

export default configureStore({ persistConfig })