import * as ActionTypes from "./ActionTypes"
import { Action } from "redux"

export interface HideSubheaderAction extends Action {
    type: typeof ActionTypes.HIDE_SUBHEADER
}

export interface ShowSubheaderAction extends Action {
    type: typeof ActionTypes.SHOW_SUBHEADER
}
export type ActionType =
    | HideSubheaderAction
    | ShowSubheaderAction