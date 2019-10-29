import * as ActionTypes from "./ActionTypes"
import { Action } from "redux"

export interface ChangeLangAction extends Action {
    type: typeof ActionTypes.CHANGE_LANG
    lang: string
}

export type ActionType =
    | ChangeLangAction