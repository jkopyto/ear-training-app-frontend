import { combineReducers } from "redux"
import {LangReducer} from "./langReducer"

const rootReducer = combineReducers({
    LangReducer: LangReducer
})

export default rootReducer
