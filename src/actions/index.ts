import * as ActionTypes from "./ActionTypes"
import { ActionType } from "./ActionInterfaces"
import { LangType } from 'src/components/LanguageProvider/LanguageProvider'

export const changeLang = (lang: LangType): ActionType => ({
    type: ActionTypes.CHANGE_LANG,
    lang
})

export const addIntervalScore = (): ActionType => ({
    type: ActionTypes.ADD_INTERVAL_SCORE
})

export const resetIntervalScore = (): ActionType => ({
    type: ActionTypes.RESET_INTERVAL_SCORE
})