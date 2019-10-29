import * as ActionTypes from "./ActionTypes"
import { ActionType } from "./ActionInterfaces"

export const changeLang = (lang: string): ActionType => ({
    type: ActionTypes.CHANGE_LANG,
    lang
})