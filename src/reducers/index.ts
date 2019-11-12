import { combineReducers } from "redux"
import {LangReducer} from "./langReducer"
import { IntervalReducer } from "./scoreReducer"

const rootReducer = combineReducers({
    LangReducer: LangReducer,
    Score: IntervalReducer
})

export default rootReducer
