import * as ActionTypes from "../actions/ActionTypes"
import { ActionType } from "../actions/ActionInterfaces"
import { LangType } from 'src/components/LanguageProvider/LanguageProvider'

export const LangReducer = (
    state: {
        lang: LangType
    } = {
        lang: "pl"
    },
    action: ActionType
) => {
    switch (action.type) {
        case ActionTypes.CHANGE_LANG:
            return { lang: action.lang }
        default:
            return state
    }
}