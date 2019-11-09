import * as ActionTypes from "./ActionTypes"
import { Action } from "redux"
import { LangType } from 'src/components/LanguageProvider/LanguageProvider'

export interface ChangeLangAction extends Action {
    type: typeof ActionTypes.CHANGE_LANG
    lang: LangType
}

export interface AddIntervalScoreAction extends Action {
    type: typeof ActionTypes.ADD_INTERVAL_SCORE
}

export interface ResetIntervalScoreAction extends Action {
    type: typeof ActionTypes.RESET_INTERVAL_SCORE
}

export type ActionType =
    | ChangeLangAction
    | AddIntervalScoreAction
    | ResetIntervalScoreAction