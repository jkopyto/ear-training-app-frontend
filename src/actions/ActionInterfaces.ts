import * as ActionTypes from "./ActionTypes"
import { Action } from "redux"
import { LangType } from 'src/components/LanguageProvider/LanguageProvider'

export interface ChangeLangAction extends Action {
    type: typeof ActionTypes.CHANGE_LANG
    lang: LangType
}

export type ActionType =
    | ChangeLangAction