import * as ActionTypes from "./ActionTypes"
import { Action } from "redux"
import { LangType } from 'src/components/LanguageProvider/LanguageProvider'

export interface ChangeLangAction extends Action {
    type: typeof ActionTypes.CHANGE_LANG
    lang: LangType
}

export interface AddScoreAction extends Action {
    type: typeof ActionTypes.ADD_SCORE
}

export interface ResetScoreAction extends Action {
    type: typeof ActionTypes.RESET_SCORE
}

export type ActionType =
    | ChangeLangAction
    | AddScoreAction
    | ResetScoreAction