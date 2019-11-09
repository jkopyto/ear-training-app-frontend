import { combineReducers } from "redux"
import {LangReducer} from "./langReducer"
import { IntervalScoreReducer } from "./scoreReducer"

const rootReducer = combineReducers({
    LangReducer: LangReducer,
    IntervalScore: IntervalScoreReducer
})

export default rootReducer
