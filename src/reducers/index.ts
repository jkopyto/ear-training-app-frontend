import { combineReducers } from "redux"
import testReducer from "./testReducer"

const rootReducer = combineReducers({
    testReducer: testReducer
})

export default rootReducer
