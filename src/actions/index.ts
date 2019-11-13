import * as ActionTypes from "./ActionTypes"
import { ActionType } from "./ActionInterfaces"
import { LangType } from 'src/components/LanguageProvider/LanguageProvider'

export const changeLang = (lang: LangType): ActionType => ({
    type: ActionTypes.CHANGE_LANG,
    lang
})

export const addScore = (): ActionType => ({
    type: ActionTypes.ADD_SCORE
})

export const resetScore = (): ActionType => ({
    type: ActionTypes.RESET_SCORE
})